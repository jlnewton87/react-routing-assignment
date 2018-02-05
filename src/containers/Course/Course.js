import React from 'react';
import data from '../../data';

const course = (props) => {

    const defaultCourse = { id: 'N/A', title: 'Select a course' };
    let course = props.id ?
        data.courses[ props.id - 1] :
        defaultCourse;
    course = course || defaultCourse;
    return (
        <div>
            <h1>{course.title}</h1>
            <p>You selected the Course with ID: {course.id}</p>
        </div>
    );
}

export default course;