const db = require('../../../connection/dbConnection');

module.exports = {
  Query: {
    getFours: async () => {
      const [rows] = await db.query('SELECT * FROM fours');
      return rows;
    },
    getFour: async (_, { four_id }) => {
      const [rows] = await db.query('SELECT * FROM fours WHERE four_id = ?', [four_id]);
      return rows[0];
    },
  },
  Mutation: {
    createFour: async (_, { input }) => {
      const { four_name , four_phone, four_email } = input;
      const [result] = await db.query('INSERT INTO fours (four_name, four_phone, four_email) VALUES (?, ?, ?)', [
        four_name,
        four_phone,
        four_email,
      ]);
      return { four_id: result.insertId, four_name, four_phone, four_email };
    },
    updateFour: async (_, { input }) => {
      const { four_id, four_name, four_phone, four_email } = input;
      await db.query(`UPDATE fours SET four_name =?, four_phone =?, four_email =? WHERE four_id = ?`,
          [four_name, four_phone, four_email, four_id]);
          return {
            four_id,
            four_name, four_phone, four_email
          };
        },
    deleteFour: async (_, { four_id }) => {
      await db.query('DELETE FROM fours WHERE four_id = ?', [four_id]);
      return 'Four deleted successfully';
    },
  },
  Four: {
    achats: async (parent) => {
      const [rows] = await db.query('SELECT * FROM achats WHERE four_id = ?', [parent.four_id]);
      return rows;
    },
  },
};
