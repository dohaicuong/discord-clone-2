import mercurius from 'mercurius'

export const AuthenticationError = (message = 'Please login!', extensions: object = {}) => {
  return new mercurius.ErrorWithProps(message, {
    code: 'AUTHENTICATION_ERROR',
    ...extensions
  })
}