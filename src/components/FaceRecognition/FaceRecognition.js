import React from 'react';
import './Recognition.css';

const FaceRecognition = ({ imageURL }) => {
    return (
        <div className="center ma">
            <div className="image-holder">
                <img
                    src={imageURL}
                    alt="sent by user" />
            </div>
        </div>
    )
}

export default FaceRecognition;