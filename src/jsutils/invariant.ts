<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fix: invariant types
export function invariant(
  condition: unknown,
  message?: string,
): asserts condition {
<<<<<<< HEAD
=======
export function invariant(condition: unknown, message?: string): void {
>>>>>>> Switch to TS syntax (#3090)
=======
>>>>>>> fix: invariant types
  const booleanCondition = Boolean(condition);
  // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')
  if (!booleanCondition) {
    throw new Error(
      message != null ? message : 'Unexpected invariant triggered.',
    );
  }
}
