const db = require('../../connection/dbConnection');

module.exports = {
  Query: {
    getEtabs: async () => {
      const [rows] = await db.query('SELECT * FROM etabs');
      return rows;
    },
    getEtab: async (_, { etab_id }) => {
      const [rows] = await db.query('SELECT * FROM etabs WHERE etab_id = ?', [etab_id]);
      return rows[0];
    },
  },
  Mutation: {
    createEtab: async (_, {input}) => {
      const {etab_name, etab_fonc, etab_phone, etab_email} = input;
      const [result] = await db.query('INSERT INTO etabs (etab_name, etab_fonc, etab_phone, etab_email) VALUES (?, ?, ?, ?)', 
        [etab_name, etab_fonc, etab_phone, etab_email]);
      return { etab_id: result.insertId, etab_name, etab_fonc, etab_phone, etab_email };
    },
    updateEtab: async (_, { input }) => {
      const { etab_id, etab_name, etab_fonc, etab_phone, etab_email } = input;
      await db.query(`UPDATE etabs SET etab_name =?, etab_fonc =?, etab_phone =?, etab_email =?
         WHERE etab_id = ?`,
          [etab_name, etab_fonc, etab_phone, etab_email, etab_id]);
          return {
            etab_id,
            etab_name, etab_fonc, etab_phone, etab_email
          };
    },
    
    deleteEtab: async (_, { etab_id }) => {
      await db.query('DELETE FROM etabs WHERE etab_id = ?', [etab_id]);
      return 'Etablissement deleted successfully';
    },
  },
};
