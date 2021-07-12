import React from 'react'
// import { getGifts } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGifs( category );
    // console.log(data); 


    return (
            <>
                <h3>{ category }</h3>   

                { loading && <p>loading</p> }

                <div className="card-grid">
                    {
                        images.map( img  => (
                        <GifGridItem 
                                key = {img.id}
                                { ...img }
                            />
                        ))
                    }   
                </div>
            </>
    )
}

export default GifGrid
