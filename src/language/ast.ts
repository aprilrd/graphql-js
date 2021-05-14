import type { Source } from './source';
import type { TokenKindEnum } from './tokenKind';

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
export class Location {
  /**
   * The character offset at which this Node begins.
   */
<<<<<<< HEAD
  readonly start: number;
=======
  +start: number;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  /**
   * The character offset at which this Node ends.
   */
<<<<<<< HEAD
  readonly end: number;
=======
  +end: number;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  /**
   * The Token at which this Node begins.
   */
<<<<<<< HEAD
  readonly startToken: Token;
=======
  +startToken: Token;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  /**
   * The Token at which this Node ends.
   */
<<<<<<< HEAD
  readonly endToken: Token;
=======
  +endToken: Token;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  /**
   * The Source document the AST represents.
   */
<<<<<<< HEAD
  readonly source: Source;
=======
  +source: Source;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  constructor(startToken: Token, endToken: Token, source: Source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  toJSON(): { start: number; end: number } {
    return { start: this.start, end: this.end };
  }
}

/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */
export class Token {
  /**
   * The kind of Token.
   */
<<<<<<< HEAD
  readonly kind: TokenKindEnum;
=======
  +kind: TokenKindEnum;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  /**
   * The character offset at which this Node begins.
   */
<<<<<<< HEAD
  readonly start: number;
=======
  +start: number;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  /**
   * The character offset at which this Node ends.
   */
<<<<<<< HEAD
  readonly end: number;
=======
  +end: number;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  /**
   * The 1-indexed line number on which this Token appears.
   */
<<<<<<< HEAD
  readonly line: number;
=======
  +line: number;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  /**
   * The 1-indexed column number at which this Token begins.
   */
<<<<<<< HEAD
  readonly column: number;

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  readonly value: string;
=======
  +column: number;

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */
  +value: string | void;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
<<<<<<< HEAD
  readonly prev: Token | null;
  readonly next: Token | null;
=======
  +prev: Token | null;
  +next: Token | null;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

  constructor(
    kind: TokenKindEnum,
    start: number,
    end: number,
    line: number,
    column: number,
    prev: Token | null,
    value?: string,
  ) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
<<<<<<< HEAD
    this.value = value as string;
=======
    this.value = value;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
    this.prev = prev;
    this.next = null;
  }

  toJSON(): {
    kind: TokenKindEnum;
<<<<<<< HEAD
    value?: string;
=======
    value: string | void;
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
    line: number;
    column: number;
  } {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column,
    };
  }
}

/**
 * @internal
 */
<<<<<<< HEAD
export function isNode(maybeNode: any): maybeNode is ASTNode {
  return typeof maybeNode?.kind === 'string';
=======
export function isNode(maybeNode: mixed): boolean %checks {
  return maybeNode != null && typeof maybeNode.kind === 'string';
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
}

/**
 * The list of all possible AST node types.
 */
export type ASTNode =
  | NameNode
  | DocumentNode
  | OperationDefinitionNode
  | VariableDefinitionNode
  | VariableNode
  | SelectionSetNode
  | FieldNode
  | ArgumentNode
  | FragmentSpreadNode
  | InlineFragmentNode
  | FragmentDefinitionNode
  | IntValueNode
  | FloatValueNode
  | StringValueNode
  | BooleanValueNode
  | NullValueNode
  | EnumValueNode
  | ListValueNode
  | ObjectValueNode
  | ObjectFieldNode
  | DirectiveNode
  | NamedTypeNode
  | ListTypeNode
  | NonNullTypeNode
  | SchemaDefinitionNode
  | OperationTypeDefinitionNode
  | ScalarTypeDefinitionNode
  | ObjectTypeDefinitionNode
  | FieldDefinitionNode
  | InputValueDefinitionNode
  | InterfaceTypeDefinitionNode
  | UnionTypeDefinitionNode
  | EnumTypeDefinitionNode
  | EnumValueDefinitionNode
  | InputObjectTypeDefinitionNode
  | DirectiveDefinitionNode
  | SchemaExtensionNode
  | ScalarTypeExtensionNode
  | ObjectTypeExtensionNode
  | InterfaceTypeExtensionNode
  | UnionTypeExtensionNode
  | EnumTypeExtensionNode
  | InputObjectTypeExtensionNode;

/**
 * Utility type listing all nodes indexed by their kind.
 */
<<<<<<< HEAD
export interface ASTKindToNode {
=======
export type ASTKindToNode = {
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
  Name: NameNode;
  Document: DocumentNode;
  OperationDefinition: OperationDefinitionNode;
  VariableDefinition: VariableDefinitionNode;
  Variable: VariableNode;
  SelectionSet: SelectionSetNode;
  Field: FieldNode;
  Argument: ArgumentNode;
  FragmentSpread: FragmentSpreadNode;
  InlineFragment: InlineFragmentNode;
  FragmentDefinition: FragmentDefinitionNode;
  IntValue: IntValueNode;
  FloatValue: FloatValueNode;
  StringValue: StringValueNode;
  BooleanValue: BooleanValueNode;
  NullValue: NullValueNode;
  EnumValue: EnumValueNode;
  ListValue: ListValueNode;
  ObjectValue: ObjectValueNode;
  ObjectField: ObjectFieldNode;
  Directive: DirectiveNode;
  NamedType: NamedTypeNode;
  ListType: ListTypeNode;
  NonNullType: NonNullTypeNode;
  SchemaDefinition: SchemaDefinitionNode;
  OperationTypeDefinition: OperationTypeDefinitionNode;
  ScalarTypeDefinition: ScalarTypeDefinitionNode;
  ObjectTypeDefinition: ObjectTypeDefinitionNode;
  FieldDefinition: FieldDefinitionNode;
  InputValueDefinition: InputValueDefinitionNode;
  InterfaceTypeDefinition: InterfaceTypeDefinitionNode;
  UnionTypeDefinition: UnionTypeDefinitionNode;
  EnumTypeDefinition: EnumTypeDefinitionNode;
  EnumValueDefinition: EnumValueDefinitionNode;
  InputObjectTypeDefinition: InputObjectTypeDefinitionNode;
  DirectiveDefinition: DirectiveDefinitionNode;
  SchemaExtension: SchemaExtensionNode;
  ScalarTypeExtension: ScalarTypeExtensionNode;
  ObjectTypeExtension: ObjectTypeExtensionNode;
  InterfaceTypeExtension: InterfaceTypeExtensionNode;
  UnionTypeExtension: UnionTypeExtensionNode;
  EnumTypeExtension: EnumTypeExtensionNode;
  InputObjectTypeExtension: InputObjectTypeExtensionNode;
<<<<<<< HEAD
}

/** Name */

export interface NameNode {
  readonly kind: 'Name';
  readonly loc?: Location;
  readonly value: string;
}

/** Document */

export interface DocumentNode {
  readonly kind: 'Document';
  readonly loc?: Location;
  readonly definitions: ReadonlyArray<DefinitionNode>;
}
=======
};

// Name

export type NameNode = {
  +kind: 'Name';
  +loc?: Location;
  +value: string;
};

// Document

export type DocumentNode = {
  +kind: 'Document';
  +loc?: Location;
  +definitions: $ReadOnlyArray<DefinitionNode>;
};
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

export type DefinitionNode =
  | ExecutableDefinitionNode
  | TypeSystemDefinitionNode
  | TypeSystemExtensionNode;

export type ExecutableDefinitionNode =
  | OperationDefinitionNode
  | FragmentDefinitionNode;

<<<<<<< HEAD
export interface OperationDefinitionNode {
  readonly kind: 'OperationDefinition';
  readonly loc?: Location;
  readonly operation: OperationTypeNode;
  readonly name?: NameNode;
  readonly variableDefinitions?: ReadonlyArray<VariableDefinitionNode>;
  readonly directives?: ReadonlyArray<DirectiveNode>;
  readonly selectionSet: SelectionSetNode;
}

export type OperationTypeNode = 'query' | 'mutation' | 'subscription';

export interface VariableDefinitionNode {
  readonly kind: 'VariableDefinition';
  readonly loc?: Location;
  readonly variable: VariableNode;
  readonly type: TypeNode;
  readonly defaultValue?: ConstValueNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}

export interface VariableNode {
  readonly kind: 'Variable';
  readonly loc?: Location;
  readonly name: NameNode;
}

export interface SelectionSetNode {
  kind: 'SelectionSet';
  loc?: Location;
  selections: ReadonlyArray<SelectionNode>;
}

export type SelectionNode = FieldNode | FragmentSpreadNode | InlineFragmentNode;

export interface FieldNode {
  readonly kind: 'Field';
  readonly loc?: Location;
  readonly alias?: NameNode;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<ArgumentNode>;
  readonly directives?: ReadonlyArray<DirectiveNode>;
  readonly selectionSet?: SelectionSetNode;
}

export interface ArgumentNode {
  readonly kind: 'Argument';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly value: ValueNode;
}

export interface ConstArgumentNode {
  readonly kind: 'Argument';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly value: ConstValueNode;
}

/** Fragments */

export interface FragmentSpreadNode {
  readonly kind: 'FragmentSpread';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<DirectiveNode>;
}

export interface InlineFragmentNode {
  readonly kind: 'InlineFragment';
  readonly loc?: Location;
  readonly typeCondition?: NamedTypeNode;
  readonly directives?: ReadonlyArray<DirectiveNode>;
  readonly selectionSet: SelectionSetNode;
}

export interface FragmentDefinitionNode {
  readonly kind: 'FragmentDefinition';
  readonly loc?: Location;
  readonly name: NameNode;
  /** @deprecated variableDefinitions will be removed in v17.0.0 */
  readonly variableDefinitions?: ReadonlyArray<VariableDefinitionNode>;
  readonly typeCondition: NamedTypeNode;
  readonly directives?: ReadonlyArray<DirectiveNode>;
  readonly selectionSet: SelectionSetNode;
}

/** Values */
=======
export type OperationDefinitionNode = {
  +kind: 'OperationDefinition';
  +loc?: Location;
  +operation: OperationTypeNode;
  +name?: NameNode;
  +variableDefinitions?: $ReadOnlyArray<VariableDefinitionNode>;
  +directives?: $ReadOnlyArray<DirectiveNode>;
  +selectionSet: SelectionSetNode;
};

export type OperationTypeNode = 'query' | 'mutation' | 'subscription';

export type VariableDefinitionNode = {
  +kind: 'VariableDefinition';
  +loc?: Location;
  +variable: VariableNode;
  +type: TypeNode;
  +defaultValue?: ConstValueNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
};

export type VariableNode = {
  +kind: 'Variable';
  +loc?: Location;
  +name: NameNode;
};

export type SelectionSetNode = {
  kind: 'SelectionSet';
  loc?: Location;
  selections: $ReadOnlyArray<SelectionNode>;
};

export type SelectionNode = FieldNode | FragmentSpreadNode | InlineFragmentNode;

export type FieldNode = {
  +kind: 'Field';
  +loc?: Location;
  +alias?: NameNode;
  +name: NameNode;
  +arguments?: $ReadOnlyArray<ArgumentNode>;
  +directives?: $ReadOnlyArray<DirectiveNode>;
  +selectionSet?: SelectionSetNode;
};

export type ArgumentNode = {
  +kind: 'Argument';
  +loc?: Location;
  +name: NameNode;
  +value: ValueNode;
};

export type ConstArgumentNode = {
  +kind: 'Argument';
  +loc?: Location;
  +name: NameNode;
  +value: ConstValueNode;
};

// Fragments

export type FragmentSpreadNode = {
  +kind: 'FragmentSpread';
  +loc?: Location;
  +name: NameNode;
  +directives?: $ReadOnlyArray<DirectiveNode>;
};

export type InlineFragmentNode = {
  +kind: 'InlineFragment';
  +loc?: Location;
  +typeCondition?: NamedTypeNode;
  +directives?: $ReadOnlyArray<DirectiveNode>;
  +selectionSet: SelectionSetNode;
};

export type FragmentDefinitionNode = {
  +kind: 'FragmentDefinition';
  +loc?: Location;
  +name: NameNode;
  // Note: fragment variable definitions are deprecated and will removed in v17.0.0
  +variableDefinitions?: $ReadOnlyArray<VariableDefinitionNode>;
  +typeCondition: NamedTypeNode;
  +directives?: $ReadOnlyArray<DirectiveNode>;
  +selectionSet: SelectionSetNode;
};

// Values
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

export type ValueNode =
  | VariableNode
  | IntValueNode
  | FloatValueNode
  | StringValueNode
  | BooleanValueNode
  | NullValueNode
  | EnumValueNode
  | ListValueNode
  | ObjectValueNode;

export type ConstValueNode =
  | IntValueNode
  | FloatValueNode
  | StringValueNode
  | BooleanValueNode
  | NullValueNode
  | EnumValueNode
  | ConstListValueNode
  | ConstObjectValueNode;

<<<<<<< HEAD
export interface IntValueNode {
  readonly kind: 'IntValue';
  readonly loc?: Location;
  readonly value: string;
}

export interface FloatValueNode {
  readonly kind: 'FloatValue';
  readonly loc?: Location;
  readonly value: string;
}

export interface StringValueNode {
  readonly kind: 'StringValue';
  readonly loc?: Location;
  readonly value: string;
  readonly block?: boolean;
}

export interface BooleanValueNode {
  readonly kind: 'BooleanValue';
  readonly loc?: Location;
  readonly value: boolean;
}

export interface NullValueNode {
  readonly kind: 'NullValue';
  readonly loc?: Location;
}

export interface EnumValueNode {
  readonly kind: 'EnumValue';
  readonly loc?: Location;
  readonly value: string;
}

export interface ListValueNode {
  readonly kind: 'ListValue';
  readonly loc?: Location;
  readonly values: ReadonlyArray<ValueNode>;
}

export interface ConstListValueNode {
  readonly kind: 'ListValue';
  readonly loc?: Location;
  readonly values: ReadonlyArray<ConstValueNode>;
}

export interface ObjectValueNode {
  readonly kind: 'ObjectValue';
  readonly loc?: Location;
  readonly fields: ReadonlyArray<ObjectFieldNode>;
}

export interface ConstObjectValueNode {
  readonly kind: 'ObjectValue';
  readonly loc?: Location;
  readonly fields: ReadonlyArray<ConstObjectFieldNode>;
}

export interface ObjectFieldNode {
  readonly kind: 'ObjectField';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly value: ValueNode;
}

export interface ConstObjectFieldNode {
  readonly kind: 'ObjectField';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly value: ConstValueNode;
}

/** Directives */

export interface DirectiveNode {
  readonly kind: 'Directive';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<ArgumentNode>;
}

export interface ConstDirectiveNode {
  readonly kind: 'Directive';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<ConstArgumentNode>;
}

/** Type Reference */

export type TypeNode = NamedTypeNode | ListTypeNode | NonNullTypeNode;

export interface NamedTypeNode {
  readonly kind: 'NamedType';
  readonly loc?: Location;
  readonly name: NameNode;
}

export interface ListTypeNode {
  readonly kind: 'ListType';
  readonly loc?: Location;
  readonly type: TypeNode;
}

export interface NonNullTypeNode {
  readonly kind: 'NonNullType';
  readonly loc?: Location;
  readonly type: NamedTypeNode | ListTypeNode;
}

/** Type System Definition */
=======
export type IntValueNode = {
  +kind: 'IntValue';
  +loc?: Location;
  +value: string;
};

export type FloatValueNode = {
  +kind: 'FloatValue';
  +loc?: Location;
  +value: string;
};

export type StringValueNode = {
  +kind: 'StringValue';
  +loc?: Location;
  +value: string;
  +block?: boolean;
};

export type BooleanValueNode = {
  +kind: 'BooleanValue';
  +loc?: Location;
  +value: boolean;
};

export type NullValueNode = {
  +kind: 'NullValue';
  +loc?: Location;
};

export type EnumValueNode = {
  +kind: 'EnumValue';
  +loc?: Location;
  +value: string;
};

export type ListValueNode = {
  +kind: 'ListValue';
  +loc?: Location;
  +values: $ReadOnlyArray<ValueNode>;
};

export type ConstListValueNode = {
  +kind: 'ListValue';
  +loc?: Location;
  +values: $ReadOnlyArray<ConstValueNode>;
};

export type ObjectValueNode = {
  +kind: 'ObjectValue';
  +loc?: Location;
  +fields: $ReadOnlyArray<ObjectFieldNode>;
};

export type ConstObjectValueNode = {
  +kind: 'ObjectValue';
  +loc?: Location;
  +fields: $ReadOnlyArray<ConstObjectFieldNode>;
};

export type ObjectFieldNode = {
  +kind: 'ObjectField';
  +loc?: Location;
  +name: NameNode;
  +value: ValueNode;
};

export type ConstObjectFieldNode = {
  +kind: 'ObjectField';
  +loc?: Location;
  +name: NameNode;
  +value: ConstValueNode;
};

// Directives

export type DirectiveNode = {
  +kind: 'Directive';
  +loc?: Location;
  +name: NameNode;
  +arguments?: $ReadOnlyArray<ArgumentNode>;
};

export type ConstDirectiveNode = {
  +kind: 'Directive';
  +loc?: Location;
  +name: NameNode;
  +arguments?: $ReadOnlyArray<ConstArgumentNode>;
};

// Type Reference

export type TypeNode = NamedTypeNode | ListTypeNode | NonNullTypeNode;

export type NamedTypeNode = {
  +kind: 'NamedType';
  +loc?: Location;
  +name: NameNode;
};

export type ListTypeNode = {
  +kind: 'ListType';
  +loc?: Location;
  +type: TypeNode;
};

export type NonNullTypeNode = {
  +kind: 'NonNullType';
  +loc?: Location;
  +type: NamedTypeNode | ListTypeNode;
};

// Type System Definition
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

export type TypeSystemDefinitionNode =
  | SchemaDefinitionNode
  | TypeDefinitionNode
  | DirectiveDefinitionNode;

<<<<<<< HEAD
export interface SchemaDefinitionNode {
  readonly kind: 'SchemaDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly operationTypes: ReadonlyArray<OperationTypeDefinitionNode>;
}

export interface OperationTypeDefinitionNode {
  readonly kind: 'OperationTypeDefinition';
  readonly loc?: Location;
  readonly operation: OperationTypeNode;
  readonly type: NamedTypeNode;
}

/** Type Definition */
=======
export type SchemaDefinitionNode = {
  +kind: 'SchemaDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +operationTypes: $ReadOnlyArray<OperationTypeDefinitionNode>;
};

export type OperationTypeDefinitionNode = {
  +kind: 'OperationTypeDefinition';
  +loc?: Location;
  +operation: OperationTypeNode;
  +type: NamedTypeNode;
};

// Type Definition
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

export type TypeDefinitionNode =
  | ScalarTypeDefinitionNode
  | ObjectTypeDefinitionNode
  | InterfaceTypeDefinitionNode
  | UnionTypeDefinitionNode
  | EnumTypeDefinitionNode
  | InputObjectTypeDefinitionNode;

<<<<<<< HEAD
export interface ScalarTypeDefinitionNode {
  readonly kind: 'ScalarTypeDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}

export interface ObjectTypeDefinitionNode {
  readonly kind: 'ObjectTypeDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly interfaces?: ReadonlyArray<NamedTypeNode>;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}

export interface FieldDefinitionNode {
  readonly kind: 'FieldDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<InputValueDefinitionNode>;
  readonly type: TypeNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}

export interface InputValueDefinitionNode {
  readonly kind: 'InputValueDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly type: TypeNode;
  readonly defaultValue?: ConstValueNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}

export interface InterfaceTypeDefinitionNode {
  readonly kind: 'InterfaceTypeDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly interfaces?: ReadonlyArray<NamedTypeNode>;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}

export interface UnionTypeDefinitionNode {
  readonly kind: 'UnionTypeDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly types?: ReadonlyArray<NamedTypeNode>;
}

export interface EnumTypeDefinitionNode {
  readonly kind: 'EnumTypeDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly values?: ReadonlyArray<EnumValueDefinitionNode>;
}

export interface EnumValueDefinitionNode {
  readonly kind: 'EnumValueDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}

export interface InputObjectTypeDefinitionNode {
  readonly kind: 'InputObjectTypeDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<InputValueDefinitionNode>;
}

/** Directive Definitions */

export interface DirectiveDefinitionNode {
  readonly kind: 'DirectiveDefinition';
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<InputValueDefinitionNode>;
  readonly repeatable: boolean;
  readonly locations: ReadonlyArray<NameNode>;
}

/** Type System Extensions */

export type TypeSystemExtensionNode = SchemaExtensionNode | TypeExtensionNode;

export interface SchemaExtensionNode {
  readonly kind: 'SchemaExtension';
  readonly loc?: Location;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly operationTypes?: ReadonlyArray<OperationTypeDefinitionNode>;
}

/** Type Extensions */
=======
export type ScalarTypeDefinitionNode = {
  +kind: 'ScalarTypeDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
};

export type ObjectTypeDefinitionNode = {
  +kind: 'ObjectTypeDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +interfaces?: $ReadOnlyArray<NamedTypeNode>;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +fields?: $ReadOnlyArray<FieldDefinitionNode>;
};

export type FieldDefinitionNode = {
  +kind: 'FieldDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +arguments?: $ReadOnlyArray<InputValueDefinitionNode>;
  +type: TypeNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
};

export type InputValueDefinitionNode = {
  +kind: 'InputValueDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +type: TypeNode;
  +defaultValue?: ConstValueNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
};

export type InterfaceTypeDefinitionNode = {
  +kind: 'InterfaceTypeDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +interfaces?: $ReadOnlyArray<NamedTypeNode>;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +fields?: $ReadOnlyArray<FieldDefinitionNode>;
};

export type UnionTypeDefinitionNode = {
  +kind: 'UnionTypeDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +types?: $ReadOnlyArray<NamedTypeNode>;
};

export type EnumTypeDefinitionNode = {
  +kind: 'EnumTypeDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +values?: $ReadOnlyArray<EnumValueDefinitionNode>;
};

export type EnumValueDefinitionNode = {
  +kind: 'EnumValueDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
};

export type InputObjectTypeDefinitionNode = {
  +kind: 'InputObjectTypeDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +fields?: $ReadOnlyArray<InputValueDefinitionNode>;
};

// Directive Definitions

export type DirectiveDefinitionNode = {
  +kind: 'DirectiveDefinition';
  +loc?: Location;
  +description?: StringValueNode;
  +name: NameNode;
  +arguments?: $ReadOnlyArray<InputValueDefinitionNode>;
  +repeatable: boolean;
  +locations: $ReadOnlyArray<NameNode>;
};

// Type System Extensions

export type TypeSystemExtensionNode = SchemaExtensionNode | TypeExtensionNode;

export type SchemaExtensionNode = {
  +kind: 'SchemaExtension';
  +loc?: Location;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +operationTypes?: $ReadOnlyArray<OperationTypeDefinitionNode>;
};

// Type Extensions
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

export type TypeExtensionNode =
  | ScalarTypeExtensionNode
  | ObjectTypeExtensionNode
  | InterfaceTypeExtensionNode
  | UnionTypeExtensionNode
  | EnumTypeExtensionNode
  | InputObjectTypeExtensionNode;

<<<<<<< HEAD
export interface ScalarTypeExtensionNode {
  readonly kind: 'ScalarTypeExtension';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}

export interface ObjectTypeExtensionNode {
  readonly kind: 'ObjectTypeExtension';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly interfaces?: ReadonlyArray<NamedTypeNode>;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}

export interface InterfaceTypeExtensionNode {
  readonly kind: 'InterfaceTypeExtension';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly interfaces?: ReadonlyArray<NamedTypeNode>;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}

export interface UnionTypeExtensionNode {
  readonly kind: 'UnionTypeExtension';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly types?: ReadonlyArray<NamedTypeNode>;
}

export interface EnumTypeExtensionNode {
  readonly kind: 'EnumTypeExtension';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly values?: ReadonlyArray<EnumValueDefinitionNode>;
}

export interface InputObjectTypeExtensionNode {
  readonly kind: 'InputObjectTypeExtension';
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<InputValueDefinitionNode>;
}
=======
export type ScalarTypeExtensionNode = {
  +kind: 'ScalarTypeExtension';
  +loc?: Location;
  +name: NameNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
};

export type ObjectTypeExtensionNode = {
  +kind: 'ObjectTypeExtension';
  +loc?: Location;
  +name: NameNode;
  +interfaces?: $ReadOnlyArray<NamedTypeNode>;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +fields?: $ReadOnlyArray<FieldDefinitionNode>;
};

export type InterfaceTypeExtensionNode = {
  +kind: 'InterfaceTypeExtension';
  +loc?: Location;
  +name: NameNode;
  +interfaces?: $ReadOnlyArray<NamedTypeNode>;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +fields?: $ReadOnlyArray<FieldDefinitionNode>;
};

export type UnionTypeExtensionNode = {
  +kind: 'UnionTypeExtension';
  +loc?: Location;
  +name: NameNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +types?: $ReadOnlyArray<NamedTypeNode>;
};

export type EnumTypeExtensionNode = {
  +kind: 'EnumTypeExtension';
  +loc?: Location;
  +name: NameNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +values?: $ReadOnlyArray<EnumValueDefinitionNode>;
};

export type InputObjectTypeExtensionNode = {
  +kind: 'InputObjectTypeExtension';
  +loc?: Location;
  +name: NameNode;
  +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  +fields?: $ReadOnlyArray<InputValueDefinitionNode>;
};
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
