import { inspect } from '../../jsutils/inspect';
import { keyMap } from '../../jsutils/keyMap';
import type { ObjMap } from '../../jsutils/ObjMap';

import { GraphQLError } from '../../error/GraphQLError';

import type { ASTVisitor } from '../../language/visitor';
import type { FieldNode, InputValueDefinitionNode } from '../../language/ast';
import { Kind } from '../../language/kinds';
import { print } from '../../language/printer';

import { specifiedDirectives } from '../../type/directives';
import { isType, isRequiredArgument } from '../../type/definition';
import type { GraphQLArgument } from '../../type/definition';

import type {
  ValidationContext,
  SDLValidationContext,
} from '../ValidationContext';

/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */
export function ProvidedRequiredArgumentsRule(
  context: ValidationContext,
): ASTVisitor {
  return {
    // eslint-disable-next-line new-cap
    ...ProvidedRequiredArgumentsOnDirectivesRule(context),
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave(fieldNode: FieldNode) {
        const fieldDef = context.getFieldDef();
        if (!fieldDef) {
          return false;
        }

        const providedArgs = new Set(
          // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
          fieldNode.arguments?.map((arg) => arg.name.value),
        );
        for (const argDef of fieldDef.args) {
          if (!providedArgs.has(argDef.name) && isRequiredArgument(argDef)) {
            const argTypeStr = inspect(argDef.type);
            context.reportError(
              new GraphQLError(
                `Field "${fieldDef.name}" argument "${argDef.name}" of type "${argTypeStr}" is required, but it was not provided.`,
                fieldNode,
              ),
            );
          }
        }
      },
    },
  };
}

/**
 * @internal
 */
export function ProvidedRequiredArgumentsOnDirectivesRule(
  context: ValidationContext | SDLValidationContext,
): ASTVisitor {
  const requiredArgsMap: ObjMap<
    ObjMap<GraphQLArgument | InputValueDefinitionNode>
  > = Object.create(null);

  const schema = context.getSchema();
  const definedDirectives = schema?.getDirectives() ?? specifiedDirectives;
  for (const directive of definedDirectives) {
    requiredArgsMap[directive.name] = keyMap(
      directive.args.filter(isRequiredArgument),
      (arg) => arg.name,
    );
  }

  const astDefinitions = context.getDocument().definitions;
  for (const def of astDefinitions) {
    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
      const argNodes = def.arguments ?? [];

      requiredArgsMap[def.name.value] = keyMap(
        argNodes.filter(isRequiredArgumentNode),
        (arg) => arg.name.value,
      );
    }
  }

  return {
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave(directiveNode) {
        const directiveName = directiveNode.name.value;
        const requiredArgs = requiredArgsMap[directiveName];
        if (requiredArgs) {
          // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
          const argNodes = directiveNode.arguments ?? [];
          const argNodeMap = new Set(argNodes.map((arg) => arg.name.value));
          for (const [argName, argDef] of Object.entries(requiredArgs)) {
            if (!argNodeMap.has(argName)) {
              const argType = isType(argDef.type)
                ? inspect(argDef.type)
                : print(argDef.type);
              context.reportError(
                new GraphQLError(
                  `Directive "@${directiveName}" argument "${argName}" of type "${argType}" is required, but it was not provided.`,
                  directiveNode,
                ),
              );
            }
          }
        }
      },
    },
  };
}

function isRequiredArgumentNode(arg: InputValueDefinitionNode): boolean {
  return arg.type.kind === Kind.NON_NULL_TYPE && arg.defaultValue == null;
}