import React from 'react'
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className='loader'>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <span>Loading...</span>
            </div>
        </div>
    )
}

export default Spinner