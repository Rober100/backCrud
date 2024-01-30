const { Router } = require("express");

const router = Router()

const { createNoteHandler, getAllNotesHandler, getNotesByIdHandler, deleteNoteHandler } = require("../handlers/notesHandlers");
//const  {createUserHandler}  = require("../handlers/createUserHandler")

router.get("/", getAllNotesHandler)
router.post("/noteCreate", createNoteHandler)
router.get("/getById/:id", getNotesByIdHandler)
router.delete("/deleteNote/:id", deleteNoteHandler)

//router.post("/userCreate", createUserHandler);

module.exports = router;