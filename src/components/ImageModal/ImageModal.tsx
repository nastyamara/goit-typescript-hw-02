import Modal from 'react-modal';



Modal.setAppElement('#root');



export default function ImageModal({ modalIsOpen,  closeModal, image, customStyles}) {



  return (<Modal
      
        isOpen={modalIsOpen}
      onRequestClose={closeModal}
    
        style={customStyles}
    >

   
    <img className='modalImg' src={image }alt="" /></Modal>)
     
}