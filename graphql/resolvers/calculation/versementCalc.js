const db = require('../../../connection/dbConnection');

// Define the resolvers
module.exports = {
  Query: {
    getTotalVersByCustId: async (_, { cust_id }) => {
      const [rows] = await db.query(
        'SELECT SUM(amountcust) AS total_vers FROM versements WHERE cust_id = ?',
        [cust_id]
      );
      return rows[0].total_vers || 0;
    },

    getTotalVers: async () => {
      const [rows] = await db.query(
        'SELECT SUM(amountcust) AS total_vers FROM versements'
      );
      return rows[0].total_vers || 0;
    },

    getTotalVersByversDate: async (_, { vers_date }) => {
      const [rows] = await db.query(
        'SELECT SUM(amountcust) AS total_vers FROM versements WHERE vers_date = ?',
        [vers_date]
      );
      return rows[0].total_vers || 0;
    },
  },
};
