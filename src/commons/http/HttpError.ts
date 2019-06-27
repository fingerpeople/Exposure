import * as status from 'http-status'
import { ExtendableError } from 'ts-error'

export default class HttpError extends ExtendableError {
  public httpStatus!: number
  public message!: string
  public previousError: any

  constructor (message: any, httpStatus: number, previousError: any) {
    if (message instanceof Error) {
      previousError = message
      message = previousError.message

      super(message)
      this.message = message
      this.httpStatus = httpStatus || status.INTERNAL_SERVER_ERROR
      this.previousError = previousError
    }
  }

  public send (response: any) {
    const body = { message: this.message }

    response.status(this.httpStatus)
    response.send(body)
  }
}
