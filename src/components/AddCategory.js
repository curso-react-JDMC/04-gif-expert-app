import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories })=>{
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(inputValue.trim().length > 2){
      setCategories( c => [ inputValue,...c] );
      setInputValue('');
    }

 }
  return (
    <>
      <form onSubmit = { handleSubmit }>
        <h1>{ inputValue }</h1>
        <input
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
        />
      </form>

    </>
  );
}

AddCategory.defaultProps = {
};

AddCategory.propTypes = {

  setCategories: PropTypes.func.isRequired
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}