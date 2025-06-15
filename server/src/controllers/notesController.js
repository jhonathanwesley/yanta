export function getAllNotes(req, res) {
    res.status(200).send( "GET: Notas recuperadas com sucesso!" );
};

export function createNote(req, res) {
    res.status(201).json({ message: "POST: Nota criada com sucesso!" });
};

export function updateNote(req, res) {
    res.status(200).json({ mesage: "PUT: Nota atualizada com sucesso!" });
};

export function deleteNote(req, res) {
    res.status(200).json({ message: "DELETE: Nota apagada com sucesso!" });
};
