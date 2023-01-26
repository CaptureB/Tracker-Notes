const fs = require('fs');
const path = require('path');

function makeNotes(body, notesA) {
    let newNotes = body
    notesA.push(newNotes);
    fs.writeFileSync( 
        path.join(__dirname, './db/db.json'),
        JSON.stringify({notes: notesA}, null, 2)
    );
    return newNotes
    };

    module.exports = {makeNotes};