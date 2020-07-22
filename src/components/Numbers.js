import React from "react";

const Numbers = ({numbers}) => {
    return(
        <div>
          {
            numbers.map((number, index) => (
              (number === 0)
                ? <button className="dark-grey zero" key={index}>{number}</button>
                : <button className="dark-grey" key={index}>{number}</button>
            ))
          }
        </div>
    )
}

export default Numbers;
