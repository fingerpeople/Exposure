import { FastifyInstance } from "fastify";
import { publicController } from "../bootstrap";

export default function(server: FastifyInstance) {
  server.get("/ping", publicController.ping());
}
