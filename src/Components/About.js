import React,{useContext, useEffect} from 'react';

const About = ()=>{
    const context = useContext('../Context/NoteContext');
    useEffect(()=>{
        document.title = "Notebook : About";
    },[]);
      return(
        <>
            <div className="container">
                <h1 className='
                my-4'>About Notebook</h1>
                <h2>This app lets you save your notes and lets you retrieve em' whenever or wherever you need {context}

                </h2>
            </div>
        </>
    )
};
export default About;