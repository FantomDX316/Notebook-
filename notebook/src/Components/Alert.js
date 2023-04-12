import React,{useContext} from 'react';
import NoteContext from '../Context/NoteContext';
const Alert = () => {
    const context = useContext(NoteContext);
    const{alert} = context;
    return (
        <>
            <div className= {`alert alert-${alert.type}`} role="alert">
                {alert.msg}
            </div>
        </>
    )
};
export default Alert;