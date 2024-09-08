const createError = require("http-errors");
const { contact } = require("./../model");

module.exports.createContact = (req, res) => {
  const { body } = req;

  const createdContact = contact.createContact(body);

  res.status(201).send(createdContact);
};

module.exports.getContacts = (req, res) => {
  const { page, results } = req.query;
  const foundContacts = contact.getContacts(page, results);
  res.status(200).send(foundContacts);
};

module.exports.getContactById = (req, res, next) => {
  const { id } = req.params;

  const foundContact = contact.getContactById(id);

  if (!foundContact) {
    // return res.status(404).send("Contact Not Found");
    return next(createError(404, "Contact Not Found"));
  }

  res.status(200).send(foundContact);
};

module.exports.updateContactById = (req, res, next) => {
  // const { id } = req.params;
  // const { body } = req;
  const {
    params: { id },
    body,
  } = req;

  const updatedContact = contact.updateContact(id, body);

  if (!updatedContact) {
    // return res.status(404).send("Contact Not Found");
    return next(createError(404, "Contact Not Found"));
  }

  res.status(200).send(updatedContact);
};

module.exports.deleteContactById = (req, res, next) => {
  const { id } = req.params;

  const deletedContact = contact.deleteContact(id);

  if (!deletedContact) {
    // return res.status(404).send("Contact Not Found");
    return next(createError(404, "Contact Not Found"));
  }

  res.status(204).send();
};
