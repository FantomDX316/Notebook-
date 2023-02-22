import React, { useState, useContext, useEffect,useRef } from 'react';
import Notes from './Notes';
import NoteContext from '../Context/NoteContext';
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const context = useContext(NoteContext);
    const navigate = useNavigate();
    const { addNote,fetchNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const refTitle = useRef(null);
    const refDescription = useRef(null);
    const refTag = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        
    };

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            fetchNote();
        }
        else{
            navigate("/login");
        }
        
        // eslint-disable-next-line
    },[]);

    return (
        <>
            <div className="container">
                <h1 className="my-4">Notebook</h1>
                <h3>Add Notes To Your Notebook</h3>
                <form onSubmit={handleClick}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input ref={refTitle} minLength={5} name='title' id="title" type="text" onChange={handleChange} value={note.title} className="form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input ref={refDescription} minLength={5} name="description" id="description" type="text" onChange={handleChange} value={note.description} className="form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input ref={refTag} type="text"  id="tag" name="tag" onChange={handleChange} value={note.tag} className="form-control" required/>
                    </div>

                    <button type="submit" disabled={note.title.length<5 || note.description.length<5}  className="btn btn-primary">Add Note</button>
                </form>

                <div className="notes">
                
                    <Notes />
                </div>


            </div>
        </>
    )
};
export default Form;
