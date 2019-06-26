import status from 'http-status'

const root = async (_: Request, response: Response) => {
  response.status(status.CREATED).json({
    message: 'Hello'
  })
}

export default {
  root
}
