import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  //console.log(loading);

  // getGifs();
  return (
    <>
      <h3 className="animate_animated animate_fadeIn">{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        <ol>
          {
            images.map((img) => (
              // <li key={ id }>{ title }</li>
              <GifGridItem key={img.id} {...img} />
            ))
          }
        </ol>
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
export default GifGrid;
