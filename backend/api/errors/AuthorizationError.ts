import mercurius from 'mercurius'

export const AuthorizationError = (
  message = 'Unauthorized!',
  extensions: object = {}
) => {
  return new mercurius.ErrorWithProps(message, {
    code: 'AUTHORIZATION_ERROR',
    ...extensions
  })
}