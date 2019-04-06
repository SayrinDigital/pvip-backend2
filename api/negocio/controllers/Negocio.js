'use strict';

/**
 * Negocio.js controller
 *
 * @description: A set of functions called "actions" for managing `Negocio`.
 */

module.exports = {

  /**
   * Retrieve negocio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.negocio.search(ctx.query);
    } else {
      return strapi.services.negocio.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a negocio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.negocio.fetch(ctx.params);
  },

  /**
   * Count negocio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.negocio.count(ctx.query);
  },

  /**
   * Create a/an negocio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.negocio.add(ctx.request.body);
  },

  /**
   * Update a/an negocio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.negocio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an negocio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.negocio.remove(ctx.params);
  }
};
