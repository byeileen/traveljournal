import React from "react"

export default function Card(props){
    console.log(props.item)
    return(
        <div className="card container">
            <div className="row">
                <div className="col">
                    <img src={props.item.coverImg} className="card-img"/>
                </div>
            <div className="col"> 
                <div className="card-enviornment">
                    <div className="locationStamp">
                    <i className="material-icons">location_on</i>
                    <p>{props.item.enviornment.location}</p>
                    </div>
                    <p className="maps">View on Google Maps</p>
                    </div>
                    <h1 className="bold">{props.item.enviornment.title}</h1>
                <p className="boldDate">{props.item.date}</p>
                <p>{props.item.description}</p>
            </div> 
            </div>
        </div>
        
    )
}