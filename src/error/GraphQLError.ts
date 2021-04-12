import { isObjectLike } from '../jsutils/isObjectLike';
import type { Maybe } from '../jsutils/Maybe';
import type { Mutable } from '../jsutils/mutable';

import type { ASTNode } from '../language/ast';
import type { Source } from '../language/source';
import type { SourceLocation } from '../language/location';
import { getLocation } from '../language/location';
import { printLocation, printSourceLocation } from '../language/printLocation';

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
export class GraphQLError extends Error {
  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
<<<<<<< HEAD
<<<<<<< HEAD
  readonly locations?: ReadonlyArray<SourceLocation>;
=======
  readonly locations: ReadonlyArray<SourceLocation> | void;
>>>>>>> Switch to TS syntax (#3090)
=======
  readonly locations: ReadonlyArray<SourceLocation> | undefined;
>>>>>>> TEMPORARY: Replace `void` with `undefined`

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
<<<<<<< HEAD
<<<<<<< HEAD
  readonly path?: ReadonlyArray<string | number>;
=======
  readonly path: ReadonlyArray<string | number> | void;
>>>>>>> Switch to TS syntax (#3090)
=======
  readonly path: ReadonlyArray<string | number> | undefined;
>>>>>>> TEMPORARY: Replace `void` with `undefined`

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
<<<<<<< HEAD
<<<<<<< HEAD
  readonly nodes?: ReadonlyArray<ASTNode>;
=======
  readonly nodes: ReadonlyArray<ASTNode> | void;
>>>>>>> Switch to TS syntax (#3090)
=======
  readonly nodes: ReadonlyArray<ASTNode> | undefined;
>>>>>>> TEMPORARY: Replace `void` with `undefined`

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
<<<<<<< HEAD
<<<<<<< HEAD
  readonly source?: Source;
=======
  readonly source: Source | void;
>>>>>>> Switch to TS syntax (#3090)
=======
  readonly source: Source | undefined;
>>>>>>> TEMPORARY: Replace `void` with `undefined`

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
<<<<<<< HEAD
<<<<<<< HEAD
  readonly positions?: ReadonlyArray<number>;
=======
  readonly positions: ReadonlyArray<number> | void;
>>>>>>> Switch to TS syntax (#3090)
=======
  readonly positions: ReadonlyArray<number> | undefined;
>>>>>>> TEMPORARY: Replace `void` with `undefined`

  /**
   * The original error thrown from a field resolver during execution.
   */
  readonly originalError: Maybe<Error>;

  /**
   * Extension fields to add to the formatted error.
   */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/error/GraphQLError.ts
  readonly extensions?: { [key: string]: unknown };

  constructor(
    message: string,
    nodes?: ReadonlyArray<ASTNode> | ASTNode | null,
    source?: Maybe<Source>,
    positions?: Maybe<ReadonlyArray<number>>,
    path?: Maybe<ReadonlyArray<string | number>>,
    originalError?: Maybe<Error & { readonly extensions?: unknown }>,
    extensions?: Maybe<{ [key: string]: unknown }>,
=======
  +extensions: { [key: string]: mixed; ... } | void;

  constructor(
    message: string,
    nodes?: $ReadOnlyArray<ASTNode> | ASTNode | void | null,
    source?: ?Source,
    positions?: ?$ReadOnlyArray<number>,
    path?: ?$ReadOnlyArray<string | number>,
    originalError?: ?(Error & { +extensions?: mixed; ... }),
    extensions?: ?{ [key: string]: mixed; ... },
>>>>>>> Flow: use semicolon as separate inside types (#3089):src/error/GraphQLError.js
=======
  readonly extensions: { [key: string]: unknown } | void;
=======
  readonly extensions: { [key: string]: unknown } | undefined;
>>>>>>> TEMPORARY: Replace `void` with `undefined`

  constructor(
    message: string,
    nodes?: ReadonlyArray<ASTNode> | ASTNode | undefined | null,
    source?: Maybe<Source>,
    positions?: Maybe<ReadonlyArray<number>>,
    path?: Maybe<ReadonlyArray<string | number>>,
    originalError?: Maybe<Error & { readonly extensions?: unknown }>,
    extensions?: Maybe<{ [key: string]: unknown }>,
>>>>>>> Switch to TS syntax (#3090)
  ) {
    super(message);

    // Compute list of blame nodes.
    const _nodes = Array.isArray(nodes)
      ? nodes.length !== 0
        ? nodes
        : undefined
      : nodes
      ? [nodes]
      : undefined;

    // Compute locations in the source for the given nodes/positions.
    let _source = source;
    if (!_source && _nodes) {
      _source = _nodes[0].loc?.source;
    }

<<<<<<< HEAD
    let _positions;
    if (positions) {
      _positions = positions;
    } else if (_nodes) {
=======
    let _positions = positions as Mutable<typeof positions>;
    if (!_positions && _nodes) {
>>>>>>> feat: Mutable type utility
      _positions = [];
      for (const node of _nodes) {
        if (node.loc) {
          _positions.push(node.loc.start);
        }
      }
    }
    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    let _locations: Array<SourceLocation>;
    if (positions && source) {
      _locations = positions.map((pos) => getLocation(source, pos));
    } else if (_nodes) {
      _locations = [];
      for (const node of _nodes) {
        if (node.loc) {
          _locations.push(getLocation(node.loc.source, node.loc.start));
        }
      }
    }

    let _extensions = extensions;
    if (_extensions == null && originalError != null) {
      const originalExtensions = originalError.extensions;
      if (isObjectLike(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
    // @ts-expect-error FIXME
>>>>>>> Replace `$FlowFixMe` with `@ts-expect-error`
=======
>>>>>>> remove unused `@ts-expect-error`
    Object.defineProperties(this, {
      name: { value: 'GraphQLError' },
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true,
      },
      locations: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: _locations ?? undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _locations != null,
      },
      path: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path ?? undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: path != null,
      },
      nodes: {
        value: _nodes ?? undefined,
      },
      source: {
        value: _source ?? undefined,
      },
      positions: {
        value: _positions ?? undefined,
      },
      originalError: {
        value: originalError,
      },
      extensions: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: _extensions ?? undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _extensions != null,
      },
    });

    // Include (non-enumerable) stack trace.
    if (originalError?.stack) {
      Object.defineProperty(this, 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true,
      });
      return;
    }

    // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true,
      });
    }
  }

  toString(): string {
    return printError(this);
  }

  // FIXME: workaround to not break chai comparisons, should be remove in v16
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // @ts-expect-error Flow doesn't support computed properties yet
>>>>>>> Replace `$FlowFixMe` with `@ts-expect-error`
=======
>>>>>>> remove unused `@ts-expect-error`
  get [Symbol.toStringTag](): string {
    return 'Object';
  }
}

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */
export function printError(error: GraphQLError): string {
  let output = error.message;

  if (error.nodes) {
    for (const node of error.nodes) {
      if (node.loc) {
        output += '\n\n' + printLocation(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (const location of error.locations) {
      output += '\n\n' + printSourceLocation(error.source, location);
    }
  }

  return output;
}
