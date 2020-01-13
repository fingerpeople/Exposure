import { FastifyInstance } from "fastify";
import { userController } from "../bootstrap";

export default function(server: FastifyInstance) {
  server.get("/users", userController.getUsers());
  server.get("/users/:id", userController.findUser());
}
