import { inspect } from '../jsutils/inspect';
import type { Maybe } from '../jsutils/Maybe';

import type { ASTNode } from '../language/ast';

import { GraphQLError } from './GraphQLError';

/**
 * Given an arbitrary value, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
export function locatedError(
  rawOriginalError: unknown,
<<<<<<< HEAD
<<<<<<< HEAD
  nodes: ASTNode | ReadonlyArray<ASTNode> | undefined | null,
=======
  nodes: ASTNode | ReadonlyArray<ASTNode> | void | null,
>>>>>>> Switch to TS syntax (#3090)
=======
  nodes: ASTNode | ReadonlyArray<ASTNode> | undefined | null,
>>>>>>> TEMPORARY: Replace `void` with `undefined`
  path?: Maybe<ReadonlyArray<string | number>>,
): GraphQLError {
  // Sometimes a non-error is thrown, wrap it as an Error instance to ensure a consistent Error interface.
  const originalError: Error | GraphQLError =
    rawOriginalError instanceof Error
      ? rawOriginalError
      : new Error('Unexpected error value: ' + inspect(rawOriginalError));

  // Note: this uses a brand-check to support GraphQL errors originating from other contexts.
<<<<<<< HEAD
<<<<<<< HEAD
  if (isLocatedGraphQLError(originalError)) {
=======
=======
  // @ts-expect-error FIXME: TS Conversion
>>>>>>> add fixme and type assertions
  if (Array.isArray(originalError.path)) {
    // @ts-expect-error
>>>>>>> convert `$FlowExpectedError` to `@ts-expect-error`
    return originalError;
  }

  return new GraphQLError(
    originalError.message,
<<<<<<< HEAD
    (originalError as GraphQLError).nodes ?? nodes,
    (originalError as GraphQLError).source,
    (originalError as GraphQLError).positions,
=======
    // @ts-expect-error FIXME
    originalError.nodes ?? nodes,
    // @ts-expect-error FIXME
    originalError.source,
    // @ts-expect-error FIXME
    originalError.positions,
>>>>>>> Replace `$FlowFixMe` with `@ts-expect-error`
    path,
    originalError,
  );
}

function isLocatedGraphQLError(error: any): error is GraphQLError {
  return Array.isArray(error.path);
}
