const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const fourTypeDefs = require("./typeDefs/Supply/fours");
const productTypeDefs = require("./typeDefs/products");
const achatTypeDefs = require("./typeDefs/Supply/achats");
const userTypeDefs = require("./typeDefs/users");
const etabTypeDefs = require("./typeDefs/etabs");
const achat_productTypeDefs = require("./typeDefs/Supply/achats_products");
const customerTypeDefs = require("./typeDefs/sale/customers");
const saleTypeDefs = require("./typeDefs/sale/sales");
const sale_productTypeDefs = require("./typeDefs/sale/sales_products");
const versementTypeDefs = require("./typeDefs/sale/versements");
const paymentTypeDefs = require("./typeDefs/Supply/payments");
const paymentCalcTypeDefs = require("./typeDefs/calculation/paymentCalc");
const versementCalcTypeDefs = require("./typeDefs/calculation/versementCalc");

const fourResolvers = require("./resolvers/Supply/fours");
const productResolvers = require("./resolvers/products");
const achatResolvers = require("./resolvers/Supply/achats");
const userResolvers = require("./resolvers/users");
const etabResolvers = require("./resolvers/etabs");
const achat_productResolvers = require("./resolvers/Supply/achats_products");
const customerResolvers = require("./resolvers/sale/customers");
const saleResolvers = require("./resolvers/sale/sales");
const sale_productResolvers = require("./resolvers/sale/sales_products");
const versementResolvers = require("./resolvers/sale/versements");
const paymentResolvers = require("./resolvers/Supply/payments");
const paymentCalcResolvers = require("./resolvers/calculation/paymentCalc");
const versementCalcResolvers = require("./resolvers/calculation/versementCalc");

const typeDefs = mergeTypeDefs([
  fourTypeDefs,
  productTypeDefs,
  achatTypeDefs,
  userTypeDefs,
  etabTypeDefs,
  achat_productTypeDefs,
  customerTypeDefs,
  saleTypeDefs,
  sale_productTypeDefs,
  versementTypeDefs,
  paymentTypeDefs,
  paymentCalcTypeDefs,
  versementCalcTypeDefs,
]);

const resolvers = mergeResolvers([
  fourResolvers,
  productResolvers,
  achatResolvers,
  userResolvers,
  etabResolvers,
  achat_productResolvers,
  customerResolvers,
  saleResolvers,
  sale_productResolvers,
  versementResolvers,
  paymentResolvers,
  paymentCalcResolvers,
  versementCalcResolvers,
]);

module.exports = { typeDefs, resolvers };
