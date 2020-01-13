import { publicController } from '../bootstrap'
import { FastifyInstance } from 'fastify';

export default function(server: FastifyInstance) {
  server.get('/ping', publicController.ping())
}
