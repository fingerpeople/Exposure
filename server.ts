import consola from "consola";
import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import meta from "./package.json";
import routes from "./routes";

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});
const port = 3000;

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          version: {
            type: "string",
          },
        },
      },
    },
  },
};

server.get(
  "/",
  opts,
  (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
    reply.send({
      name: meta.name,
      version: meta.version,
    });
  },
);

routes.forEach((route) => {
  route(server);
});

server.listen(port, "0.0.0.0", (error, address) => {
  if (error) {
    consola.error(error);
  }

  consola.ready(`API running at ${address}`);
});
