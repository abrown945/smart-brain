import React from 'react';
import './Recognition.css';

const FaceRecognition = ({ imageURL, box }) => {
    return (
        <div className="center ma">
            <div className="image-holder">
                <img
                    id="input-image"
                    src={imageURL}
                    alt="" />
                <div 
                    className="bounding-box"
                    style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
                    >
                    </div>
            </div>
        </div>
    )
}

export default FaceRecognition;