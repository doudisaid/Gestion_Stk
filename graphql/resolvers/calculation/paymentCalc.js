const db = require('../../../connection/dbConnection');

// Define the resolvers
module.exports = {
  Query: {
    getTotalPayByFourId: async (_, { four_id }) => {
      const [rows] = await db.query(
        'SELECT SUM(amount_pay) AS total_pay FROM payments WHERE four_id = ?',
        [four_id]
      );
      return rows[0].total_pay || 0;
    },

    getTotalPay: async () => {
      const [rows] = await db.query(
        'SELECT SUM(amount_pay) AS total_pay FROM payments'
      );
      return rows[0].total_pay || 0;
    },

    getTotalPayByPayDate: async (_, { pay_date }) => {
      const [rows] = await db.query(
        'SELECT SUM(amount_pay) AS total_pay FROM payments WHERE DATE(pay_date) = ?',
        [pay_date]
      );
      return rows[0].total_pay || 0;
    },
  },
};
