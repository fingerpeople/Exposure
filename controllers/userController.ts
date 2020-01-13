import { FastifyReply, FastifyRequest, RequestHandler } from "fastify";
import { IncomingMessage, ServerResponse } from "http";
import { IUserService } from "../services/contracts";

export default class UserController {
  protected userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  public getUsers(): RequestHandler {
    return async (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
      try {
        const users = await this.userService.get();

        reply.send(users);
      } catch (error) {
        reply
          .status(500)
          .send({ message: error.message });
      }
    };
  }

  public findUser(): RequestHandler {
    return async (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
      try {
        const { id } = request.params;
        const user = await this.userService.find(id);

        reply.send(user);
      } catch (error) {
        if (error.statusCode) {
          reply
            .status(error.statusCode)
            .send({ message: error.message });
          return;
        }

        reply
          .status(500)
          .send({ message: error.message });
      }
    };
  }
}
