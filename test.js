'use strict';

/* global describe, it */
var assert = require('assert'),
    toLowerCase = require('./to-lower-case');

describe('lower-case', function () {
    it('Should lower-case a string', function () {
        assert.equal(toLowerCase('test'), 'test');

        assert.equal(toLowerCase('TeST'), 'test');

        assert.equal(toLowerCase('TEST'), 'test');

        assert.equal(toLowerCase(1), '1');
    });

    it('Should return empty string if null or nothing is passed', function () {
        assert.equal(toLowerCase(null), '');

        assert.equal(toLowerCase(), '');
    });

    it('Should lower-case object toString', function () {
        assert.equal(toLowerCase({ toString: function () { return 1337 } }), '1337');
    });
});
