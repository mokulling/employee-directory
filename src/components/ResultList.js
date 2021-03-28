import React from "react";

function ResultList(props) {
    return (
        console.log(props),
        <div>
        <p>{props.results.gender} </p>
        <p>{props.results.gender} </p>
        <p>{props.results.nat}</p>
        <img alt= 'profile' src= {props.results.picture.large} />
        
        </div>




    );
}

export default ResultList;