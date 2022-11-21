const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // list all contacts
    const contacts = await ContactsRepository.findAll();
    return response.json(contacts);
  }

  async show(request, response) {
    // get one contact
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'Not Found' });
    }
    response.json(contact);
  }

  store() {
    // create a contact
  }

  update() {
    // update a contact
  }

  async delete(request, response) {
    // delete a contact
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'Not Found' });
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
