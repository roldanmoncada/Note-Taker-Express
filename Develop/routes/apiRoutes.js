const router = require('express').Router();

const { write } = require('../db/store');
const store = require('../db/store');

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
    // store.removeNote(req.params.id)
    // .then((id) => { 
    //     return res.json(id)
    // })
    // .catch((err) => {
    //     return res.status(500).json(err)
    // })

    let noteId = req.params.id;
    let next_Id = 0;

    console.log(`Your delete request for note ${noteId} succeeded!`);
    data = data.filter(currentNote => {
        return currentNote.id != noteId;
    });
    for (currentNote of data)  {
        currentNote.id = next_Id.toString();
        next_Id++;
    }

    fs.writeFileSyn('./db/db.json', JSON.stringify(data));
    res.json(data);

});

module.exports = router;