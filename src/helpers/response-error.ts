class ResponseError extends Error {
  constructor(public message: string, public status: number = 400) {
    super();
  }

  toString(): string {
    return this.message;
  }
}

export default ResponseError;
