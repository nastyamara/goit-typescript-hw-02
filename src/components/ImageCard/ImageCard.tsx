interface ImageCardProps {
  image: {
    urls: {
      small: string;
      regular: string;
    };
    description: string;
  };
  onClick: (fullImg: string, alt: string) => void;
}


export default function ImageCard({ image: {urls, description}, onClick }: ImageCardProps) {
    return (
     <div>
            <img onClick={() => onClick(urls.regular, description)}
                className='galleryImg'
                src={urls.small}
                alt={description}
                 />
		</div>
    )
}