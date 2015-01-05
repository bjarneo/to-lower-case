to lower-case
===========

Lower case a string. Also handles objects with toString property, numbers and booleans.

###Install
```javascript
npm install to-lower-case --save
```

###Usage
```javascript
var toLowerCase = require('to-lower-case');

toLowerCase('STRING') // => 'string'

toLowerCase({ toString: function() {
    return 'my STRING';
}}); // => 'my string'
```
