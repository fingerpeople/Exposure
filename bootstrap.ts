import PublicController from "./controllers/publicController";

import UserController from "./controllers/userController";
import DbUserRepository from "./repositories/dbUserRepository";
import UserService from "./services/userService";

// Public
export const publicController = new PublicController();

// User
export const dbUserRepository = new DbUserRepository();
export const userService = new UserService(dbUserRepository);
export const userController = new UserController(userService);
