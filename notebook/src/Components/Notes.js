import React, { useContext, useRef, useState } from 'react';
import NoteContext from '../Context/NoteContext'
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(NoteContext);
    const [editNote, setEditNote] = useState({ id:"",title: "", description: "", tag: "" });
    const ref = useRef(null);
    const closeModal = useRef(null);
    const { notes , editNoteFunc} = context;
    
    const toggle = (id,title,description,tag) => {
        ref.current.click();
        setEditNote({id,title,description,tag})
    }
    const handleChange = (e) => {
        setEditNote({...editNote,[e.target.name]:e.target.value})
    }
    const handleEditFunction=()=>{
        editNoteFunc(editNote.id,editNote.title,editNote.description,editNote.tag);
        closeModal.current.click();
    }

    return (
        <>
            <div className="container my-3">
                <h1>Your Notes</h1>
                {notes.length===0 && "No Notes to Display"}
                <div className="mod">
                    <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>


                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="container">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input  name='title' value={editNote.title} id="title" type="text" onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input  value={editNote.description} name="description" id="description" type="text" onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input   value={editNote.tag} type="text" id="tag" name="tag" onChange={handleChange} className="form-control" />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button ref={closeModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button disabled={editNote.title.length<5 || editNote.description.length<5} onClick={handleEditFunction} type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} toggle={toggle} />
                    })}
                </div>

            </div>
        </>

    )
};
export default Notes;