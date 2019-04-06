'use strict';

/**
 * Cliente.js controller
 *
 * @description: A set of functions called "actions" for managing `Cliente`.
 */

module.exports = {

  /**
   * Retrieve cliente records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.cliente.search(ctx.query);
    } else {
      return strapi.services.cliente.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a cliente record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.cliente.fetch(ctx.params);
  },

  /**
   * Count cliente records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.cliente.count(ctx.query);
  },

  /**
   * Create a/an cliente record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cliente.add(ctx.request.body);
  },

  /**
   * Update a/an cliente record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cliente.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cliente record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cliente.remove(ctx.params);
  }
};
