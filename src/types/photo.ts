export interface PhotoPropsUrls {
  raw: string,
  full: string,
  regular: string,
  small: string,
  thumb: string,
  small_s3: string
}

export interface PhotoPropsLinks {
  self: string,
  html: string,
  download: string,
  download_location: string
}

export interface PhotoProps {
  id: string,
  slug: string,
  created_at: string,
  updated_at: string,
  promoted_at: string,
  width: number,
  height: number,
  color: string,
  blur_hash: string,
  description: string,
  alt_description: string,
  breadcrumbs: [],
  urls: PhotoPropsUrls,
  links: PhotoPropsLinks,
  likes: number,
  liked_by_user: boolean,
  current_user_collections: [],
}