const db = require("../../../connection/dbConnection");

module.exports = {
  Query: {
    getAchatProducts: async () => {
      const [rows] = await db.query('SELECT * FROM achats_products');
      return rows;
    },
    getAchatProductsByAchat: async (_, { achat_id }) => {
      const [rows] = await db.query('SELECT * FROM achats_products WHERE achat_id = ?', [achat_id]);
      return rows;
    },
    getAchatProductsByProduct: async (_, { prod_id }) => {
      const [rows] = await db.query('SELECT * FROM achats_products WHERE prod_id = ?', [prod_id]);
      return rows;
    },
  },
  Mutation: {
    createAchatProduct: async (_, { input }) => {
      const { achat_id, prod_id, quantity } = input;
      await db.query(
        'INSERT INTO achats_products (achat_id, prod_id, quantity) VALUES (?, ?, ?)',
        [achat_id, prod_id, quantity]
      );
      return { achat_id, prod_id, quantity };
    },
    updateAchatProduct: async (_, { input }) => {
      const { achat_id, prod_id, quantity } = input;
      await db.query(
        'UPDATE achats_products SET quantity = ? WHERE achat_id = ? AND prod_id = ?',
        [quantity, achat_id, prod_id]
      );
      return { achat_id, prod_id, quantity };
    },
    deleteAchatProduct: async (_, { achat_id, prod_id }) => {
      await db.query('DELETE FROM achats_products WHERE achat_id = ? AND prod_id = ?', 
        [achat_id, prod_id]);
      return 'AchatProduct deleted successfully';
    },
  },
  AchatProduct: {
    achat: async (parent) => {
      const [rows] = await db.query('SELECT * FROM achats WHERE achat_id = ?', [parent.achat_id]);
      return rows[0];
    },
    product: async (parent) => {
      const [rows] = await db.query('SELECT * FROM products WHERE prod_id = ?', [parent.prod_id]);
      return rows[0];
    },
  },
};
  
