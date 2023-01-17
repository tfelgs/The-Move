import React from "react";

export default function InfoData(props){

    function isOpen(){
        if (props.bar.opening_hours.open_now === true){
            return "Bar Is Open"
        }
        return "Bar Is Closed"
    }
        
          
    return(
        <div> 
            <p>{props.bar.name}</p>
            <p>{props.bar.formatted_address}</p>
            <p>{props.bar.formatted_phone_number}</p>
            <p>{isOpen()}</p>
        </div>
    )
}