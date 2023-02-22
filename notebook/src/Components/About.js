import React,{useContext} from 'react';

const About = ()=>{
    const context = useContext('../Context/NoteContext');
      return(
        <>
            <div className="container">
                <h1 className='
                my-4'>About Notebook</h1>
                <h2>This app lets you save your notes and lets retrieve em' whenever or wherever you need {context}

                </h2>
            </div>
        </>
    )
};
export default About;