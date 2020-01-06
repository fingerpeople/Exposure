import { Request, Response } from 'express'
import status from 'http-status'
import { IResponse } from '@/helpers/contracts/responseTemplate.contracts'

import fileModel from '../../models/fileModel'

export default async (request: Request, response: Response) => {
  const { query } = request
  let options: any = {}

  if (query.target) options['parent'] = query.target

  const responseDatabase = await fileModel.find(options)
  response.status(status.OK).json(responseDatabase)
}
