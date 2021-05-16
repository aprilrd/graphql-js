<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface ObjMap<T> {
  [key: string]: T;
}

export type ObjMapLike<T> = ObjMap<T> | { [key: string]: T };

export interface ReadOnlyObjMap<T> {
  readonly [key: string]: T;
}

export type ReadOnlyObjMapLike<T> =
  | ReadOnlyObjMap<T>
  | { readonly [key: string]: T };
=======
export type ObjMap<T> = { [key: string]: T; __proto__: null; ... };
export type ObjMapLike<T> = ObjMap<T> | { [key: string]: T; ... };
=======
export type ObjMap<T> = { [key: string]: T; __proto__: null };
export type ObjMapLike<T> = ObjMap<T> | { [key: string]: T };
>>>>>>> Switch to TS syntax (#3090)
=======
export type ObjMap<T> = Record<string, T>;
export type ObjMapLike<T> = ObjMap<T> | Record<string, T>;
>>>>>>> refactor: convert ObjMap to use `Record`

export type ReadOnlyObjMap<T> = Readonly<Record<string, T>>;
export type ReadOnlyObjMapLike<T> =
  | ReadOnlyObjMap<T>
<<<<<<< HEAD
<<<<<<< HEAD
  | { +[key: string]: T; ... };
>>>>>>> Migrate to TS: rename `.js` to `.ts` and fix everything in latter PRs (#3088)
=======
  | { readonly [key: string]: T };
>>>>>>> Switch to TS syntax (#3090)
=======
  | Readonly<Record<string, T>>;
>>>>>>> refactor: convert ObjMap to use `Record`
