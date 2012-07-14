/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// tracking the version number in a separate location so we
// don't have circular dependencies.

const SUPPORTED_DATA_FORMATS = ['2012.08.15', ''];

var DATA_FORMAT_VERSION = '2012.08.15';

exports.setDataFormatVersion = function(version) {
  if (SUPPORTED_DATA_FORMATS.indexOf(version) == -1)
    throw new Error("no such version " + version + ", only supported versions are " + SUPPORTED_DATA_FORMATS.join(","));
  
  DATA_FORMAT_VERSION = version;
};

exports.getDataFormatVersion = function() {
  return DATA_FORMAT_VERSION;
}