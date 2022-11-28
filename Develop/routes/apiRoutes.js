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
    // store.removeNote(req.params.id)
    // .then((id) => { 
    //     return res.json(id)
    // })
    // .catch((err) => {
    //     return res.status(500).json(err)
    // })

    
let noteId = req.params.id;
    console.log(`Your delete request for note ${noteId} succeeded!`);
    for (let i = 0; i < notes.length; i++) {
        if(noteId === notes[i].id){
            console.log(i.toString())
            notes = notes.splice(notes[i], 1)
            
        }
    }
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
            res.json(notes)
   // let data = notes.filter(currentNote => {
   //     // return currentNote.id != noteId;
   //     
   //     //let next_Id = 0;
   //     for (currentNote of notes)  {
   //         console.log(noteId)
   //         console.log(next_Id)
   //         console.log(req.params.id)
   //         console.log(data)
   //         console.log(currentNote.id)
   //     if (currentNote.id === next_Id.toString()) {
   //         console.log('working?')
   //     }
   //     
   //     //next_Id++;
   // }
   // });
   // console.log(data)

//    fs.writeFileSync('./db/db.json', JSON.stringify(data));
//    res.json(data);

});

module.exports = router;