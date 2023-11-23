"use client";

import NaviBar from '@components/naviBar';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchResult from '@components/searchResult';
import { FormEvent, useState } from 'react';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { name: { value } } = event.target as any;
    const res = await fetch(`https://api.unsplash.com/photos?client_id=YNJBYYPARthN63fN8l4D__fHnsHE8GXcQjpJVvUUQ_A&page=1&per_page=20&query=${value}`);
    console.log(res);
    setSearchResults(await res.json());;
  };

  return (
    <>
      <NaviBar />
      <div className='main-banner'>
        <Image
          src='https://images.unsplash.com/photo-1700374610029-6f09b715fc80?auto=format&auto=compress&dpr=2&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D'
          fill
          sizes=''
          alt=''
        />
        <div className='main-banner__innerBox'>
          <h2>Will Photo</h2>
          <p>
            인터넷의 시각 자료 출처입니다.<br/>
            모든 지역에 있는 크리에이터들의 지원을 받습니다.
          </p>
          <form onSubmit={onSubmit}>
            <div className='main-banner__search'>
              <input type="text" name="name" placeholder='고해상도 이미지 검색' />
              <button type='submit' className='main-banner__search-submit'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span className="hidden">검색</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='box'>
        <div className='inner-wrap'>
          <SearchResult />
          {/* <SearchResult photos={searchResults} /> */}
        </div>
      </div>
    </>
  )
}
