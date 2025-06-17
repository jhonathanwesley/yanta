import { Link, NotebookIcon } from "lucide-react";

const NotesNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            <div className="bg-primary/10 rounded-full p-8">
                <NotebookIcon className="size-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Sem notas ainda</h3>
            <p className="text-base-content/70">
                Pronto para organizar seus pensamntos? Crie sua primeira nota para começar sua jornada.
            </p>
            <Link to="/create" className="btn btn-primary">
                Crie Sua Primeira Nota
            </Link>
        </div>
    );
};
export default NotesNotFound;
