const UserService = {
  getAllUsers(knex) {
    return knex.select('*').from('blog_users')
  },

  insertUser(knex, newUser) {
    return knex
      .insert(newUser)
      .into('blog_users')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getById(knex, id) {
    return knex
      .from('blog_users')
      .select('*')
      .where('id', id)
      .first()
  },
  
  deleteUser(knex, id) {
    return knex('blog_users')
      .where({ id })
      .delete()
  },

  updateUser(knex, id, newUserFields) {
    return knex('blog_users')
      .where({ id })
      .update(newUserFields)
  },
}

module.exports = UserService