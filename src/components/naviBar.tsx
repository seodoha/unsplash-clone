import Link from 'next/link';

const personNavi = [
  {name: '보도/편집 전용', active: true},
  {name: '팔로잉', active: false},
  {name: 'Will Photo+', active: false},
  {name: '배경 화면', active: false},
  {name: '3D 렌더링', active: false},
  {name: '건축 및 인테리어', active: false},
  {name: '자연', active: false},
];

export default function NaviBar() {
  return (
    <nav className='nav'>
      <ul>
        {
          personNavi.map(menu =>
          (
            <li key={menu.name}>
              <Link href='/a' className={menu.active ? 'active' : ''}>{menu.name}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}