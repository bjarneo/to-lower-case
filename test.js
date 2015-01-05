'use strict';

/* global describe, it */
var assert = require('assert'),
    lowerCase = require('./lower-case');

describe('lower-case', function () {
    it('Should lower-case a string', function () {
        assert.equal(lowerCase('test'), 'test');

        assert.equal(lowerCase('TeST'), 'test');

        assert.equal(lowerCase('TEST'), 'test');

        assert.equal(lowerCase(1), '1');
    });

    it('Should return empty string if null or nothing is passed', function () {
        assert.equal(lowerCase(null), '');

        assert.equal(lowerCase(), '');
    });

    it('Should lower-case object toString', function () {
        assert.equal(lowerCase({ toString: function () { return 1337 } }), '1337');
    });
});
