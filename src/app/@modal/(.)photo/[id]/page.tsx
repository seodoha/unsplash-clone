'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';
import Modal from '@components/common/Modal';

function PhotoModal() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  console.warn('router:', router);
  console.warn('pathname', pathname);
  console.warn('params:', params);
  return (
    <Modal>
      <div className="modal__content">{params && params.id && params.id}</div>
    </Modal>
  );
}

export default PhotoModal;
