import Validator from 'validatorjs'
import { IResponse } from './contracts'

export default ({ body }: IResponse) => {
  const rules = {
    name: 'required|string',
    file_path: 'string',
    size: 'numeric',
    type: 'required|string',
    parent: 'string',
    parents: 'array',
    permission_groups: 'array',
    reviewers: 'array',
    status: 'string'
  }

  return new Validator(body, rules)
}
