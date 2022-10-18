import React from 'react';
import Modal from 'react-modal';
 function ProductModal(props) {
    const {prod , closeModal}=props
  return (
    <Modal isOpen={prod} onRequestClose={closeModal}>
          <span className='close-icon' onClick={closeModal}>&times;</span>
          <div className='product-info'>
            <img src={prod.imageUrl} alt={prod.title}></img>
            <p>{prod.title}</p>
            <p>{prod.price}$</p>
          </div>
    </Modal>
  )
}
export default ProductModal;