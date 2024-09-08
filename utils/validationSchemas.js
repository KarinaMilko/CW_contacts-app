const yup = require("yup");

const NAME_VALIDATION_SCHEMA = yup
  .string()
  .trim()
  .min(2)
  .max(16)
  .matches(/^[A-Z][a-z]{1,15}$/);

const TEL_NUMBER_VALIDATION_SCHEMA = yup
  .string()
  .trim()
  .length(13)
  .matches(/^\+380\d{9}$/);
const BIRTHDAY_VALIDATION_SCHEMA = yup.date().max(new Date());

module.exports.CREATE_CONTACT_VALIDATION_SCHEMA = yup.object({
  name: NAME_VALIDATION_SCHEMA.required(),
  telNumber: TEL_NUMBER_VALIDATION_SCHEMA.required(),
  birthday: BIRTHDAY_VALIDATION_SCHEMA,
});

module.exports.UPDATE_CONTACT_VALIDATION_SCHEMA = yup.object({
  name: NAME_VALIDATION_SCHEMA,
  telNumber: TEL_NUMBER_VALIDATION_SCHEMA,
  birthday: BIRTHDAY_VALIDATION_SCHEMA,
  isFavourite: yup.boolean(),
});
