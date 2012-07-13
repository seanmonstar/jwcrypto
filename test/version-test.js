#!/usr/bin/env node
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const
vows = require('vows'),
assert = require('assert'),
jwcrypto = require('../index'),
testUtils = require('./utils');

var suite = vows.describe('Versioning tests');

suite.addBatch({
  "read default data format version": {
    topic: function() {
      return jwcrypto.DATA_FORMAT_VERSION;
    },
    "return what we expect": function(version) {
      assert.equal(version, '2012.08.15');
    }
  }
});

suite.addBatch({
  "data format version set to empty string to indicate first version": {
    topic: function() {
      jwcrypto.setDataFormatVersion('');
      return jwcrypto.DATA_FORMAT_VERSION;
    },
    "is reflected appropriately": function(version) {
      assert.equal(version, '');
    }
  }
});

suite.addBatch({
  "prior version set to inexistent version": {
    topic: function() {
      try {
        jwcrypto.setDataFormatVersion('foobar');
        return null;
      } catch (e) {
        return e;
      }
    },
    "throws": function(e) {
      assert.isNotNull(e);
    }
  }
});


// run or export the suite.
if (process.argv[1] === __filename) suite.run();
else suite.export(module);
