import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from '../../assets/images/brain-icon.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                {/* placeholder OR attribute to https://www.iconfinder.com/icons/1291783/android_artificial_artificial_intelligence_brain_hemisphere_intelligence_smart_icon*/}
                <div className="Tilt-inner"> <img src={brain} alt="logo"/> </div> 
            </Tilt>
        </div>
    )
}

export default Logo;