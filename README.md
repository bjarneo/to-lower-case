to lower-case
===========

Lower case a string. Handles objects with toString property, numbers and booleans.

###Install
```javascript
npm install lower-case --save
```

###Usage
```javascript
var lowerCase = require('lower-case');

lowerCase('STRING') // => 'string'

lowerCase({ toString: function() {
    return 'my STRING';
}}); // => 'my string'
```
