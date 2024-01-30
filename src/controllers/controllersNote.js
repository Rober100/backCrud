const { Note } = require('../db/db.js')


const createNote = async (title, content) => {

  const note = await Note.create({
    title,
    content
  });

  return note;
};

const getAllNotes = async () => {
  const notes = await Note.findAll({
    where: {
      isDelete: false,
    }
  });
  return notes
}

const getNoteById = async (id) => {
  const note = await Note.findByPk(id, {
    where: {
      isDelete: false,
    }
  });
  return note;
};



const deleteNote = async (id) => {
const note = await Note.findByPk(id);
  if (note) {
    note.isDelete = true;
    await note.save()
  }
  return note
}

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  deleteNote
};