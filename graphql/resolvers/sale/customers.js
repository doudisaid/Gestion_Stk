const db = require('../../../connection/dbConnection');

module.exports = {
  Query: {
    getCustomers: async () => {
      const [rows] = await db.query('SELECT * FROM customers');
      return rows;
    },
    getCustomer: async (_, { cust_id }) => {
      const [rows] = await db.query('SELECT * FROM customers WHERE cust_id = ?', [cust_id]);
      return rows[0];
    },
  },
  Mutation: {
    createCustomer: async (_, {input}) => {
      const {cust_name, cust_phone} = input;
      const [result] = await db.query('INSERT INTO customers (cust_name, cust_phone) VALUES (?, ?)', 
        [cust_name, cust_phone]);
      return { cust_id: result.insertId, cust_name, cust_phone };
    },
    updateCustomer: async (_, { input }) => {
      const { cust_name, cust_phone, cust_id } = input;
      await db.query(`UPDATE customers SET cust_name =?, cust_phone =?, cust_id =?`,
          [cust_name, cust_phone, cust_id]);
          return {
            cust_id,
            cust_name, cust_phone
          };
    },
    
    deleteCustomer: async (_, { cust_id }) => {
      await db.query('DELETE FROM customers WHERE cust_id = ?', [cust_id]);
      return 'customer deleted successfully';
    },
  },
};
