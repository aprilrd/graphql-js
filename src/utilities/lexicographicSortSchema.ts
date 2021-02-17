import type { ObjMap } from '../jsutils/ObjMap';
import { inspect } from '../jsutils/inspect';
import { invariant } from '../jsutils/invariant';
import { keyValMap } from '../jsutils/keyValMap';
import { naturalCompare } from '../jsutils/naturalCompare';
import type { Maybe } from '../jsutils/Maybe';

import type {
  GraphQLType,
  GraphQLNamedType,
  GraphQLFieldConfigMap,
  GraphQLFieldConfigArgumentMap,
  GraphQLInputFieldConfigMap,
} from '../type/definition';
import { GraphQLSchema } from '../type/schema';
import { GraphQLDirective } from '../type/directives';
import { isIntrospectionType } from '../type/introspection';
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLUnionType,
  GraphQLEnumType,
  GraphQLInputObjectType,
  isListType,
  isNonNullType,
  isScalarType,
  isObjectType,
  isInterfaceType,
  isUnionType,
  isEnumType,
  isInputObjectType,
} from '../type/definition';

/**
 * Sort GraphQLSchema.
 *
 * This function returns a sorted copy of the given GraphQLSchema.
 */
export function lexicographicSortSchema(schema: GraphQLSchema): GraphQLSchema {
  const schemaConfig = schema.toConfig();
  const typeMap = keyValMap(
    sortByName(schemaConfig.types),
    (type) => type.name,
    sortNamedType,
  );

  return new GraphQLSchema({
    ...schemaConfig,
    types: Object.values(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription),
  });

  function replaceType<T extends GraphQLType>(type: T): T {
    if (isListType(type)) {
      // @ts-expect-error
      return new GraphQLList(replaceType(type.ofType));
    } else if (isNonNullType(type)) {
      // @ts-expect-error
      return new GraphQLNonNull(replaceType(type.ofType));
    }
<<<<<<< HEAD
    // @ts-expect-error FIXME: TS Conversion
    return replaceNamedType<GraphQLNamedType>(type);
=======
    return replaceNamedType(type as GraphQLNamedType) as T;
>>>>>>> feat: typecast to ensure type safety
  }

  function replaceNamedType<T extends GraphQLNamedType>(type: T): T {
<<<<<<< HEAD
<<<<<<< HEAD
    return typeMap[type.name] as T;
  }

  function replaceMaybeType<T extends GraphQLNamedType>(
    maybeType: Maybe<T>,
  ): Maybe<T> {
=======
    // $FlowFixMe[incompatible-return]
=======
    // @ts-expect-error
>>>>>>> Replace `$FlowFixMe` with `@ts-expect-error`
    return typeMap[type.name];
  }

  function replaceMaybeType<T extends Maybe<GraphQLNamedType>>(
    maybeType: T,
  ): T {
>>>>>>> Switch to TS syntax (#3090)
    return maybeType && replaceNamedType(maybeType);
  }

  function sortDirective(directive: GraphQLDirective) {
    const config = directive.toConfig();
    return new GraphQLDirective({
      ...config,
      locations: sortBy(config.locations, (x) => x),
      args: sortArgs(config.args),
    });
  }

  function sortArgs(args: GraphQLFieldConfigArgumentMap) {
    return sortObjMap(args, (arg) => ({
      ...arg,
      type: replaceType(arg.type),
    }));
  }

  function sortFields(fieldsMap: GraphQLFieldConfigMap<unknown, unknown>) {
    return sortObjMap(fieldsMap, (field) => ({
      ...field,
      type: replaceType(field.type),
      args: field.args && sortArgs(field.args),
    }));
  }

  function sortInputFields(fieldsMap: GraphQLInputFieldConfigMap) {
    return sortObjMap(fieldsMap, (field) => ({
      ...field,
      type: replaceType(field.type),
    }));
  }

  function sortTypes<T extends GraphQLNamedType>(
    array: ReadonlyArray<T>,
  ): Array<T> {
    return sortByName(array).map(replaceNamedType);
  }

  function sortNamedType(type: GraphQLNamedType): GraphQLNamedType {
    if (isScalarType(type) || isIntrospectionType(type)) {
      return type;
    }
    if (isObjectType(type)) {
      const config = type.toConfig();
      return new GraphQLObjectType({
        ...config,
        interfaces: () => sortTypes(config.interfaces),
        fields: () => sortFields(config.fields),
      });
    }
    if (isInterfaceType(type)) {
      const config = type.toConfig();
      return new GraphQLInterfaceType({
        ...config,
        interfaces: () => sortTypes(config.interfaces),
        fields: () => sortFields(config.fields),
      });
    }
    if (isUnionType(type)) {
      const config = type.toConfig();
      return new GraphQLUnionType({
        ...config,
        types: () => sortTypes(config.types),
      });
    }
    if (isEnumType(type)) {
      const config = type.toConfig();
      return new GraphQLEnumType({
        ...config,
        values: sortObjMap(config.values, (value) => value),
      });
    }
    // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')
    if (isInputObjectType(type)) {
      const config = type.toConfig();
      return new GraphQLInputObjectType({
        ...config,
        fields: () => sortInputFields(config.fields),
      });
    }

    // istanbul ignore next (Not reachable. All possible types have been considered)
<<<<<<< HEAD
<<<<<<< HEAD
    invariant(false, 'Unexpected type: ' + inspect(type));
=======
    invariant(false, 'Unexpected type: ' + inspect(type as never));
>>>>>>> Switch to TS syntax (#3090)
=======
    invariant(false, 'Unexpected type: ' + inspect(type));
>>>>>>> TEMPORARY: remove `as never`
  }
}

function sortObjMap<T, R>(
  map: ObjMap<T>,
  sortValueFn: (value: T) => R,
): ObjMap<R> {
  const sortedMap = Object.create(null);
  const sortedEntries = sortBy(Object.entries(map), ([key]) => key);
  for (const [key, value] of sortedEntries) {
    sortedMap[key] = sortValueFn(value);
  }
  return sortedMap;
}

<<<<<<< HEAD
<<<<<<< HEAD:src/utilities/lexicographicSortSchema.ts
function sortByName<T extends { readonly name: string }>(
  array: ReadonlyArray<T>,
=======
function sortByName<T: { +name: string; ... }>(
  array: $ReadOnlyArray<T>,
>>>>>>> Flow: use semicolon as separate inside types (#3089):src/utilities/lexicographicSortSchema.js
=======
function sortByName<T extends { readonly name: string }>(
  array: ReadonlyArray<T>,
>>>>>>> Switch to TS syntax (#3090)
): Array<T> {
  return sortBy(array, (obj) => obj.name);
}

function sortBy<T>(
  array: ReadonlyArray<T>,
  mapToKey: (item: T) => string,
): Array<T> {
  return array.slice().sort((obj1, obj2) => {
    const key1 = mapToKey(obj1);
    const key2 = mapToKey(obj2);
    return naturalCompare(key1, key2);
  });
}
