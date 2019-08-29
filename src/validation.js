const Joi = require('@hapi/joi')

const optionsSchema = Joi.object()
  .keys({
    randomEngine: Joi.any(),
  })
  .required()
const paramsSchema = Joi.object().keys({
  variants: Joi.array()
    .min(1)
    .items(
      Joi.object().keys({
        chance: Joi.number()
          .min(1)
          .max(100)
          .required(),
        data: Joi.any().required(),
      })
    )
    .required(),
})

const validate = (schema, data) => {
  const { error } = schema.validate(data)
  if (error) throw new Error(error.toString())
}

module.exports = {
  validateOptions: options => validate(optionsSchema, options),
  validateParams: params => validate(paramsSchema, params),
}
