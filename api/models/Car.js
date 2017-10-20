/**
 * Car.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name: { type: 'string' },
    model: { type:'string' },
    brand: { type: 'string' },
    photoUrl: { type: 'string' }
  },

  adminx: {
    name: 'Car',
    attributes: {
      id: { list:true },
      name: { list: true },
      model: { list: true },
      brand: { list: true },
      createdAt: { list: true },
      updatedAt: { list: true }
    }
  }
};
