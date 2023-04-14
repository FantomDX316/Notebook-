import React from 'react';
import NoteContext from "./NoteContext";
import { useState } from "react";

//This is nothing but the provider component and our context hold the state..... provider component is used to wrap alll the child components to make context available to all the components where the context can be used to acces the state.
const NoteState = (props) => {
    // use it when in development thus use the localhost
    // const host = "http://localhost:5000"; 
    // const host = "https://notebookbackend.onrender.com";
    const host = "http://localhost:5000"
    const [alert,setAlert] = useState({type:"",msg:""});

    //showAlert function used for showing different alerts to the user
    const showAlert = (type,msg) =>{
        setAlert({type:type,msg:msg});
        setTimeout(()=>{
            setAlert({type:"",msg:""});
        },2000);
    }
   
    const [notes, setNotes] = useState([]);
        // adding note function
        const addNote= async (title,description,tag)=>{
            const response = await fetch(`${host}/api/notes/addnote`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "auth_token":localStorage.getItem('token')
                },
                body:JSON.stringify({title,description,tag})
            })
            
            const note = await response.json();
            setNotes(notes.concat(note));

            

        };
        //fetching all notes
        const fetchNote = async () =>{
            const response = await fetch(`${host}/api/notes/fetchallnotes`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "auth_token":localStorage.getItem('token')
                }
            });
            const fetchedData = await response.json();
            setNotes(fetchedData);
            
        }
        //deleting note function
        const deleteNote= async(id)=>{
            const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "auth_token":localStorage.getItem('token')
                }
            });
            const deletedNote = await response.json();
            const newNote = notes.filter(note=>{
                return note._id !== deletedNote._id;
            });
            setNotes(newNote);

        }
        //editing note function
        const editNoteFunc= async (id,title,description,tag)=>{

            const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json',
                    "auth_token":localStorage.getItem('token')
                },
                body:JSON.stringify({title,description,tag})
            });
            fetchNote();

        }

    return (
        <NoteContext.Provider value={{ notes,addNote,deleteNote,fetchNote,editNoteFunc,alert,showAlert}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;