'use strict';

/**
 * Tipoanuncio.js controller
 *
 * @description: A set of functions called "actions" for managing `Tipoanuncio`.
 */

module.exports = {

  /**
   * Retrieve tipoanuncio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tipoanuncio.search(ctx.query);
    } else {
      return strapi.services.tipoanuncio.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tipoanuncio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tipoanuncio.fetch(ctx.params);
  },

  /**
   * Count tipoanuncio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tipoanuncio.count(ctx.query);
  },

  /**
   * Create a/an tipoanuncio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tipoanuncio.add(ctx.request.body);
  },

  /**
   * Update a/an tipoanuncio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tipoanuncio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tipoanuncio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tipoanuncio.remove(ctx.params);
  }
};
