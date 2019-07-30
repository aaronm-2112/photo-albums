import React from 'react'; 
import './ImageDisplay.css'; 
import ImageCard from './ImageCard'; 
import unsplash from '../unsplash.jpg';

/*
This functional component takes an array of image file dataURLS and places them into a set of image tags 
*/ 

const ImageDisplay = (props) => {
    //console.log(props.pictureSource)
    if(props.pictureSource.pictureSourceArray.length === 0 ) {
        return (
                <div className="initial_card">
                    <p>Make memories. Save them to the cloud. Upload to begin.</p>
                    <img src={unsplash} alt="Stock" className="stock_image"  />
                </div>
      );
    }

    const imageList = props.pictureSource.pictureSourceArray.map((source, index) => {
        return <ImageCard key={index} src={source} name={props.pictureSource.pictureNameArray[index]} />;
    });

    return <div className="image-list"> {imageList}</div> ;

}; 

export default ImageDisplay; 