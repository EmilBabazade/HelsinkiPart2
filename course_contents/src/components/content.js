import React from 'react';
import Part from './part';

const Content = ({parts}) => {
    return(
      <div>
        {parts.map((part) => {
          return  <Part part={part} />;
        })}
      </div>
    );
  };

export default Content;