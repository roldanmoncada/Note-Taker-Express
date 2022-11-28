const util = require('util');
const fs = require('fs');
const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes
            try{parsedNotes = [].concat(JSON.parse(notes))
            } catch(err) {
                parsedNotes = []
            }
            return parsedNotes;
        })
    }
    addNote(note) {
        const { title, text } = note
        if (!title || !text) {
            throw new Error('title and text cannot be blank')
        }
        const newNote = {title, text, id:uuidv1()}
            return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote)
    }
    // removeNote(id) {
    //     const { uuidv1 } = id
    //     const { title, text, id} = note
    //     // read db.json
    //     this.getNotes()
    //     if (uuidv1 != note.id) {
    //         throw new Error('cannot delete note that does not exist.')
    //     }
    //     const newDB = notes.filter((notes) => notes.id != uuidv1)
    //         return this.getNotes()
    //         .then((notes) => [...notes])
    //         .then((newDB) => this.write(newDB))
    //         .then(() => newDB)
    //     // remove the note with the id from all notes
    //     // write over the existing db
    // }
}

module.exports = new Store();