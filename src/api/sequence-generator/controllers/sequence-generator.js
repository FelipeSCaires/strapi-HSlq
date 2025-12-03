const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sequence-generator.sequence-generator');
