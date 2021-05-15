<<<<<<< HEAD
<<<<<<< HEAD:src/jsutils/Path.ts
import type { Maybe } from './Maybe';

export interface Path {
  readonly prev: Path | undefined;
  readonly key: string | number;
  readonly typename: string | undefined;
}
=======
=======
import type { Maybe } from './Maybe';

>>>>>>> Switch to TS syntax (#3090)
export type Path = {
  readonly prev: Path | void;
  readonly key: string | number;
  readonly typename: string | void;
};
>>>>>>> Flow: use semicolon as separate inside types (#3089):src/jsutils/Path.js

/**
 * Given a Path and a key, return a new Path containing the new key.
 */
export function addPath(
<<<<<<< HEAD
  prev: Readonly<Path> | undefined,
=======
  prev: Readonly<Path> | void,
>>>>>>> Switch to TS syntax (#3090)
  key: string | number,
  typename: string | undefined,
): Path {
  return { prev, key, typename };
}

/**
 * Given a Path, return an Array of the path keys.
 */
export function pathToArray(
  path: Maybe<Readonly<Path>>,
): Array<string | number> {
  const flattened = [];
  let curr = path;
  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }
  return flattened.reverse();
}
