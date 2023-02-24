import React, { useEffect } from 'react';
import Form from '../Components/Form';
const Home = () => {
    useEffect(()=>{
        document.title = "Notebook : Home"
    });
    return (
        <>
            <div className="container">
                <Form />
            </div>

        </>
    )
};
export default Home;
