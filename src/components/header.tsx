import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function Header() {
  return (
    <header>
      <h1 className='header__logo'>
        <Link href='/' title='윌로그'>
          <Image
            src='/logo_black.png'
            width={103}
            height={30}
            alt='윌로그 로고'
          />
        </Link>
      </h1>
      <div className='header__util'>
        <button className='btn ty01' title='사진 제출'>사진 제출</button>
        <Link href='/bookmark' className='btn ty02' title='북마크 화면 바로가기'>
          북마크
          <FontAwesomeIcon icon={faHeart} style={{marginLeft: '0.5rem'}} />
        </Link>
        <strong className='header__util__user'>
          <span className='header__util__user_nick'>Evie</span>
          <span className='header__util__user_email'>evie@wilog.io</span>
        </strong>
      </div>
    </header>
  )
}