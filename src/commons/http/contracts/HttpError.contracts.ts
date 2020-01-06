import { Response } from 'express'
export interface IError {
  message?: any
  httpStatus: number
  previousError?: any
  stack?: any
  constraintErrors?: any,
  response?: Response
}
