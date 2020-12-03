import React from 'react';
import { Link } from 'react-router-dom';

const GetAll = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Get all users</h1>
          <p className='lead'>Catch them all</p>
          <div className='buttons'>
            <Link to='GetAllUsers' className='btn btn-primary'>
              Get users!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAll;
