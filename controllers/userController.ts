import { IUserService } from '../services/contracts';
import { FastifyRequest, FastifyReply, RequestHandler } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';

export default class UserController {
  protected userService: IUserService

  constructor(userService: IUserService) {
    this.userService = userService
  }

  getUsers(): RequestHandler {
    return async (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
      try {
        const users = await this.userService.get()
  
        reply.send(users)
      } catch (error) {
        reply
          .status(500)
          .send({ message: error.message })
      }
    }
  }

  findUser(): RequestHandler {
    return async (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
      try {
        const { id } = request.params
        const user = await this.userService.find(id)
  
        reply.send(user)
      } catch (error) {
        if (error.statusCode) {
          reply
            .status(error.statusCode)
            .send({ message: error.message })
          return
        }

        reply
          .status(500)
          .send({ message: error.message })
      }
    }
  }
}
