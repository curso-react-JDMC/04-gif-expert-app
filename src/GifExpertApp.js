
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styles from './GifExpertApp.css';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ defaultCategories = [] }) => {
  // const categories = ['One Punch','Samurai X','Dragon Ball'];
  // const [categories, setCategories] = useState(['One Punch']);
  const [categories, setCategories] = useState(defaultCategories);

  /*   const handleAdd = ()=>{ */
  /* setCategories([...categories,'prueba']); */
  /* } */
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category} />
          ))
        }
      </ol>

    </>
  );
}

// <button onClick={ handleAdd }>Agregar</button>
GifExpertApp.defaultProps = {};

GifExpertApp.propTypes = {
};

export default GifExpertApp;
