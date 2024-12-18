const db = require('../../../connection/dbConnection');

module.exports = {
  Query: {
    getVersements: async () => {
      const [rows] = await db.query('SELECT * FROM versements');
      return rows;
    },
    getVersement: async (_, { vers_id }) => {
      const [rows] = await db.query('SELECT * FROM versements WHERE vers_id = ?', [vers_id]);
      return rows[0];
    },
  },
  Mutation: {
    createVersement: async (_, { input }) => {
      const { vers_date, amountcust,  cust_id, user_id} = input ;
      const [result] = await db.query('INSERT INTO versements (vers_date, amountcust,  cust_id, user_id) VALUES (?, ?, ?, ?)', [
        vers_date, amountcust,  cust_id, user_id]);
      return { vers_id: result.insertId, vers_date, amountcust,  cust_id, user_id };
    },
    updateVersement: async (_, { input }) => {
      const { vers_id, vers_date, amountcust,  cust_id, user_id} = input;
      await db.query(`UPDATE versements SET vers_date =?, amountcust =?, cust_id =?, user_id =? WHERE vers_id = ?`,
          [vers_date, amountcust,  cust_id, user_id, vers_id ]);
          return {
            vers_id,
            vers_date, amountcust,  cust_id, user_id
          };
        },
    deleteVersement: async (_, { vers_id }) => {
      await db.query('DELETE FROM versements WHERE vers_id = ?', [vers_id]);
      return 'Versement deleted successfully';
    },
  },
  
  Versement: {
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
