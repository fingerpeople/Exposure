import Validator from 'validatorjs'
import { IResponse } from './contracts'

export const publicMessageValidation = ({ body }: IResponse) => {
  const rules = {
    message: 'required'
  }

  return new Validator(body, rules)
}
