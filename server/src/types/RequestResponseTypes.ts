import { Request } from "express";

/* Request Types */
export type RequestWithBody<T> = Request<{}, {}, T>;
export type RequestWithQuery<T> = Request<{}, {}, {}, T>;
export type RequestWithParams<T> = Request<T>;
export type RequestWithParamsAndBody<T, B> = Request<T, {}, B>;
export type RequestWithParamsAndQuery<T, B> = Request<T, {}, {}, B>;

/* Response Types */
export type ResponseError = {
  message: string;
};

/* Response Error Type */
export const getTypedError = (err: unknown) => {
  let errMessage;
  if (err instanceof Error) errMessage = err.message;
  else errMessage = String(err);

  return errMessage;
};