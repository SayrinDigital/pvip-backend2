'use strict';

/**
 * Anunciate.js controller
 *
 * @description: A set of functions called "actions" for managing `Anunciate`.
 */

module.exports = {

  /**
   * Retrieve anunciate records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.anunciate.search(ctx.query);
    } else {
      return strapi.services.anunciate.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a anunciate record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.anunciate.fetch(ctx.params);
  },

  /**
   * Count anunciate records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.anunciate.count(ctx.query);
  },

  /**
   * Create a/an anunciate record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.anunciate.add(ctx.request.body);
  },

  /**
   * Update a/an anunciate record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.anunciate.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an anunciate record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.anunciate.remove(ctx.params);
  }
};
