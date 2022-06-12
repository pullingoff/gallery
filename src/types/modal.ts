export interface IModalInfo {
  blurhash?: string;
  description?: string;
  author?: string;
  username?: string;
  imgUrl?: {
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  views?: number;
  downloads?: number;
  cameraMake?: string;
  cameraModel?: string;
  focalLength?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: string;
  dimensions?: string;
  collections?: [];
}
