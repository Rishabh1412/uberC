import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='h-screen bg-center bg-cover bg-[url("/freepik__rich-textured-brushstrokes-with-deep-colors-and-a-__2954.jpeg")] flex pt-8 justify-between flex-col w-full'>
        <img
          className='w-20 ml-8'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'
          alt='Uber Logo'
        />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
          <Link to='/login'><button className='w-full bg-black text-white py-3 rounded-md mt-5'>Continue</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
