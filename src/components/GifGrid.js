import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import 'animate.css';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([])

    // useEffect(()=>{
    //     getGifs(category).then(setImages)
    // }, [category])

    const {data: images, loading} = useFetchGifs(category); //custom hook
    
    
    return (
        <>
        <h3 className="grid-title animate__animated animate__rubberBand">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
        <div className="grid-items">
            
                {images.map(image =>(
                    <GifGridItem key={image.id} {...image}/>
                ))
                }
        </div>
        </>
  
    )
}
