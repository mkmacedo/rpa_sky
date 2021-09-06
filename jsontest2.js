const jsontester = require('./jsontest1.js');

var fs = require('fs');

var jsontest = fs.readFileSync('./jsonTest.txt', 'utf8', (err, jsonString) => {
    if(err){
        console.log('File read failed:', err);
        return;
    }
    console.log('File data:', jsonString);
    return jsonString;
    //console.log('VAI RETORNAR');
    //console.log(JSON.parse(jsonString))
    console.log(JSON.parse(jsonString)['1']);
    //return JSON.parse(jsonString);
});

//console.log(JSON.stringify(jsontest));
/* var x = eval(jsontest);
console.log(x);
 */
console.log(jsontest);
var dict_json = {};

//console.log(jsontest);
/* fs.readFile('./jsonTest.txt', function(text) {
    var textByLine = text.split();
    console.log(textByLine);
}); */
