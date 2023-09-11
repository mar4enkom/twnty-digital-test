export function getError(error: unknown): Error {
    if (error instanceof Error) {
      return error;
    } 
    return new Error("Unexpected error happened");
  }