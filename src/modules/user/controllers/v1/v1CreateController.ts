import { Request, Response } from 'express'
import status from 'http-status'
import uuid from 'uuid/v4'
import { i18n } from '@/commons/lang'
import { IResponse } from '@/helpers/contracts/responseTemplate.contracts'

import fileModel from '../../models/fileModel'

export default async (request: Request, response: Response) => {
  const { body } = request

  let mutatedPayload = { ...body }

  if (mutatedPayload.type === 'folder') {
    mutatedPayload.file_path = ''
    mutatedPayload.size = 0
    mutatedPayload.reviews = []
    mutatedPayload.status = 'published'
  } else {
    mutatedPayload.file_name = uuid().split('-').join('_') + '_' + mutatedPayload.name
      .trim()
      .split(' ')
      .join('_')
  }

  let responsePayload: IResponse = { ...mutatedPayload }

  const responseDatabase = await fileModel.create(mutatedPayload)
  responsePayload.message = i18n('cuk')

  response.status(status.CREATED).json(responseDatabase)
}
