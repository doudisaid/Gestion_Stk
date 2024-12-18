const db = require('../../../connection/dbConnection');

module.exports = {
  Query: {
    getAchats: async () => {
      const [rows] = await db.query('SELECT * FROM achats');
      return rows;
    },
    getAchat: async (_, { achat_id }) => {
      const [rows] = await db.query('SELECT * FROM achats WHERE achat_id = ?', [achat_id]);
      return rows[0];
    },
  },
  Mutation: {
    createAchat: async (_, { input }) => {
      const { achat_date, four_id, user_id} = input ;
      const [result] = await db.query('INSERT INTO achats (achat_date, four_id, user_id) VALUES (?, ?, ?)', [
        achat_date,
        four_id,
        user_id]);
      return { achat_id: result.insertId, achat_date, four_id , user_id };
    },
    updateAchat: async (_, { input }) => {
      const { achat_id, achat_date ,four_id, user_id } = input;
      await db.query(`UPDATE achats SET achat_date =?, four_id =?, user_id =? WHERE achat_id = ?`,
          [achat_date, four_id, user_id, achat_id ]);
          return {
            achat_id,
            achat_date,
            four_id,
            user_id
          };
        },
    deleteAchat: async (_, { achat_id, }) => {
      await db.query('DELETE FROM achats WHERE achat_id = ?', [achat_id]);
      return 'Achat deleted successfully';
    },
  },
  
  Achat: {
    four: async (parent) => {
      const [rows] = await db.query('SELECT * FROM fours WHERE four_id = ?', [parent.four_id]);
      return rows[0]; // Assuming rows[0] is the matching record
    },
    user: async (parent) => {
      const [rows] = await db.query('SELECT * FROM users WHERE user_id = ?', [parent.user_id]);
      return rows[0]; // Assuming rows[0] is the matching record
    },
  },

 
};
