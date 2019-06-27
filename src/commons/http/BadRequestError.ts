import * as status from 'http-status'
import HttpError from './HttpError'

export default class BadRequestError extends HttpError {
  constructor (message: any, previousError: any) {
    super(message, status.BAD_REQUEST, previousError)
  }
}
