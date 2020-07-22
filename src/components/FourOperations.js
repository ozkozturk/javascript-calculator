import React from "react";

const FourOperations = ({fourOperations}) => {
    return(
        <div >
          {
            fourOperations.map((ops, index) => (
              <button className="orange-button" key={index}>{ops}</button>
            ))
          }
        </div>
    )
}

export default FourOperations;
