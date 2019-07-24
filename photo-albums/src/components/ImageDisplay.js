import React from 'react'; 
import './ImageDisplay.css'; 
import ImageCard from './ImageCard'; 

/*
This functional component takes an array of image file dataURLS and places them into a set of image tags 
*/ 

const ImageDisplay = (props) => {
    console.log(props.pictureSource)
    if(props.pictureSource.length === 0 ) {
        return <div></div>; 
    }

    const imageList = props.pictureSource.map((source, index) => {
        return <ImageCard key={index} src={source} /> 
    }); 


    return <div className="image-list"> {imageList}</div> ;
    
}; 

export default ImageDisplay; 