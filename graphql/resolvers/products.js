const db = require('../../connection/dbConnection');

module.exports = {
  Query: {
    getProducts: async () => {
      const [rows] = await db.query('SELECT * FROM products');
      return rows;
    },
    getProduct: async (_, { prod_id }) => {
      const [rows] = await db.query('SELECT * FROM products WHERE prod_id = ?', [prod_id]);
      return rows[0];
    },
  },
  Mutation: {
    createProduct: async (_, {input}) => {
      const {prod_name, prod_price, prod_unit, prod_barcode} = input;
      const [result] = await db.query('INSERT INTO products (prod_name, prod_price, prod_unit, prod_barcode) VALUES (?, ?, ?, ?)', 
        [prod_name, prod_price, prod_unit, prod_barcode]);
      return { prod_id: result.insertId, prod_name, prod_price, prod_unit, prod_barcode};
    },
    updateProduct: async (_, { input }) => {
      const { prod_id, prod_name, prod_price, prod_unit, prod_barcode } = input;
      await db.query(`UPDATE products SET prod_name =?, prod_price =?, prod_unit =?, prod_barcode =? WHERE prod_id = ?`,
          [prod_name, prod_price, prod_unit, prod_barcode, prod_id]);
          return {
            prod_id, prod_name, prod_price, prod_unit, prod_barcode
          };
    },
    
    deleteProduct: async (_, { prod_id }) => {
      await db.query('DELETE FROM products WHERE prod_id = ?', [prod_id]);
      return 'Product deleted successfully';
    },
  },
};
