import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column ">
            <h1 className='text-center'>Organize your <br /> work and life , finally</h1>
            <p className='mt-3'>Todo App is a simple and easy to use todo list application <br /> that helps you manage your tasks and stay organized.</p>
            <button className='home-btn p-2'>Make Todo List</button>
        </div>
    </div>
  )
}

export default Home
