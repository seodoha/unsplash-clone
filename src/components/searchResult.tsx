import Link from 'next/link';
import Photo from '@components/photo';
import { PhotoProps } from '../types/photo';

const getPhotos = async () => {
  const res = await fetch('https://api.unsplash.com/photos?client_id=YNJBYYPARthN63fN8l4D__fHnsHE8GXcQjpJVvUUQ_A&page=1&per_page=20');
  return res.json();
};

export default async function SearchResult() {
  const photos = await getPhotos();

  return (
    <ul className='photo-list'>
      {
        photos.map((item: PhotoProps) => (
          <li key={item.id}>
            <Link href={`/photo/${item.id}`}>
              <Photo photo={item} />
            </Link>
          </li>
        ))
      }
    </ul>
  )
}