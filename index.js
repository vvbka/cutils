/**
 * index.js - cutils
 * some utilities for the contest.
 *
 * Copyright (C) 2015 Karim Alibhai.
 * Copyright (C) 2015 Valen Varangu Booth.
 **/

"use strict";

module.exports = {
    R: {
      fn: require('./lib/R/fn.js')
    }
  , tree: require('./lib/graph/tree.js')
  , graph: require('./lib/graph/index.js')
  , describe: require('./lib/io.js')
}
