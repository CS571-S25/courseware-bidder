const fs = require('fs');

const output = fs.readFileSync('parse.secret').toString().trim().split(/\r?\n/g);
const pairs = output.map(s => {
    try {
        return {
            email: / +.*@.*wisc.edu/i.exec(s)[0].trim(),
            badger_id: /bid_[0-9a-f]{64}/.exec(s)[0]
        }
    } catch (e) {
        return null;
    }
}).filter(p => p)

fs.writeFileSync("parse.output.secret", pairs.reduce((acc, curr) => `${acc}\n${curr.email},${curr.badger_id}`, "email,bid"));
console.log(`Successfully wrote ${pairs.length} bids to parse.output.secret`)