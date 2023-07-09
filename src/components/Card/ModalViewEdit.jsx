import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editProduct,} from '../../redux/slices/productListSlice';

import '../../scss/ModalView.scss';

const ModalViewEdit = (props) => {
  const dispatch = useDispatch();

  

 

  const [formData, setFormData] = useState({
    uniqueId: props.uniqueId,
    id: ['0','1'],
    img: '',
    name: '',
    taste: ['firstTaste','secondTaste'],
    weight: ['firstWeight','secondWeight'],
    popularity: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'weight') {
      const weightArray = value.split(',');
      setFormData((prevData) => ({
        ...prevData,
        [name]: weightArray,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const field in formData) {
      if (formData[field] === '') {
        alert('Please fill in all fields');
        return;
      }
    }
    console.log(formData)
    dispatch(editProduct(formData));
  };

  const closePopup = () => {
    const discardChanges = window.confirm('Do you want to discard changes?');
    if (discardChanges) {
      props.closeFunc();
    }
  };

  return (
    <div className="card-modal-view">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />

        <label htmlFor="img">Image URL:</label>
        <input type="text" id="img" name="img" value={formData.img} onChange={handleChange} />

        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="taste">Taste:</label>
        <input type="text" id="taste" name="taste" value={formData.taste} onChange={handleChange} />

        <label htmlFor="weight">Weight:</label>
        <input type="text" id="weight" name="weight" value={formData.weight} onChange={handleChange} />

        <label htmlFor="popularity">Popularity:</label>
        <input
          type="number"
          id="popularity"
          name="popularity"
          value={formData.popularity}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />

        <button type="submit">Submit</button>
        <button onClick={closePopup}>Close</button>
      </form>
    </div>
  );
};

export default ModalViewEdit;
