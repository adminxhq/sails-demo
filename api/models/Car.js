/**
 * Car.js
 *
 * @description :: Motorized vehicle of 4 wheels for individual and family transport
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name: { type: 'string' },
    model: { type:'string' },
    brand: { type: 'string' },
    year: { type: 'integer', min: 2000, max: 2019 },
    price: { type: 'float', min: 0 },
    available: { type: 'boolean' },
    summary: { type: 'string' },
    thumbnail: { type: 'string' },
    cover: { type: 'string' },
    extras: { type: 'array' },
    doorConfiguration: { type: 'string', enum: ['2 Doors', '3 Doors', '4 Doors', '5 Doors', '6 Doors'] },
    history: { type: 'longtext' },
    metaData: { type: 'json' },
  },

  adminx: {
    name: 'Car',
    attributes: {
      name: { list: true },
      model: { list: true },
      updatedAt: { list: true },
    }
  }
};
