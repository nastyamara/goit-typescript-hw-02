import Modal from 'react-modal';



Modal.setAppElement('#root');

interface ImageModalProps {
  modalIsOpen: boolean;
  image: string | undefined;
  alt: string;
  closeModal: () => void;
}



export default function ImageModal({ modalIsOpen,  image, alt, closeModal}: ImageModalProps) {

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
    padding: '0',
    border: 'none',
    borderRadius: '0',
   
  },
  overlay: {
    backgroundColor: 'rgb(1, 1, 1, 0.9)',
       
   } 
};


  return (<Modal
      
        isOpen={modalIsOpen}
      onRequestClose={closeModal}
    
        style={customStyles}
    >

   
    <img className='modalImg' src={image}alt={alt} /></Modal>)
     
}