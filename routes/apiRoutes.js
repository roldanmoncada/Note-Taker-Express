const router = require('express').Router();
const fs = require('fs');

const { write } = require('../db/store');
const store = require('../db/store');

let notes = require('../db/db.json');

router.get('/notes', (req, res) => {
    store.getNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => {
        return res.status(500).json(err)
    })
});

router.post('/notes', (req, res) => {
    store.addNote(req.body)
    .then((note) => {
        return res.json(note)
    })
    .catch((err) => {
        return res.status(500).json(err)
    })
});

// Implementing the Delete method.
router.delete('/notes/:id', (req,res) => {
    for (let i = 0; i < notes.length; i++) {
        if(req.params.id === notes[i].id){
            notes.splice(i, 1)
        }
    }
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
            res.json(notes)
   

});

module.exports = router;