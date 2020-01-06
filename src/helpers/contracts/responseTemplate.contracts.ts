export interface IResponse {
  message?: string
  token?: string | null
  data?: object | object[]
  error?: object | object[]
}
