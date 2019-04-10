'use strict';

/**
 * Formulariocalificacion.js controller
 *
 * @description: A set of functions called "actions" for managing `Formulariocalificacion`.
 */

module.exports = {

  /**
   * Retrieve formulariocalificacion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.formulariocalificacion.search(ctx.query);
    } else {
      return strapi.services.formulariocalificacion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a formulariocalificacion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.formulariocalificacion.fetch(ctx.params);
  },

  /**
   * Count formulariocalificacion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.formulariocalificacion.count(ctx.query);
  },

  /**
   * Create a/an formulariocalificacion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.formulariocalificacion.add(ctx.request.body);
  },

  /**
   * Update a/an formulariocalificacion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.formulariocalificacion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an formulariocalificacion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.formulariocalificacion.remove(ctx.params);
  }
};
