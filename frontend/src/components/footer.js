import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../styles/custom-footer.css';
import { Icon } from '@iconify/react';

import {
    MDBFooter,
    MDBContainer,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='custom-footer'>
      <MDBContainer className='p-4 '>
        <MDBRow>
          <MDBCol lg="4" md="12" className='mb-4 mb-md-0 pl-4'>
            <h5 className='text-uppercase text-bold medium'>Motivation</h5>
            <p>
              If you want to be bloomed,  you have to be be that person who decide that 
            </p>
            <div className='sosial-container'>
              <a className='sosmed'><Icon icon="ph:instagram-logo-fill" /></a>
              <a href="" className='sosmed'><Icon icon="mdi:github" /></a>
              <a href="" className='sosmed'><Icon icon="mdi:youtube" /></a>
            </div>
          </MDBCol>

          <MDBCol lg="4" md="6" className='mb-4 mb-md-0 contact'>
            <ul className='list-unstyled mb-0 ml-4'>
              <li>
                <a href='#!' className='text-white contact'>
                 <i><Icon icon="material-symbols:home-pin" /></i> Depok, Jawa Barat
                </a>
              </li>
              <li>
                <a href='#!' className='text-white contact'>
                  <i><Icon icon="mdi:email-arrow-left-outline" /></i> unitv.tr@gmail.com
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="4" md="6" className='mb-4 mb-md-0'>
            <div className='text-uppercase mb-2 text-bold medium'>Sign up for our newsletter</div>

            <section className=''>
              <form action=''>
                <MDBRow className='d-flex justify-content-center'>

                  <MDBRow md='5' start>
                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                  </MDBRow>
                  <MDBRow mt='3' md='5' size="auto">
                  <MDBBtn color='light' type='submit' className='mb-4 mt-2 rounded'>
                    Subscribe
                  </MDBBtn>
                  </MDBRow>
                </MDBRow>
              </form>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className='text-center p-3'>
          © 2022 Copyright -
          <a className='text-white' href='https://mdbootstrap.com/'>
          &nbsp;GVisions 2022
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}