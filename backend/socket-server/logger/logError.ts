import logger from './deafultLogger'

export const logControllerError = (
  file: string,
  method: string,
  message: string
): void => {
  logger.error({
    service: 'quiz',
    type: 'controller',
    file,
    method,
    message,
  })
}

export const logServiceError = (
  file: string,
  method: string,
  message: string
): void => {
  logger.error({
    service: 'quiz',
    type: 'query',
    file,
    method,
    message,
  })
}
