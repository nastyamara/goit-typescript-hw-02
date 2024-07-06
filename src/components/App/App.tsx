import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from "../Loader/Loader"
import Error from "../Error/Error"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import { fetchImages } from "../../imagesApi"
import { useState, useEffect} from "react"
import ImageModal from "../ImageModal/ImageModal"
import { Image } from "../../types"


function App() {

  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [image, setImage] = useState<string>();
  const [description, setDescription] = useState<string>("");
  // const [showBtn, setShowBtn] = useState<boolean>(false);

   
  const [modalIsOpen, setIsOpen] = useState(false);



  function openModal(imageUrl: string, imageDesc: string) {


    setIsOpen(true);

    setImage(imageUrl);
    setDescription(imageDesc);
  }


    const closeModal = (): void => {
    setImage("");
    setDescription("");
    setIsOpen(false);
  };



  const handleSearch = (newQuery: string) => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  }

  const handleLoadMore = ():void => {
    setPage(page+1)
  }

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages() :Promise<void> {
      try {
        setError(false);
      setLoading(true);
        const data = await fetchImages(query, page); 
                // setShowBtn(data.total_pages > page ? true : false)
      
        setImages((prevImages) => { return [...prevImages, ...data] });

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
        {images.length > 0 && <ImageGallery imagesSet={images} openModal={openModal} />}
        <ImageModal
      
           modalIsOpen={modalIsOpen}
        image={image}
        alt={description}
        closeModal={closeModal}/>
        {images.length > 0 && !loading &&
          // showBtn &&
          <LoadMoreBtn onClick={handleLoadMore} />}
      </div>
    )
  
}

    export default App