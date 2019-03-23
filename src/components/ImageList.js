import React from 'react';
import './ImageGrid.css';
import  ImageCard from './ImageCard';

 const ImageList = (props) =>{

    console.log("Image",props.images)

    const images = props.images.map((image) =>
    {
        return <ImageCard key={image.id} image={image} />
        
    })
    
    return <div className="image-list"> {images} </div>
}

export default  ImageList