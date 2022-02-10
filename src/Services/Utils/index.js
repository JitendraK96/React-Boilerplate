import Joi from 'joi';

const stringValidationSchema = Joi.string().required().label('String');

export const validateString = (data) => {
  return stringValidationSchema.validate(data);
}

