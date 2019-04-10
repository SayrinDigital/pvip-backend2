'use strict';

/**
 * Calificacion.js controller
 *
 * @description: A set of functions called "actions" for managing `Calificacion`.
 */

module.exports = {

  /**
   * Retrieve calificacion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.calificacion.search(ctx.query);
    } else {
      return strapi.services.calificacion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a calificacion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.calificacion.fetch(ctx.params);
  },

  /**
   * Count calificacion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.calificacion.count(ctx.query);
  },

  /**
   * Create a/an calificacion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.calificacion.add(ctx.request.body);
  },

  /**
   * Update a/an calificacion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.calificacion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an calificacion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.calificacion.remove(ctx.params);
  }
};
