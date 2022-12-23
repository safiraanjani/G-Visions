import React from 'react';
import '../styles/project.css';
import Slider from 'react-slick';
import "../styles/slick.css";
import "../styles/slick-theme.css";


export default function autoplay() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div id='project'>
      <div className="wrapper-project">
        <hr/>
          Project
        <hr/>
      </div>

      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}