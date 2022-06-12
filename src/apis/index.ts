import axios from 'axios';
import { MAX_SCROLL_IMG_CNT } from '../components/MainContentScroll';
import { IImageListData } from '../types';

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const headers = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};

export const getImages = async (query?: string, page?: number) => {
  const isSearching: boolean = (query && query.length > 0) || false;
  // 검색어 유무에 따라 요청 url을 바꿈.
  const get_url = isSearching
    ? 'https://api.unsplash.com/search/photos'
    : 'https://api.unsplash.com/photos';
  const params = {
    ...(query && { query: query }), // 검색어
    ...(page && { page: page }),
  };
  try {
    const { data } = await axios.get(get_url, {
      headers,
      params,
    });

    // 검색 시와 그냥 최신순으로 가져올때 응답 json의 형태가 다르므로 같게 해줘야함
    const resp: IImageListData = {
      totalImgCnt: isSearching ? data.total : MAX_SCROLL_IMG_CNT,
      eachPageImgCnt: isSearching ? data.results.length : data.length,
      results: isSearching ? data.results : data,
    };
    return resp;
  } catch (e) {
    console.log(e);
  }
};

export const getImage = async (imgId: string) => {
  try {
    // 이미지 상세 정보 가져옴
    const { data: imgData } = await axios.get(
      `https://api.unsplash.com/photos/${imgId}`,
      { headers }
    );
    // 이미지 통계 정보 가져옴
    const { data: statData } = await axios.get(
      `https://api.unsplash.com/photos/${imgId}/statistics`,
      { headers }
    );

    return {
      author: imgData.user.name,
      username: imgData.user.username,
      imgUrl: imgData.urls.full,
      cameraMake: imgData.exif.make,
      cameraModel: imgData.exif.model,
      focalLength: imgData.exif.focal_length,
      aperture: imgData.exif.aperture,
      iso: imgData.exif.iso,
      dimensions: `${imgData.width} x ${imgData.height}`,
      collections: imgData.related_collections.results,
      views: statData.views.total,
      downloads: statData.downloads.total,
    };
  } catch (e) {
    console.log(e);
  }
};
