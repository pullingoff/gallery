# 📸 GALLERY

[(클릭!) 갤러리 구경하러가기](https://pullingoff.github.io/gallery)  

## 기술

`React`, `TypeScript`, `Styled-components`, `REST API`

[Unsplash API](https://unsplash.com/documentation)를 사용해 만들어본 사진첩입니다.

### 기본 기능

- 최신 사진 목록을 가져오고, 검색어가 입력되면 검색 결과를 표시합니다.
- 사진은 원본 이미지 비율을 유지하며, 1~3열로 디바이스 크기에 따라 조절됩니다.
- 사진을 클릭하면 상세 정보가 담긴 모달창이 뜹니다.

### 그 외

- 이미지 최적화: 이미지에 `srcset` 속성을 두어 디바이스 크기에 적합한 모달 이미지가 뜹니다.
- API로 받은 사진의 `color` 값을 background로 하고, 밝기에 따라 작가의 이름이 하양 또는 검정색으로 보이도록 함
- `Scroll To Top` 버튼이 있어 사용자가 편하게 이용할 수 있습니다.
- `OpenGraph` 메타데이터를 넣어 앱을 공유할 때 더 예쁩니다✨.
- `Esc` key로 이미지 상세 모달을 열고 닫을 수 있습니다.
- Unsplash API 문서에서 사진 리스트 응답을 보낼때 기본값이 최신순(latest)임에도 중복된 id의 이미지를 보내는 경우가 있었습니다. 그래서 Lodash `uniqBy`로 id가 중복되는 이미지를 제거했습니다.

## 앞으로 개선할 부분

- API 에러가 나더라도 이미 보여주고 있는 사진들은 문제가 없는 경우가 많음. 이런 경우엔 에러를 어떻게 처리해야 맞나 고민입니다.
- 테스트 코드 작성
- Unsplash API에서 `blur_hash` 값을 응답으로 보내주는데 이 앱에서는 고정된 width, height을 사용하지 않고 있어 적용이 불가능했음. 반응형 앱에 사용가능한 img placeholder를 더 찾아봐야함.
- 이미지가 많은 웹앱이다보니 next-gen 포맷의 이미지를 쓰면 성능이 나아질 듯 함. 다만 unsplash api에서는 위 확장자의 이미지를 지원하지 않아 써드파티 라이브러리가 필요해보임.
- 크로스 브라우징
