const db = require("../../../connection/dbConnection");

module.exports = {
  Query: {
    getSaleProducts: async () => {
      const [rows] = await db.query('SELECT * FROM sales_products');
      return rows;
    },
    getSaleProductsBySale: async (_, { sale_id }) => {
      const [rows] = await db.query('SELECT * FROM sales_products WHERE sale_id = ?', [sale_id]);
      return rows
    },
    getSaleProductsByProduct: async (_, { prod_id }) => {
      const [rows] = await db.query('SELECT * FROM sales_products WHERE prod_id = ?', [prod_id]);
      return rows;
    },
  },
  Mutation: {
    createSaleProduct: async (_, { input }) => {
      const { sale_id, prod_id, quantity } = input;
      await db.query(
        'INSERT INTO sales_products (sale_id, prod_id, quantity) VALUES (?, ?, ?)',
        [sale_id, prod_id, quantity]
      );
      return { sale_id, prod_id, quantity };
    },
    updateSaleProduct: async (_, { input }) => {
      const { sale_id, prod_id, quantity } = input;
      await db.query(
        'UPDATE sales_products SET quantity = ? WHERE sale_id = ? AND prod_id = ?',
        [quantity, sale_id, prod_id]
      );
      return { sale_id, prod_id, quantity };
    },
    deleteSaleProduct: async (_, { sale_id, prod_id }) => {
      await db.query('DELETE FROM sales_products WHERE sale_id = ? AND prod_id = ?', 
        [sale_id, prod_id]);
      return 'SaleProduct deleted successfully';
    },
  },
  SaleProduct: {
    sale: async (parent) => {
      const [rows] = await db.query('SELECT * FROM sales WHERE sale_id = ?', [parent.sale_id]);
      return rows[0];
    },
    product: async (parent) => {
      const [rows] = await db.query('SELECT * FROM products WHERE prod_id = ?', [parent.prod_id]);
      return rows[0];
    },
  },
};
  
