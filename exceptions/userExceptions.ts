export class UserNotFoundException extends Error {
  public message = 'User not found'

  public statusCode = 404
}
