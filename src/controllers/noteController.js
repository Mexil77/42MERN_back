noteCtrl = {};

const Note = require("../models/Note");

noteCtrl.getAllNotes = async (req, res) => {
	let allNotes = await Note.find();
	res.json(allNotes);
};

noteCtrl.getAllMyNotes = async (req, res) => {
	const { userId } = req.query;
	let allNotes = await Note.find({ userId });
	res.json(allNotes);
};

noteCtrl.getNoteById = async (req, res) => {
	let note = await Note.findById(req.params.id);
	res.json(note);
};

noteCtrl.saveNote = async (req, res) => {
	const { userId, title, body } = req.body;
	const newNote = new Note({ userId, title, body });
	await newNote.save();
	res.json({ savedSuccessfully: true });
};

noteCtrl.updateNote = async (req, res) => {
	const { title, body } = req.body;
	await Note.findByIdAndUpdate(req.params.id, { title, body });
	res.json({ updatedSuccessfully: true });
};

noteCtrl.deleteNote = async (req, res) => {
	await Note.findByIdAndDelete(req.params.id);
	res.json({ deletedSuccessfully: true });
};

module.exports = noteCtrl;
