import { userController } from '../bootstrap'
import { FastifyInstance } from 'fastify';

export default function(server: FastifyInstance) {
  server.get('/users', userController.getUsers())
  server.get('/users/:id', userController.findUser())
}
