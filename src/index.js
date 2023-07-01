const express = require('express');
const app = express();
const Note = require('./models/note')

require('./db/database');
app.use(express.json());

// MARK: - GET /notes

// app.get('/notes', (req, res) => {
//     fs.readFile(__dirname + "/notes.json", "utf-8", (err, data) => {
//         if (err) throw err
//         res.send(data)
//     })
// })

// MARK: - POST /notes
app.post('/notes', (req, res) => {
    const note = new Note({
        note: req.body.note
      });
    
      console.log(note);

      note.save()
        .then(() => {
          res.status(201).send(note);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send(error);
        });
})

app.listen(3000, () => console.log(`App listening on port 3000`))

