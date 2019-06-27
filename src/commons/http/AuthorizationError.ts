import * as status from 'http-status'
import HttpError from './HttpError'

export default class AuthorizationError extends HttpError {
  constructor (message: any, previousError: any) {
    super(message, status.UNAUTHORIZED, previousError)
  }
}
