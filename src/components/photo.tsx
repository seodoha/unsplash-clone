import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { PhotoProps } from '../types/photo';

export default function Photo(props: { photo: PhotoProps }) {
  const { urls: { small }, alt_description } = props.photo;

  return (
    <div className='photo-box'>
      <Image
        src= {small}
        fill
        sizes=''
        alt={alt_description}
      />
      <button>
        <FontAwesomeIcon icon={faHeart} />
        <span className="hidden">북마크</span>
      </button>
    </div>
  )
}