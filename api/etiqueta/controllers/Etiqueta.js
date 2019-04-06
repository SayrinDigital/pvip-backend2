'use strict';

/**
 * Etiqueta.js controller
 *
 * @description: A set of functions called "actions" for managing `Etiqueta`.
 */

module.exports = {

  /**
   * Retrieve etiqueta records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.etiqueta.search(ctx.query);
    } else {
      return strapi.services.etiqueta.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a etiqueta record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.etiqueta.fetch(ctx.params);
  },

  /**
   * Count etiqueta records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.etiqueta.count(ctx.query);
  },

  /**
   * Create a/an etiqueta record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.etiqueta.add(ctx.request.body);
  },

  /**
   * Update a/an etiqueta record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.etiqueta.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an etiqueta record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.etiqueta.remove(ctx.params);
  }
};
