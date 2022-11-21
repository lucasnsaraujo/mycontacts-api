class ContactController {
  index(request, response) {
    // list all contacts
    response.send('Worked');
  }

  show() {
    // get one contact
  }

  store() {
    // create a contact
  }

  update() {
    // update a contact
  }

  delete() {
    // delete a contact
  }
}

module.exports = new ContactController();
