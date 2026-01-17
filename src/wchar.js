/*
This code is based on ref-wchar by Nathan Rajlich

License
(The MIT License)

Copyright (c) 2014 Nathan Rajlich <nathan@tootallnate.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var iconv = require('iconv-lite');

/**
 * On Windows they're UTF-16 (2-bytes),
 * but on Unix platform they're UTF-32 (4-bytes).
 */
var size = process.platform === 'win32' ? 2 : 4;

/**
 * Detect system endianness using TypedArray
 */
var endianness = (new Uint16Array(new Uint8Array([0x12, 0x34]).buffer))[0] === 0x3412 ? 'le' : 'be';

/**
 * Encoding string for iconv-lite (e.g., 'utf-16le' or 'utf-32le')
 */
var wchar_encoding = `utf-${8 * size}${endianness}`;

/**
 * Turns a `wchar_t *` Buffer instance into a JavaScript String instance.
 *
 * @param {Buffer} buffer - buffer instance to serialize
 * @returns {string} - decoded string
 * @public
 */
function wcharToString(buffer) {
  return iconv.decode(buffer, wchar_encoding);
}

module.exports = {
  size: size,
  toString: wcharToString
};
