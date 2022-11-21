const { Router } = require("express");

const router = Router();

const {
	getAllNotes,
	getAllMyNotes,
	saveNote,
	getNoteById,
	deleteNote,
	updateNote,
} = require("../controllers/noteController");

router.route("/").get(getAllMyNotes).post(saveNote);
router.route("/:id").get(getNoteById).delete(deleteNote).put(updateNote);

module.exports = router;
