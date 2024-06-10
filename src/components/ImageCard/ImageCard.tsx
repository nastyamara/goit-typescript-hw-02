export default function ImageCard({ image, openModal={openModal} }) {
    return (
     <div>
            <img onClick={openModal} className='galleryImg' src={image.urls.small}
                alt={image.alt_description} data-source={image.urls.regular} />
		</div>
    )
}