import ImageCard from "../ImageCard/ImageCard";
import { Image } from '../../types';

interface ImageGalleryProps {
  imagesSet: Image[];
  openModal: (fullImg: string, alt: string) => void;
}

export default function ImageGallery({ imagesSet, openModal }: ImageGalleryProps) {
    return (
        <ul className="imgGallery" >
	{imagesSet.map((image)=>(<li key={image.id}>
<ImageCard image={image} onClick={openModal}/>
	</li>))}
	
</ul>
    )
}