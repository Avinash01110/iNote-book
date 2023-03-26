const express = require("express")
const router = express.Router()
const notes = require("../models/Notes")
const { body, validationResult } = require('express-validator')
const fetchuser = require('../middleware/fetchuser')
const Notes = require("../models/Notes")

// Route1 : Getting all the notes of the user: GET "api/auth/fetchallnotes". login required
router.get("/fetchallnotes", fetchuser, async (req,res)=>{
    const note = await notes.find({user: req.user.id})
    res.json(note)
})



// Route2 : Add a new noate : POST "api/auth/addnote". login required
router.post("/addnote",fetchuser,
    body('title','Enter a valid Title').isLength({min:3}),
    body('description','description must be atleast 5 characters').isLength({ min: 4 }),
    async(req, res) => {
        try{

            const {title,description,tag} = req.body
            
            // If there is are error, return bad request and the error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const note = new notes({
            title, description, tag, user:req.user.id
        })
        
        const saved_note = await note.save()
        
        res.send(saved_note)
        }catch(error){
            console.error(error.message)
            res.status(500).send("Intenal server error.")
        }
    })


    //Route3 : Update the existing post using : PUT "/api/notes/updatenote/:id". Login required
    router.put("/updatenote/:id",fetchuser,
    async(req, res) => {
        const {title,description,tag} = req.body

        // Updating the note
        const newnote = {}
        if(title){
            newnote.title = title
        }
        if(description){
            newnote.description = description
        }
        if(tag){
            newnote.tag = tag
        }

        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send("Not found")
        }

        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")    
        }

        note = await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
        res.send({note})
    
    })


    // Route5 : Deleting the existing note using : DELETE "/api/note/deletenode". Login required
    router.delete("/deletenote/:id",fetchuser,
        async(req, res) => {
   
        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send("Not found")
        }

        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")    
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.send({"Success":"Note has been deleted",note: note})
    
    })
    
module.exports = router