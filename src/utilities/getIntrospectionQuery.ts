<<<<<<< HEAD
import type { Maybe } from '../jsutils/Maybe';
import type { DirectiveLocationEnum } from '../language/directiveLocation';

export interface IntrospectionOptions {
  /**
   * Whether to include descriptions in the introspection result.
   * Default: true
   */
  descriptions?: boolean;

  /**
   * Whether to include `specifiedByURL` in the introspection result.
   * Default: false
   */
  specifiedByUrl?: boolean;

  /**
   * Whether to include `isRepeatable` flag on directives.
   * Default: false
   */
  directiveIsRepeatable?: boolean;

  /**
   * Whether to include `description` field on schema.
   * Default: false
   */
  schemaDescription?: boolean;

  /**
   * Whether target GraphQL server support deprecation of input values.
   * Default: false
   */
  inputValueDeprecation?: boolean;
}
=======
import type { DirectiveLocationEnum } from '../language/directiveLocation';

export type IntrospectionOptions = {
  // Whether to include descriptions in the introspection result.
  // Default: true
  descriptions?: boolean;

  // Whether to include `specifiedByUrl` in the introspection result.
  // Default: false
  specifiedByUrl?: boolean;

  // Whether to include `isRepeatable` field on directives.
  // Default: false
  directiveIsRepeatable?: boolean;

  // Whether to include `description` field on schema.
  // Default: false
  schemaDescription?: boolean;

  // Whether target GraphQL server support deprecation of input values.
  // Default: false
  inputValueDeprecation?: boolean;
};
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

export function getIntrospectionQuery(options?: IntrospectionOptions): string {
  const optionsWithDefault = {
    descriptions: true,
    specifiedByUrl: false,
    directiveIsRepeatable: false,
    schemaDescription: false,
    inputValueDeprecation: false,
    ...options,
  };

  const descriptions = optionsWithDefault.descriptions ? 'description' : '';
  const specifiedByUrl = optionsWithDefault.specifiedByUrl
    ? 'specifiedByURL'
    : '';
  const directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable
    ? 'isRepeatable'
    : '';
  const schemaDescription = optionsWithDefault.schemaDescription
    ? descriptions
    : '';

<<<<<<< HEAD
  function inputDeprecation(str: string) {
=======
  function inputDeprecation(str) {
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
    return optionsWithDefault.inputValueDeprecation ? str : '';
  }

  return `
    query IntrospectionQuery {
      __schema {
        ${schemaDescription}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${descriptions}
          ${directiveIsRepeatable}
          locations
          args${inputDeprecation('(includeDeprecated: true)')} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${descriptions}
      ${specifiedByUrl}
      fields(includeDeprecated: true) {
        name
        ${descriptions}
        args${inputDeprecation('(includeDeprecated: true)')} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${inputDeprecation('(includeDeprecated: true)')} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${descriptions}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${descriptions}
      type { ...TypeRef }
      defaultValue
      ${inputDeprecation('isDeprecated')}
      ${inputDeprecation('deprecationReason')}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}

<<<<<<< HEAD
export interface IntrospectionQuery {
  readonly __schema: IntrospectionSchema;
}

export interface IntrospectionSchema {
  readonly description?: Maybe<string>;
  readonly queryType: IntrospectionNamedTypeRef<IntrospectionObjectType>;
  readonly mutationType: Maybe<
    IntrospectionNamedTypeRef<IntrospectionObjectType>
  >;
  readonly subscriptionType: Maybe<
    IntrospectionNamedTypeRef<IntrospectionObjectType>
  >;
  readonly types: ReadonlyArray<IntrospectionType>;
  readonly directives: ReadonlyArray<IntrospectionDirective>;
}
=======
export type IntrospectionQuery = {
  +__schema: IntrospectionSchema;
};

export type IntrospectionSchema = {
  +description?: ?string;
  +queryType: IntrospectionNamedTypeRef<IntrospectionObjectType>;
  +mutationType: ?IntrospectionNamedTypeRef<IntrospectionObjectType>;
  +subscriptionType: ?IntrospectionNamedTypeRef<IntrospectionObjectType>;
  +types: $ReadOnlyArray<IntrospectionType>;
  +directives: $ReadOnlyArray<IntrospectionDirective>;
};
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)

export type IntrospectionType =
  | IntrospectionScalarType
  | IntrospectionObjectType
  | IntrospectionInterfaceType
  | IntrospectionUnionType
  | IntrospectionEnumType
  | IntrospectionInputObjectType;

export type IntrospectionOutputType =
  | IntrospectionScalarType
  | IntrospectionObjectType
  | IntrospectionInterfaceType
  | IntrospectionUnionType
  | IntrospectionEnumType;

export type IntrospectionInputType =
  | IntrospectionScalarType
  | IntrospectionEnumType
  | IntrospectionInputObjectType;

<<<<<<< HEAD
export interface IntrospectionScalarType {
  readonly kind: 'SCALAR';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly specifiedByURL?: Maybe<string>;
}

export interface IntrospectionObjectType {
  readonly kind: 'OBJECT';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly fields: ReadonlyArray<IntrospectionField>;
  readonly interfaces: ReadonlyArray<
    IntrospectionNamedTypeRef<IntrospectionInterfaceType>
  >;
}

export interface IntrospectionInterfaceType {
  readonly kind: 'INTERFACE';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly fields: ReadonlyArray<IntrospectionField>;
  readonly interfaces: ReadonlyArray<
    IntrospectionNamedTypeRef<IntrospectionInterfaceType>
  >;
  readonly possibleTypes: ReadonlyArray<
    IntrospectionNamedTypeRef<IntrospectionObjectType>
  >;
}

export interface IntrospectionUnionType {
  readonly kind: 'UNION';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly possibleTypes: ReadonlyArray<
    IntrospectionNamedTypeRef<IntrospectionObjectType>
  >;
}

export interface IntrospectionEnumType {
  readonly kind: 'ENUM';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly enumValues: ReadonlyArray<IntrospectionEnumValue>;
}

export interface IntrospectionInputObjectType {
  readonly kind: 'INPUT_OBJECT';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly inputFields: ReadonlyArray<IntrospectionInputValue>;
}

export interface IntrospectionListTypeRef<
  T extends IntrospectionTypeRef = IntrospectionTypeRef,
> {
  readonly kind: 'LIST';
  readonly ofType: T;
}

export interface IntrospectionNonNullTypeRef<
  T extends IntrospectionTypeRef = IntrospectionTypeRef,
> {
  readonly kind: 'NON_NULL';
  readonly ofType: T;
}

export type IntrospectionTypeRef =
  | IntrospectionNamedTypeRef
  | IntrospectionListTypeRef
  | IntrospectionNonNullTypeRef<
      IntrospectionNamedTypeRef | IntrospectionListTypeRef
=======
export type IntrospectionScalarType = {
  +kind: 'SCALAR';
  +name: string;
  +description?: ?string;
  +specifiedByURL?: ?string;
};

export type IntrospectionObjectType = {
  +kind: 'OBJECT';
  +name: string;
  +description?: ?string;
  +fields: $ReadOnlyArray<IntrospectionField>;
  +interfaces: $ReadOnlyArray<
    IntrospectionNamedTypeRef<IntrospectionInterfaceType>,
  >;
};

export type IntrospectionInterfaceType = {
  +kind: 'INTERFACE';
  +name: string;
  +description?: ?string;
  +fields: $ReadOnlyArray<IntrospectionField>;
  +interfaces: $ReadOnlyArray<
    IntrospectionNamedTypeRef<IntrospectionInterfaceType>,
  >;
  +possibleTypes: $ReadOnlyArray<
    IntrospectionNamedTypeRef<IntrospectionObjectType>,
  >;
};

export type IntrospectionUnionType = {
  +kind: 'UNION';
  +name: string;
  +description?: ?string;
  +possibleTypes: $ReadOnlyArray<
    IntrospectionNamedTypeRef<IntrospectionObjectType>,
  >;
};

export type IntrospectionEnumType = {
  +kind: 'ENUM';
  +name: string;
  +description?: ?string;
  +enumValues: $ReadOnlyArray<IntrospectionEnumValue>;
};

export type IntrospectionInputObjectType = {
  +kind: 'INPUT_OBJECT';
  +name: string;
  +description?: ?string;
  +inputFields: $ReadOnlyArray<IntrospectionInputValue>;
};

export type IntrospectionListTypeRef<
  T: IntrospectionTypeRef = IntrospectionTypeRef,
> = {
  +kind: 'LIST';
  +ofType: T;
};

export type IntrospectionNonNullTypeRef<
  T: IntrospectionTypeRef = IntrospectionTypeRef,
> = {
  +kind: 'NON_NULL';
  +ofType: T;
};

export type IntrospectionTypeRef =
  | IntrospectionNamedTypeRef<>
  | IntrospectionListTypeRef<>
  | IntrospectionNonNullTypeRef<
      IntrospectionNamedTypeRef<> | IntrospectionListTypeRef<>,
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
    >;

export type IntrospectionOutputTypeRef =
  | IntrospectionNamedTypeRef<IntrospectionOutputType>
  | IntrospectionListTypeRef<IntrospectionOutputTypeRef>
  | IntrospectionNonNullTypeRef<
      | IntrospectionNamedTypeRef<IntrospectionOutputType>
<<<<<<< HEAD
      | IntrospectionListTypeRef<IntrospectionOutputTypeRef>
=======
      | IntrospectionListTypeRef<IntrospectionOutputTypeRef>,
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
    >;

export type IntrospectionInputTypeRef =
  | IntrospectionNamedTypeRef<IntrospectionInputType>
  | IntrospectionListTypeRef<IntrospectionInputTypeRef>
  | IntrospectionNonNullTypeRef<
      | IntrospectionNamedTypeRef<IntrospectionInputType>
<<<<<<< HEAD
      | IntrospectionListTypeRef<IntrospectionInputTypeRef>
    >;

export interface IntrospectionNamedTypeRef<
  T extends IntrospectionType = IntrospectionType,
> {
  readonly kind: T['kind'];
  readonly name: string;
}

export interface IntrospectionField {
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly args: ReadonlyArray<IntrospectionInputValue>;
  readonly type: IntrospectionOutputTypeRef;
  readonly isDeprecated: boolean;
  readonly deprecationReason: Maybe<string>;
}

export interface IntrospectionInputValue {
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly type: IntrospectionInputTypeRef;
  readonly defaultValue: Maybe<string>;
  readonly isDeprecated?: boolean;
  readonly deprecationReason?: Maybe<string>;
}

export interface IntrospectionEnumValue {
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly isDeprecated: boolean;
  readonly deprecationReason: Maybe<string>;
}

export interface IntrospectionDirective {
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly isRepeatable?: boolean;
  readonly locations: ReadonlyArray<DirectiveLocationEnum>;
  readonly args: ReadonlyArray<IntrospectionInputValue>;
}
=======
      | IntrospectionListTypeRef<IntrospectionInputTypeRef>,
    >;

export type IntrospectionNamedTypeRef<
  T: IntrospectionType = IntrospectionType,
> = {
  +kind: $PropertyType<T, 'kind'>;
  +name: string;
};

export type IntrospectionField = {
  +name: string;
  +description?: ?string;
  +args: $ReadOnlyArray<IntrospectionInputValue>;
  +type: IntrospectionOutputTypeRef;
  +isDeprecated: boolean;
  +deprecationReason: ?string;
};

export type IntrospectionInputValue = {
  +name: string;
  +description?: ?string;
  +type: IntrospectionInputTypeRef;
  +defaultValue: ?string;
  +isDeprecated?: boolean;
  +deprecationReason?: ?string;
};

export type IntrospectionEnumValue = {
  +name: string;
  +description?: ?string;
  +isDeprecated: boolean;
  +deprecationReason: ?string;
};

export type IntrospectionDirective = {
  +name: string;
  +description?: ?string;
  +isRepeatable?: boolean;
  +locations: $ReadOnlyArray<DirectiveLocationEnum>;
  +args: $ReadOnlyArray<IntrospectionInputValue>;
};
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
