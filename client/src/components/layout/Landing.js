import React from 'react';
import { Link } from 'react-router-dom';
import APIservice from '../../utils/service/APIservice';

const getDataFromBackend = async () => {
  try {
    const response = await APIservice.getAllUsers();
    setData(response.data);
  } catch (error) {
    console.log(error);
  }
};

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Hungry - Christmas edition</h1>
          <p className='lead'>What do you want to eat today?</p>
          <div className='buttons'>
            <Link to='register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='login' className='btn btn-light'>
              Login
            </Link>
            <button onClick={() => getDataFromBackend()}>get data</button>
            {data.map((x) => (
              <p classname='lead'>{x.username}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
