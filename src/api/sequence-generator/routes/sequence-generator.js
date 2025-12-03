const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sequence-generator.sequence-generator');
