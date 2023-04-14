import React,{useContext} from 'react';
import NoteContext from "../Context/NoteContext";

const NoteItem = (props) => {
    const { note ,toggle} = props;
    const context = useContext(NoteContext);
    const {deleteNote,showAlert} = context;
    const handleClick =()=>{
        deleteNote(note._id);
        showAlert("success","Note Deleted Successfully");
    };
    const handleEdit=()=>{
        toggle(note._id,note.title,note.description,note.tag);
    }
    return (
        <>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 my-3">
                <div className="card text-break" style={{ width: "18rem", boxShadow:"4px 4px 4px grey" }}>
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title">{note.title}</h5>
                            <i onClick={handleClick} className="fa-solid fa-trash-can" style={{ margin: "10px" }}></i>
                            <i onClick={handleEdit} className="fa-solid fa-pen-to-square"></i>
                        </div>

                        <p className="card-text">{note.description} </p>
                    </div>
                </div>
            </div>


        </>

    )
};
export default NoteItem;