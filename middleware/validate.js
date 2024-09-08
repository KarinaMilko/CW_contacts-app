const {
  CREATE_CONTACT_VALIDATION_SCHEMA,
  UPDATE_CONTACT_VALIDATION_SCHEMA,
} = require("../utils/validationSchemas");

module.exports.validateContactOnCreate = async (req, res, next) => {
  const { body } = req;
  try {
    const validatedContact = await CREATE_CONTACT_VALIDATION_SCHEMA.validate(
      body
    );
    req.body = validatedContact;
    next();
  } catch (err) {
    // res.status(422).send(err.errors);
    next(err);
  }
};

module.exports.validateContactOnUpdate = async (req, res, next) => {
  const { body } = req;
  try {
    const validatedContact = await UPDATE_CONTACT_VALIDATION_SCHEMA.validate(
      body
    );
    req.body = validatedContact;
    next();
  } catch (err) {
    // res.status(422).send(err.errors);
    next(err);
  }
};
