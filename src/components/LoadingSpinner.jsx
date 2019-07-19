import React from 'react'
import '../css/starwars.css'

    const LoadSpinner = () => (
        <div className="text-center spinner">
            <div className="lds-dual-ring"></div>
            <p>Loading Planets...</p>
        </div>
    );

export default LoadSpinner;