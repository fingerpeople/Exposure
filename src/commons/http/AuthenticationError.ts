import * as status from 'http-status'
import HttpError from './HttpError'

export default class AuthenticationError extends HttpError {
  constructor (message: any, previousError: any) {
    super({
      message,
      httpStatus: status.FORBIDDEN,
      previousError
    })
  }
}
