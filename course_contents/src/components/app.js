import React from 'react';
import Course from './course';

const App = ({courses}) => {
    return(
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => {
                return <Course course={course} />
            })}
        </div>
    );
};

export default App;