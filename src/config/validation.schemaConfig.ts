const joi = require('@hapi/joi');
/**
 * Envs validation schema
 * @returns object typeof joi object
 */
export const createValidationSchema = () =>
  joi.object({
      PORT: joi.number().required(),
      DB_USER: joi.string().required(),
      DB_PASS: joi.string().required(),
      DB_NAME: joi.string().required(),
      DB_HOST: joi.string().required(),
  });

