import * as status from 'http-status'
import HttpError from './HttpError'

export default class UnprocessableEntityError extends HttpError {
  /**
   * @param  {Object} constraintErrors  validation constraints error messages
   * @param  {Object} previousError
   */
  constructor (constraintErrors: any) {
    if (!constraintErrors) {
      throw new Error('Need constraint errors Object as first argument')
    }
    super({
      message: 'Cannot process your request',
      httpStatus: status.UNPROCESSABLE_ENTITY,
      previousError: constraintErrors
    })
  }
}
