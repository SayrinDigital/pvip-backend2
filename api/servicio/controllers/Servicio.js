'use strict';

/**
 * Servicio.js controller
 *
 * @description: A set of functions called "actions" for managing `Servicio`.
 */

module.exports = {

  /**
   * Retrieve servicio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.servicio.search(ctx.query);
    } else {
      return strapi.services.servicio.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a servicio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.servicio.fetch(ctx.params);
  },

  /**
   * Count servicio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.servicio.count(ctx.query);
  },

  /**
   * Create a/an servicio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.servicio.add(ctx.request.body);
  },

  /**
   * Update a/an servicio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.servicio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an servicio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.servicio.remove(ctx.params);
  }
};
