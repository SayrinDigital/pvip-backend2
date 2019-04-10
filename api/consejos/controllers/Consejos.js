'use strict';

/**
 * Consejos.js controller
 *
 * @description: A set of functions called "actions" for managing `Consejos`.
 */

module.exports = {

  /**
   * Retrieve consejos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.consejos.search(ctx.query);
    } else {
      return strapi.services.consejos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a consejos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.consejos.fetch(ctx.params);
  },

  /**
   * Count consejos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.consejos.count(ctx.query);
  },

  /**
   * Create a/an consejos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.consejos.add(ctx.request.body);
  },

  /**
   * Update a/an consejos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.consejos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an consejos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.consejos.remove(ctx.params);
  }
};
