import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from "../Loader/Loader"
import Error from "../Error/Error"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import { fetchImages } from "../../imagesApi"
import { useState, useEffect } from "react"
import ImageModal from "../ImageModal/ImageModal"
import { Image } from "../../types"

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

function App() {

  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [image, setImage] = useState();
  const [showBtn, setShowBtn] = useState<boolean>(false);

   
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(img):void{
  //     if (e.target.nodeName !== 'IMG') {
  //   return;
  // }

    setIsOpen(true);
    // e.preventDefault();
    setImage(img) 
    console.log(image)
  }


  function closeModal(e) {
    e.preventDefault();
      setIsOpen(false);
    
  }

  const handleSearch = (newQuery) => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  }

  const handleLoadMore = () => {
    setPage(page+1)
  }

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages<T>() :Promise<void> {
      try {
        setError(false);
      setLoading(true);
        const data = await fetchImages(query, page); 
                setShowBtn(data.total_pages > page ? true : false)
      
        setImages((prevImages) => { return [...prevImages, ...data.results] });

    } catch (error) {
      setError(true);
    }
    finally {
        setLoading(false);
             }
    }
    getImages()

  }, [query, page]) 

    return (
      <div> 
        <SearchBar handleSearch={handleSearch} />
        {error && <Error/>}
        {loading && <Loader/>}
        {images.length > 0 && <ImageGallery images={images} openModal={openModal} closeModal={ closeModal} modalIsOpen={modalIsOpen}/>}
        <ImageModal
      
          openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal} image={image} customStyles={ customStyles} />
        {images.length > 0 && !loading &&
          showBtn &&
          <LoadMoreBtn onClick={handleLoadMore} />}
      </div>
    )
  
}

    export default App