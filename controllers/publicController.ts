import { FastifyReply, FastifyRequest, RequestHandler } from "fastify";
import { IncomingMessage, ServerResponse } from "http";

export default class PublicController {
  public ping(): RequestHandler {
    return (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
      reply.send("pong");
    };
  }
}
