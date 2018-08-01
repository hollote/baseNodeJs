"use strict";

module.exports = {
  redisStore: {
    url: process.env.REDIS_STORE_URI || '//localhost:6379',
    secret: process.env.REDIS_STORE_SECRET || 'secret'
  },
  mongoDB: {
    url: 'mongodb://localhost:27017/baseNodeJs'
  }
};