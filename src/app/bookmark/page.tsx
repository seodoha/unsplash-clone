import Photo from '@components/photo';
import Link from 'next/link';
import { PhotoProps } from '../../types/photo';

const getPhotos = async () => {
  const res = await fetch('https://api.unsplash.com/photos?client_id=YNJBYYPARthN63fN8l4D__fHnsHE8GXcQjpJVvUUQ_A&page=1&per_page=20');
  return res.json();
};

export default async function BookMark() {
  const photos = await getPhotos();

  return (
    <div className='sub-layout'>
      <div className='box'>
        <ul className='person-nav'>
          <li><Link href="/a">사진</Link></li>
          <li><Link href="/a" className='active'>좋아요</Link></li>
          <li><Link href="/a">컬렉션</Link></li>
          <li><Link href="/a">통계</Link></li>
        </ul>
          <div className='inner-wrap'>
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
          </div>
        </div>
    </div>
  )
}
