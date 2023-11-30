import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const ErrorPage = () => {
    return (
        <div className='error-page-container'>
            <h2 id='errorheadingone'>404</h2>
            <h3 id='errorheadingtwo'>UH OH! You're lost.</h3>
            <p id='errorpara'>
                The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.
            </p>

            <NavLink to="/home">
            <button>GO BACK TO HOME</button>
            </NavLink>
        </div>
    )
}

export default ErrorPage;