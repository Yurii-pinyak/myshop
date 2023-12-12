import '../../scss/Card.scss'
import React, {useState} from 'react'

import ModalView from './ModalView'
import ModalViewEdit from './ModalViewEdit'
import addBtn from '../../assets/add-btn.png'
import ProductView from '../Card/ProductView'


const Card = (props) => {

const [productView, setProductView] = useState(false)
const [isOpen, setIsOpen] = useState(false)    
const [editOpen, setEditOpen] = useState(false)

const onClickOpenView = () => {
  setProductView(true)
} 

const onClickEditInside = () => {
  setProductView(false);
  setEditOpen(true);
}

const onClickEdit = () => {
    setEditOpen(true)
}
const closeFunc = () => {
    setIsOpen(false);
    setEditOpen(false);
    setProductView(false)
  };
  
  const onClickAdd = () => {
    setIsOpen(true);
    
  };

  const product = {
    img: props.img,
    price: props.price,
    text: props.text,
    taste: props.taste,
    weight: props.weight,
    

  };
  
  return (
    <>
      {productView && <ProductView closeFunc={closeFunc} index={props.index} uniqueId={props.uniqueId} product={product} onClickEditInside={onClickEditInside} />}
      {editOpen && <ModalViewEdit index={props.index} uniqueId={props.uniqueId} closeFunc={closeFunc} />}
      {isOpen && <ModalView index={props.index} closeFunc={closeFunc} />}
        <div className='card-wrap'>
        <div className="card-container">
          <img className='card-img' src={props.img} alt='' onClick={onClickOpenView}></img>
          <span className='pizza-name'>{props.text}</span>
          
          <div className='card-buttons'>
            <span>{props.price}$</span>
           
               
            
            <div>
            
            
                <img className='btn-add' alt='' src={addBtn}  onClick={onClickAdd}></img>

            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default Card;
