const db = require('../../connection/dbConnection');

module.exports = {
  Query: {
    getUsers: async () => {
      const [rows] = await db.query('SELECT * FROM users');
      return rows;
    },
    getUser: async (_, { user_id }) => {
      const [rows] = await db.query('SELECT * FROM users WHERE user_id = ?', [user_id]);
      return rows[0];
    },
  },
  Mutation: {
    createUser: async (_, {input}) => {
      const {user_email, user_phone, user_pass} = input;
      const [result] = await db.query('INSERT INTO users (user_email, user_phone, user_pass) VALUES (?, ?, ?)', 
        [user_email, user_phone, user_pass]);
      return { user_id: result.insertId, user_email, user_phone, user_pass };
    },
    updateUser: async (_, { input }) => {
      const { user_id, user_email, user_phone, user_pass} = input;
      await db.query(`UPDATE users SET user_email = ?, user_phone = ?, user_pass =? WHERE user_id = ?`,
          [user_email, user_phone, user_pass, user_id]);
          return {
            user_id,
            user_email, user_phone, user_pass
          };
    },
    
    deleteUser: async (_, { user_id }) => {
      await db.query('DELETE FROM users WHERE user_id = ?', [user_id]);
      return 'User deleted successfully';
    },
  },
};
