const { Router } = require("express");

const router = Router()

const { createNoteHandler, getAllNotesHandler, getNotesByIdHandler, deleteNoteHandler, updateNote } = require("../handlers/notesHandlers");
//const  {createUserHandler}  = require("../handlers/createUserHandler")

router.get("/", getAllNotesHandler)
router.post("/noteCreate", createNoteHandler)
router.get("/getById/:id", getNotesByIdHandler)
router.delete("/deleteNote/:id", deleteNoteHandler)
router.put("/update", updateNote)

//router.post("/userCreate", createUserHandler);

module.exports = router;