'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';

function PhotoPage() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  console.warn('router:', router);
  console.warn('pathname', pathname);
  console.warn('params:', params);
  return <div>{params && params.id && params.id}</div>;
}

export default PhotoPage;
