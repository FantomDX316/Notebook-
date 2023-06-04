import React from 'react'
import noImage from "./noImage.jpg"
const NewsItem = (props) => {
    const date = new Date(props.date);
    const month = date.getMonth();
    const d = date.getDate();
    const year = date.getFullYear();
    return (
            <div className="card" style={{width: "18rem",height:"400px",margin:"20px",boxShadow:"10px 10px 8px grey",border:"3px solid grey"}}>
                <img style={{height:"180px"}} className="card-img-top" src={props.image?props.image:noImage} alt="Card  cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{`${props.title.slice(0,80)}....`}</h5>
                        <p>{`Published At -  ${d}-${month}-${year}`}</p>
                        <a target="_blank" rel="noopener noreferrer" href={props.url} className="btn btn-primary">Link</a>
                    </div>
            </div>
 
    )
}

export default NewsItem;
