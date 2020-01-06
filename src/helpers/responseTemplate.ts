import { IResponse } from './contracts/responseTemplate.contracts'

export const rjson = (payload: IResponse) => {
  const { message, token, data, error } = payload

  let response: IResponse = {}

  if (message) response['message'] = message

  if (data) response['data'] = data

  if (token) response['token'] = token

  if (error) response['error'] = error

  return response
}
