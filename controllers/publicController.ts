import { FastifyRequest, FastifyReply, RequestHandler } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';

export default class PublicController {
  ping(): RequestHandler {
    return (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
      reply.send('pong')
    }
  }
}
