import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../styles/custom-footer.css'

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='custom-footer'>
      <MDBContainer className='container-footer'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Sign up for our newsletter</h5>

            <section className=''>
              <form action=''>
                <MDBRow className='d-flex justify-content-center'>

                  <MDBRow md='5' start>
                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                  </MDBRow>

                  <MDBRow md='5' size="auto">
                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                      Subscribe
                    </MDBBtn>
                  </MDBRow>
                </MDBRow>
              </form>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright -
        <a className='text-white' href='https://mdbootstrap.com/'>
        &nbsp;GVisions 2022
        </a>
      </div>
    </MDBFooter>
  );
}