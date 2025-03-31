export const exhaustiveMatchingGuard = (_: never): never => {
  throw new Error("Should not have reach here!!");
};
