const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bank-transaction.bank-transaction');
