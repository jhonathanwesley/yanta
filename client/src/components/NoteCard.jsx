import { AppleIcon, PenSquareIcon, TableRowsSplit, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import toast from "react-hot-toast"
import api from "../lib/axios.js"

const NoteCard = ({ note,setNotes }) => {

  const handleDelete = async (e, id) => {
    e.preventDefault(); // Remover comportamento de navegação

    if(!window.confirm("Tem certeza qeu deseja apagar essa nota?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter(note => note._id !== id)) // limpar a note deletada do array
      toast.success("Nota apagada com sucesso!");
    } catch (error) {
      console.log("Error in the delete: ",error);
      toast.error("Falha ao apagar a nota!");
    } finally {
      console.log("Processo encerrado.");
      toast.success("Processo encerrado.");
    }
  };

  return (
  <Link to={`/note/${note._id}`}
    className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#196e19]"
  >
    <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
                <PenSquareIcon className="size-4" />
                <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e,note._id)}>
                  <Trash2Icon className="size-4" />
                </button>
            </div>
        </div>
    </div>
  </Link>
  );
};
export default NoteCard;

// <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>