'use strict';

// String to lower-case
module.exports = function (str) {
    if (!str) {
        return '';
    }

    return String.prototype.toLowerCase.call(str);
};
