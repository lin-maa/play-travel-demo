import axios from './http-interceptor';
const { REACT_APP_UNSPLASH_API_URL } = process.env;

export function fetchItems(searchValue = ''): Promise<ItemsResponse> {
  let url =
    REACT_APP_UNSPLASH_API_URL +
    '/search/photos?per_page=15&query=' +
    searchValue;
  return axios.get(url);
}

interface ItemsResponse {
  data: {
    results: Array<{
      urls: {
        regular: string;
      };
      tags: Array<{
        type: string;
        title: string;
      }>;
    }>;
  };
}
