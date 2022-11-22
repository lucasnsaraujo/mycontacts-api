const db = require('../../database');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT contacts.*, categories.name AS category_name FROM contacts
    JOIN categories ON categories.id = contacts.category_id
    ORDER BY contacts.name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query({ text: 'SELECT * from contacts WHERE id = $1', values: [id] });
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query({ text: 'SELECT * from contacts WHERE email = $1', values: [email] });
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query({
      text: ` INSERT INTO contacts (name, email, phone, category_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
      values: [name, email, phone, category_id],
    });

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query({
      text: `
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `,
      values: [name, email, phone, category_id, id],
    });
    return row;
  }

  async delete(id) {
    const deleteOperation = await db.query({
      text: `
      DELETE FROM contacts
      WHERE id = $1
    `,
      values: [id],
    });
    return deleteOperation;
  }
}

module.exports = new ContactsRepository();
