import { API_URL, CACHE_CONTROL } from '$env/static/private'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, setHeaders }) {
  const response = await fetch(API_URL + '/standings');
  const data = await response.json();

  setHeaders({
    'cache-control': CACHE_CONTROL
  });

  return {
    data
  };
}
