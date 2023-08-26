import { API_URL, CACHE_CONTROL } from '$env/static/private'
import groupBy from 'lodash/groupBy';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, setHeaders }) {
  const response = await fetch(API_URL + '/teams');
  const teams = await response.json();
  const teamsByDivision = groupBy(teams, 'division_id');

  const divisions = [
    {id: 2, name: 'Atlantic'},
    {id: 1, name: 'Metropolitan'},
    {id: 3, name: 'Central'},
    {id: 4, name: 'Pacific'}
  ];

  console.log(divisions);
  console.log(teamsByDivision);

  setHeaders({
    'cache-control': CACHE_CONTROL
  });

  return {
    divisions,
    teams,
    teamsByDivision
  };
}
