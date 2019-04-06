var docgen = require('react-docgen-typescript');
var path = require('path');

// var tsconfigPath = path.resolve('tsconfig.json')
var filePath = path.resolve('src', 'components', 'Foo.tsx');

console.log(filePath);

var docs = docgen.withDefaultConfig().parse(filePath);

console.log(docs);
