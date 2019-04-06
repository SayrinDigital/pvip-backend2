'use strict';

/**
 * Foto.js controller
 *
 * @description: A set of functions called "actions" for managing `Foto`.
 */

module.exports = {

  /**
   * Retrieve foto records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.foto.search(ctx.query);
    } else {
      return strapi.services.foto.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a foto record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.foto.fetch(ctx.params);
  },

  /**
   * Count foto records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.foto.count(ctx.query);
  },

  /**
   * Create a/an foto record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.foto.add(ctx.request.body);
  },

  /**
   * Update a/an foto record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.foto.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an foto record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.foto.remove(ctx.params);
  }
};
