import { devAssert } from '../jsutils/devAssert';

import type { SourceLocation } from '../language/location';

import type { GraphQLError } from './GraphQLError';

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
export function formatError(error: GraphQLError): GraphQLFormattedError {
  devAssert(error, 'Received null or undefined error.');
  const message = error.message ?? 'An unknown error occurred.';
  const locations = error.locations;
  const path = error.path;
  const extensions = error.extensions;

  return extensions
    ? { message, locations, path, extensions }
    : { message, locations, path };
}

/**
 * @see https://github.com/graphql/graphql-spec/blob/master/spec/Section%207%20--%20Response.md#errors
 */
export interface GraphQLFormattedError {
  /**
   * A short, human-readable summary of the problem that **SHOULD NOT** change
   * from occurrence to occurrence of the problem, except for purposes of
   * localization.
   */
<<<<<<< HEAD
<<<<<<< HEAD:src/error/formatError.ts
  readonly message: string;
=======
  +message: string;
>>>>>>> Flow: use semicolon as separate inside types (#3089):src/error/formatError.js
=======
  readonly message: string;
>>>>>>> Switch to TS syntax (#3090)
  /**
   * If an error can be associated to a particular point in the requested
   * GraphQL document, it should contain a list of locations.
   */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/error/formatError.ts
  readonly locations?: ReadonlyArray<SourceLocation>;
=======
  +locations: $ReadOnlyArray<SourceLocation> | void;
>>>>>>> Flow: use semicolon as separate inside types (#3089):src/error/formatError.js
=======
  readonly locations: ReadonlyArray<SourceLocation> | void;
>>>>>>> Switch to TS syntax (#3090)
=======
  readonly locations: ReadonlyArray<SourceLocation> | undefined;
>>>>>>> TEMPORARY: Replace `void` with `undefined`
  /**
   * If an error can be associated to a particular field in the GraphQL result,
   * it _must_ contain an entry with the key `path` that details the path of
   * the response field which experienced the error. This allows clients to
   * identify whether a null result is intentional or caused by a runtime error.
   */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/error/formatError.ts
  readonly path?: ReadonlyArray<string | number>;
=======
  +path: $ReadOnlyArray<string | number> | void;
>>>>>>> Flow: use semicolon as separate inside types (#3089):src/error/formatError.js
=======
  readonly path: ReadonlyArray<string | number> | void;
>>>>>>> Switch to TS syntax (#3090)
=======
  readonly path: ReadonlyArray<string | number> | undefined;
>>>>>>> TEMPORARY: Replace `void` with `undefined`
  /**
   * Reserved for implementors to extend the protocol however they see fit,
   * and hence there are no additional restrictions on its contents.
   */
<<<<<<< HEAD
<<<<<<< HEAD:src/error/formatError.ts
  readonly extensions?: { [key: string]: unknown };
}
=======
  +extensions?: { [key: string]: mixed; ... };
=======
  readonly extensions?: { [key: string]: unknown };
>>>>>>> Switch to TS syntax (#3090)
};
>>>>>>> Flow: use semicolon as separate inside types (#3089):src/error/formatError.js
