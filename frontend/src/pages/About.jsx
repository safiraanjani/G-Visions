import React from 'react'
import '../styles/about.scss';
import { Link } from 'react-router-dom';

export default function About() {
    const about = [
        {
        id: 1,
        name : "Novia Ramadhani",
        desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img : 'https://mdbootstrap.com/img/new/standard/city/047.webp'
        },
        {
          id: 2,
          name : "Putri Santika Mayangsari",
          desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          img : 'https://mdbootstrap.com/img/new/standard/city/047.webp'
        },
        {
          id: 3,
          name : "Safira Anjani",
          desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          img : 'https://mdbootstrap.com/img/new/standard/city/047.webp'
        },
        {
          id: 4,
          name : "Tiara Puspita",
          desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          img : 'https://mdbootstrap.com/img/new/standard/city/047.webp'
        }
    ];
  return (
    <div id='about' className='About'>
      <div className="wrapper-about">
        <hr/>
          About Us
        <hr/>
      </div>
      {about.map((about)=>(
        <div className="container-about">
          <div className="member" key={about.id}>
            <div className="img">
              <img className='image' src={about.img} alt='' />
            </div>
            <div className="content">
              <div className="nama">
                <Link to={`/member/${about.id}`}>{about.name}</Link>
              </div>
              <div className="exp">
                Programmer | Web Developer | Copy Writer | dll
              </div>
              <div className="desc">
                {about.desc}
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
