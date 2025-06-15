import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);

    } catch (error) {
        console.error("ERROR IN: gelAllNotes controller:", error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({messagen:"Nota não encotrada"});
        res.json(note);

    } catch (error) {
        console.error("ERROR IN: getNoteById controller:", error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export async function createNote(req, res) {

    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});

        await newNote.save();
        res.status(201).json({message:"Nota criada com sucesso"});
    } catch (error) {
        console.error("ERROR IN: createNote controller:", error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export async function updateNote(req, res) {
    
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            {
                new: true,
            }
        );

        if(!updatedNote) return res.status(404).json({message:"Nota não encontrada"});

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("ERROR IN: updateNote controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export async function deleteNote(req, res) {

    try {
        const {title, content} = req.body;
        const deletedNote = await Note.findByIdAndDelete(
            req.params.id,
            { title, content }
        );

        if (!deletedNote) return res.status(404).json({message:"Nota não encontrada"});

        res.status(200).json({message:"Nota apagada com sucesso"})
    } catch (error) {
        console.error("ERROR IN: deleteNote controller", error);
        res.status(500).json({})
    }
    // res.status(200).json({ message:"Nota apagada com sucesso!" });
};
