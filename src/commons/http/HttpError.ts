import * as status from 'http-status'
import { Response } from 'express'
import ExtendableError from 'es6-error'
import { rjson } from '@/helpers/contracts/responseTemplate.contracts'

import { IError } from './contracts/HttpError.contracts'

export default class HttpError extends ExtendableError {
  public message!: string
  public httpStatus?: number = status.INTERNAL_SERVER_ERROR
  public previousError?: any

  constructor (props: IError) {
    super({ ...props })
    let {
      message,
      httpStatus,
      previousError
    } = props

    if (message instanceof Error) {
      previousError = message
      message = previousError.message
    }
    this.message = message
    this.httpStatus = httpStatus
    this.previousError = previousError
  }

  public send (response: Response) {
    const responsePayload = rjson({
      message: this.message,
      error: this.previousError
    })
    response.status(this.httpStatus || status.INTERNAL_SERVER_ERROR).json(responsePayload)
  }
}
