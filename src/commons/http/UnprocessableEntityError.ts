import * as status from 'http-status'
import HttpError from './HttpError'

export default class UnprocessableEntityError extends HttpError {
  public constraintErrors: any
  /**
   * @param  {Object} constraintErrors  validation constraints error messages
   * @param  {Object} previousError
   */
  constructor (constraintErrors: any, previousError: any) {
    if (!constraintErrors) {
      throw new Error('Need constraint errors Object as first argument')
    }
    super('Cannot process your request', status.UNPROCESSABLE_ENTITY, previousError)
    this.constraintErrors = constraintErrors
  }
}
