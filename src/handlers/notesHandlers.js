const { createNote, getAllNotes, getNoteById, deleteNote, updateNote } = require("../controllers/controllersNote")

const createNoteHandler = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = await createNote(title, content);
        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la nota' });
    }
}

const getAllNotesHandler = async (req, res) => {
    try {
        const notes = await getAllNotes()
        if (notes.length === 0) {
            res.status(201).json("No existen notas!")
        } else {
            res.status(200).json(notes)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener las notas" })
    }
}

const getNotesByIdHandler = async (req, res) => {
    const { id } = req.params
    const note = await getNoteById(id);
    try {
        if (note) {
            res.status(200).json(note);
        } else {
            res.status(404).json({ error: 'Nota no encontrada' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al buscar por id" })
    }
}

const updatedNote = async (req, res) => {
    const { id } = req.params;
    const { updatedTitle, updatedContent } = req.body;
    const updatedNote = await updateNote(id, updatedTitle, updatedContent)
    try {
        const { id } = req.params;
        const { updatedTitle, updatedContent } = req.body;
        const updatedNote = await updateNote(id, updatedTitle, updatedContent);
    
        if (updatedNote) {
          res.status(200).json({ msg: "Nota actualizada con éxito", updatedNote });
        } else {
          res.status(404).json("Nota no encontrada");
        }
      } catch (error) {
        console.log(error);
        res.status(500).json("Error al actualizar la nota");
      }

}

const deleteNoteHandler = async (req, res) => {
    const { id } = req.params;
    const deleteNoteResult = await deleteNote(id);
    try {
        if (deleteNoteResult) {
            res.status(200).json({ msg: "Nota eliminada con éxito", deleteNoteResult })
        } else {
            res.status(404).json("Nota no encontrada")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Error al borrar la nota")
    }

}
module.exports = {
    createNoteHandler,
    getAllNotesHandler,
    getNotesByIdHandler,
    deleteNoteHandler,
    updateNote
}