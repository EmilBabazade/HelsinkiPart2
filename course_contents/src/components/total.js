import React from 'react';

const Total = ({parts}) => {
    return(
      <div>
        <p><b>total of {parts.reduce((total, part) => {
          return total + part.exercises
        }, 0)} exercises</b></p>    
      </div>
    );
  };

export default Total;