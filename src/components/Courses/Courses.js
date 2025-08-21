import React from 'react';
import "./Courses.css"

const Courses = () => {
  return (
    <section className="section courses" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h6>Latest Courses</h6>
              <h2>Latest Courses</h2>
            </div>
          </div>
        </div>

        <ul className="event_filter">
          <li><a className="is_active" href="#!" data-filter="*">Show All</a></li>
          <li><a href="#!" data-filter=".design">Webdesign</a></li>
          <li><a href="#!" data-filter=".development">Development</a></li>
          <li><a href="#!" data-filter=".wordpress">Wordpress</a></li>
        </ul>

        <div className="row event_box">
          {[
            {
              img: "/images/course-01.jpg",
              category: "Webdesign",
              price: 160,
              author: "Stella Blair",
              title: "Learn Web Design",
              className: "design",
            },
            {
              img: "images/course-02.jpg",
              category: "Development",
              price: 340,
              author: "Cindy Walker",
              title: "Web Development Tips",
              className: "development",
            },
            {
              img: "images/course-03.jpg",
              category: "Wordpress",
              price: 640,
              author: "David Hutson",
              title: "Latest Web Trends",
              className: "design wordpress",
            },
            {
              img: "images/course-04.jpg",
              category: "Development",
              price: 450,
              author: "Stella Blair",
              title: "Online Learning Steps",
              className: "development",
            },
            {
              img: "images/course-05.jpg",
              category: "Wordpress",
              price: 320,
              author: "Sophia Rose",
              title: "Be a WordPress Master",
              className: "wordpress development",
            },
            {
              img: "images/course-06.jpg",
              category: "Webdesign",
              price: 240,
              author: "David Hutson",
              title: "Full Stack Developer",
              className: "wordpress design",
            },
          ].map((course, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer ${course.className}`}
            >
              <div className="events_item">
                <div className="thumb">
                  <a href="#"><img src={`${course.img}`} alt="" /></a>
                  <span className="category">{course.category}</span>
                  <span className="price">
                    <h6><em>$</em>{course.price}</h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">{course.author}</span>
                  <h4>{course.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
