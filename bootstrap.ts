import PublicController from './controllers/publicController'

import DbUserRepository from './repositories/dbUserRepository'
import UserService from './services/userService'
import UserController from './controllers/userController'

// Public
export const publicController = new PublicController()

// User
export const dbUserRepository = new DbUserRepository()
export const userService = new UserService(dbUserRepository)
export const userController = new UserController(userService)
