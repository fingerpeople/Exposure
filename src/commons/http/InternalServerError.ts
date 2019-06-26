import * as status from 'http-status'
import HttpError from './HttpError'

export default class InternalServerError extends HttpError {
  constructor(message: any, previousError: any) {
    super(message, status.INTERNAL_SERVER_ERROR, previousError)
  }
}
