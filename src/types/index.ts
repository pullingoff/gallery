export interface IPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  description: string | null;
  alt_description: string | null;
  urls: IUrls;
  user: IAuthor;
}

type IUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

interface IAuthor {
  id: string;
  name: string;
  portfolio_url: string;
  profile_image: any;
}

export interface IImageListData {
  totalImgCnt: number; // 총 사진 수
  eachPageImgCnt: number; // 한 페이지 당 사진 수
  results: IPhoto[];
}

export interface ICollection {
  id: string;
  title: string;
  links: {
    photos: string;
  };
  preview_photos: {
    urls: {
      regular: string;
    };
  }[];
  tags: [{ title: string }];
  total_photos: number;
  user: {
    name: string;
  };
}
