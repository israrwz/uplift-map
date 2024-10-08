import { json } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
	const url = `./districts`;
	const res = await fetch(url);
	const map = await fetch('/provinces-simplified');

	//		const stats = await fetch('/stats.json');
	const stats = await fetch('https://nodered.speensoft.net/get-provinces-stats');
	// const map = await fetch(
	// 	'https://raw.githubusercontent.com/Sarah-W/svelte-geo/main/src/_geojson/rto2017_simplified_3dp.geojson.json'
	// );

	if (res.ok && map.ok) {
		let data = await res.json();
		let map_data = await map.json();
		let stats_json = await stats.json();
		// console.log(data.body.provinces['AF21']);
		let stats_data = {};
		stats_json.forEach((itm) => {
			stats_data[itm.max.substring(0, 4)] = itm;
		});
		return {
			districts: data.body.districts,
			provinces: data.body.provinces,
			map: map_data,
			stats: stats_data
		};
	}

	return {
		status: res.status,
		error: new Error(`Could not load ${url}`)
	};
}
