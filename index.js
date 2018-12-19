const hypercore = require('hypercore');
const hyperdiscovery = require('hyperdiscovery');
const level = require('level');
const fs = require('fs');
let db = level('test.db');

let feed = hypercore('./test.db','1e259d99ccf421526fa06bcca6b4853a880d371e934002991127cde887b7c609');
//feed.append('hola a todos!');

hyperdiscovery(feed);

process.stdin.on('data', data => feed.append(data.toString().trim()));

/* feed.createReadStream()
    .on('data', (data) => console.log(data.toString()))
 */

//let key = fs.readFileSync('./test.db/key','hex');
//console.log(key);

