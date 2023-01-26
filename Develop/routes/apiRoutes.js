const router = require('express').Router();
const {newNotes } = require('../../lib/write');
const { v4: uuidv4 } = require('uuid');
const  {notes} = require('../db/db.json');

router.get('/notes', (req, res) => {
    let display = notes
    res.json(display)
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4()
    let create = newNotes(req.body, notes);
    res.json(create);
})

module.exports = rouer;