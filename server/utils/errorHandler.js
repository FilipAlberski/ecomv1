class errorHandler extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;

    error.captureStackTrace(this, this.constructor);
  }
}
