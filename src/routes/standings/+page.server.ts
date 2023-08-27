import { API_URL } from '$env/static/private'
import { getCacheControl } from '$lib';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, setHeaders }) {
  const response = await fetch(API_URL + '/standings');
  const data = await response.json();

  setHeaders({
    'cache-control': getCacheControl()
  });

  return {
    data
  };
}
