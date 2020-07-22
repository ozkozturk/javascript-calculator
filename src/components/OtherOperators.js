import React from "react";

const OtherOperators = ({otherOperators}) => {
    return(
        <div>
          {
            otherOperators.map((operator, index) => (
              <button className="light-grey" key={index}>{operator}</button>
            ))
          }
        </div>
    )
}

export default OtherOperators;
