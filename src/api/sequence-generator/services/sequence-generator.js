const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sequence-generator.sequence-generator');
