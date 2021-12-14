import React, {useState,useEffect} from 'react'
import {useFetchGifs} from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  
  const { data:images,loading } = useFetchGifs( category );
  console.log(loading);
  


  // getGifs();
  return (
    <>
      <h3>{ category }</h3>
      { loading && <p>Loading</p> }
      <div className="card-grid">
        <ol>
          {
            images.map( (img) =>(
              // <li key={ id }>{ title }</li>
                <GifGridItem  key={ img.id } { ...img }/>
            ) )
          }
        </ol>
      </div>
    </>
  )
}

export default GifGrid;
