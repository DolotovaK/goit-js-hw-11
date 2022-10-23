const axios = require('axios').default;

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30769395-e644794823576604d31051598';

// export async function fetchPhotos(searchValue) {
//   return await axios
//     .get(
//       `${BASE_URL}?key=${KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true`
//     )
//     .then(async response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return await response.data;
//     })
//     .catch(err => console.log(err));
// }

export async function fetchPhotos(searchValue, pageNumber) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageNumber}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
