import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';
import data from '../../data';

class Courses extends Component {
    constructor(props) {
        super(props);
        const initialIdFromPath = this.props.location.pathname.split('/')[2];
        const initialCourse = initialIdFromPath ?
            initialIdFromPath :
            null;

        this.state = {
            selectedCourse: initialCourse
        };
    }

    courseClickHandler = (id) => {
        this.setState({ selectedCourse: id });
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        data.courses.map( course => {
                            return <Link onClick={() => { this.courseClickHandler(course.id) }} to={`/courses/${course.id}`} className="Course" key={course.id}>{course.title}</Link>;
                        } )
                    }
                </section>
                <Route path="/courses/:id" render={(props) => <Course id={this.state.selectedCourse} />} />
            </div>
        );
    }
}

export default Courses;