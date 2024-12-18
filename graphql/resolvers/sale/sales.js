const db = require('../../../connection/dbConnection');

module.exports = {
  Query: {
    getSales: async () => {
      const [rows] = await db.query('SELECT * FROM sales');
      return rows;
    },
    getSale: async (_, { sale_id }) => {
      const [rows] = await db.query('SELECT * FROM sales WHERE sale_id = ?', [sale_id]);
      return rows[0];
    },
  },
  Mutation: {
    createSale: async (_, { input }) => {
      const { sale_date, cust_id, user_id} = input ;
      const [result] = await db.query('INSERT INTO sales (sale_date, cust_id, user_id) VALUES (?, ?, ?)', [
        sale_date,
        cust_id,
        user_id]);
      return { sale_id: result.insertId, sale_date, cust_id , user_id };
    },
    updateSale: async (_, { input }) => {
      const { sale_id, sale_date ,cust_id, user_id } = input;
      await db.query(`UPDATE sales SET sale_date =?, cust_id =?, user_id =? WHERE achat_id = ?`,
          [achat_date, four_id, user_id, achat_id ]);
          return {
            sale_id,
            sale_date,
            cust_id,
            user_id
          };
        },
    deleteSale: async (_, { sale_id, }) => {
      await db.query('DELETE FROM sales WHERE sale_id = ?', [sale_id]);
      return 'Sale deleted successfully';
    },
  },
  
  Sale: {
    customer: async (parent) => {
      const [rows] = await db.query('SELECT * FROM customers WHERE cust_id = ?', [parent.cust_id]);
      return rows[0]; // Assuming rows[0] is the matching record
    },
    user: async (parent) => {
      const [rows] = await db.query('SELECT * FROM users WHERE user_id = ?', [parent.user_id]);
      return rows[0]; // Assuming rows[0] is the matching record
    },
  },

 
};
