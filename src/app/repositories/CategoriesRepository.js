const db = require('../../database/index');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * from categories ORDER BY name');
    return rows;
  }

  async create({ name }) {
    const [row] = await db.query({
      text: `
    INSERT INTO categories(name)
    VALUES($1)
    RETURNING *
    `,
      values: [name],
    });

    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query({
      text: `
      UPDATE categories
      SET name = $2
      WHERE id = $1
      RETURNING *
      `,
      values: [id, name],
    });
    return row;
  }

  async delete(id) {
    const deleteOperation = await db.query({
      text: `
      DELETE FROM categories
      WHERE id = $1
      `,
      values: [id],
    });
    return deleteOperation;
  }
}

module.exports = new CategoriesRepository();
