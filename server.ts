///<reference path="./node_modules/@types/node/index.d.ts"/>
import fastify, {
  FastifyInstance,
  RouteShorthandOptions,
  FastifyRequest,
  FastifyReply
} from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import consola from 'consola'
import meta from './package.json'
import routes from './routes'

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({})
const port = 3000

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          version: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get(
  '/',
  opts,
  (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
    reply.send({
      name: meta.name,
      version: meta.version
    })
  }
)

routes.forEach((route) => {
  route(server)
})

server.listen(port, (error, address) => {
  if (error) {
    consola.error(error)
  }

  consola.ready(`API running at ${address}`)
})
