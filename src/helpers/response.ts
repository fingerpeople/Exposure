import { IResponse } from './contracts/response.contracts'

export default (payload: IResponse) => {
  const { message, token, data } = payload

  let response: IResponse = {
    message: '',
    token: null,
    data: {}
  }

  if (message) response.message = message

  if (data) response.data = data

  if (token) response.token = token

  return response
}
