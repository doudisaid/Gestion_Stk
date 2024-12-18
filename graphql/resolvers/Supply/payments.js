const db = require('../../../connection/dbConnection');

module.exports = {
  Query: {
    getPayments: async () => {
      const [rows] = await db.query('SELECT * FROM payments');
      return rows;
    },
    getPayment: async (_, { pay_id }) => {
      const [rows] = await db.query('SELECT * FROM payments WHERE pay_id = ?', [pay_id]);
      return rows[0];
    },
  },
  Mutation: {
    createPayment: async (_, { input }) => {
      const { pay_date, amount_pay,  four_id, user_id} = input ;
      const [result] = await db.query('INSERT INTO payments (pay_date, amount_pay,  four_id, user_id) VALUES (?, ?, ?, ?)', [
        pay_date, amount_pay,  four_id, user_id]);
      return { pay_id: result.insertId, pay_date, amount_pay,  four_id, user_id };
    },
    updatePayment: async (_, { input }) => {
      const { pay_id, pay_date, amount_pay,  four_id, user_id} = input;
      await db.query(`UPDATE payments SET pay_date =?, amount_pay =?, four_id =?, user_id =? WHERE pay_id = ?`,
          [pay_date, amount_pay,  four_id, user_id, pay_id ]);
          return {
            pay_id,
            pay_date, amount_pay,  four_id, user_id
          };
        },
    deletePayment: async (_, { pay_id }) => {
      await db.query('DELETE FROM payments WHERE pay_id = ?', [pay_id]);
      return 'Payment deleted successfully';
    },
  },
  
  Payment: {
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
