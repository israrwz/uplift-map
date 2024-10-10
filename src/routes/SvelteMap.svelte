<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import bbox from 'geojson-bbox';
	import Legend from './Legend.svelte';
	import 'leaflet/dist/leaflet.css';

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');
			const initzoom = await import('$lib/smoothzoom.js');
			initzoom.default(leaflet);
			const map = leaflet
				.map('map', {
					scrollWheelZoom: false,
					smoothWheelZoom: true,
					smoothSensitivity: 1,
					zoomSnap: 0.1,
					zoomDelta: 1
				})
				.setView([34, 69], 7);
			map.scrollWheelZoom = true;
			let myStyle = {
				fillColor: '#fce10b',
				// fillColor: '#fff1dd',
				weight: 0.3,
				fillOpacity: 1
			};

			leaflet.geoJson(data.body, { style: myStyle, onEachFeature: onFeature }).addTo(map);
			// window.map = map;
			window.stats = stats;

			total_individuals_all = Object.values(stats).reduce((acc, v) => acc + v.individuals, 0);
			total_families_all = Object.values(stats).reduce((acc, v) => acc + v.families, 0);
			total_families = total_families_all;
			total_individuals = total_individuals_all;

			let individuals = Object.values(stats)
				.map((itm) => itm.families)
				.sort((a, b) => a - b);
			let min = individuals[0];
			let max = individuals[individuals.length - 1];
			let count = individuals.length;
			map.eachLayer((layer) => {
				console.log(layer._leaflet_id);
				if (layer.feature && layer.feature.properties)
					if (stats[layer.feature.properties.ADM1_PCODE]) {
						let _individs = stats[layer.feature.properties.ADM1_PCODE].families;
						function getIndexBetween0And31(n, min, max) {
							// Ensure the number is within the range
							let number = Math.max(min, Math.min(max, n));

							// Handle edge cases
							if (number === min) return 0;
							if (number === max) return 31;

							// Apply logarithmic scaling
							const logMin = Math.log(min + 1); // Add 1 to handle case where min might be 0
							const logMax = Math.log(max + 1);
							const logValue = Math.log(number + 1);

							// Calculate the percentage on the log scale
							const percentage = (logValue - logMin) / (logMax - logMin);

							// Map the percentage to a number between 0 and 31
							return Math.round(percentage * 31);
						}
						let _num = getIndexBetween0And31(_individs, min, max);
						let _color = colors[_num];
						_layers[layer._leaflet_id] = _color;
						// if (!_color) _color = colors[31];
						// let _color = colors[Math.round(range(min, max, 1, 8, _individs))];
						// console.log(_individs, _color);
						layer.setStyle({ fillColor: _color, fillOpacity: 1 });
						// let center = getCentroid2(layer.feature.geometry.coordinates[0]);

						// var myIcon = leaflet.icon({
						// 	iconUrl: 'round-star.png',
						// 	iconSize: [18, 18]
						// });
						// leaflet.marker([center[1], center[0]], { icon: myIcon }).addTo(map);
					}
			});

			let extent = bbox(data.body);

			// let bounds = leaflet.latLngBounds();
			// bounds.extend(leaflet.latLng(extent[0], extent[1]));
			// bounds.extend(leaflet.latLng(extent[2], extent[3]));

			let corner1 = leaflet.latLng(extent[1], extent[0]),
				corner2 = leaflet.latLng(extent[3], extent[2]),
				bounds = leaflet.latLngBounds(corner1, corner2);

			let _opts = { paddingBottomRight: [300, 0] };
			if (width < 600) _opts = {};
			map.fitBounds(bounds, _opts);

			// window.map = map;

			// Advent of Code Code: 2095695-20220205-c25a5156
		}
	});
	//jmp
	const onFeature = (feature, layer) => {
		const clicked = (feature, layer) => {
			layer.setStyle({
				fillColor: '#fbe1cb',

				fillOpacity: 0.5
				// weight: 9
			});
			console.log(layer.options);

			let p_code = feature.properties.ADM1_PCODE;
			province = provinces[p_code].join(' - ');

			let popupStr = `<h3>${province}</h3>`;
			let has_stats = stats[layer.feature.properties.ADM1_PCODE];
			if (has_stats) {
				total_families = stats[layer.feature.properties.ADM1_PCODE].families;
				total_individuals = stats[layer.feature.properties.ADM1_PCODE].individuals;
				red = true;
				// popupStr += `<h3>Distributions:</h3>
				//             <h4>Total families: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>${total_families}</b></h4>
				//             <h4>Total individuals: &nbsp;&nbsp;&nbsp;<b>${total_individuals}</b></h4>`;
			} else {
				total_families = null;
				total_individuals = null;
				red = false;
			}
			// if (has_stats)
			//			layer.bindTooltip(popupStr, { sticky: true, className: 'popup', opacity: 0.95 }).openTooltip();
		};

		layer.on('mouseout', function () {
			this.setStyle({
				fillColor: _layers[this._leaflet_id],
				fillOpacity: 1
				// weight: 0.3
			});
			province = 'Afghanistan - افغانستان';
			total_families = total_families_all;
			total_individuals = total_individuals_all;
			red = true;
		});

		layer.on('mouseover', () => clicked(feature, layer));
		layer.on('click', () => clicked(feature, layer));
	};
	//jmp

	// let colors = [
	// 	'#88c8f7',
	// 	// '#74c1f5',
	// 	'#61b9f4',
	// 	// '#4db1f2',
	// 	'#3aaaf1',
	// 	// '#27a2ef',
	// 	'#139aee',
	// 	'#0093ec'
	// ];
	let colors = [
		'#9fd2f8',
		'#9acdf4',
		'#95c9ef',
		'#90c4eb',
		'#8bbfe6',
		'#86bae2',
		'#81b5dd',
		'#7cb0d9',
		'#77abd4',
		'#72a6d0',
		'#6da1cb',
		'#689cc7',
		'#6397c2',
		'#5e92be',
		'#598db9',
		'#5488b5',
		'#4f83b0',
		'#4a7eac',
		'#4579a7',
		'#4074a3',
		'#3b6f9e',
		'#366a9a',
		'#316595',
		'#2c6091',
		'#275b8c',
		'#225688',
		'#1d5183',
		'#184c7f',
		'#13477a',
		'#0e4276',
		'#093d71',
		'#04386d'
	];
	export let data;
	export let provinces;
	export let districts;
	export let stats;
	let total_families;
	let total_individuals;
	let total_families_all;
	let total_individuals_all;
	let province = 'Afghanistan - افغانستان';
	let red = true;
	let width;
	let _layers = {};
</script>

<main>
	<div id="map" bind:clientWidth={width} />
	<div id="sidebar">
		<div class="box">
			{#if province}
				<h2 class:red>{province}</h2>
				<br />
				{#if total_individuals}
					<h3>Distributions:</h3>
					<br />
					<h4>Total families: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{total_families}</b></h4>
					<h4>Total individuals: &nbsp;&nbsp;&nbsp;<b>{total_individuals}</b></h4>
					<br /> <br /> <br />
				{:else}
					<h3>No Distributions</h3>
					<br /><br /><br /> <br /> <br /> <br />
				{/if}
			{/if}
			<br />
			<h3>Legend:</h3>
			<br />
			<!-- <h4 style="display: flex; align-items: center;margin-bottom:10px;">
				Presence of local partner: &nbsp;
				<img
					src="/round-star.png"
					style="margin-top:3px; margin-left:14px;"
					width="18"
					height="18"
				/>
			</h4> -->
			<h4 style="margin-bottom:10px;">Size of distribution:</h4>
			<Legend />
		</div>
	</div>
</main>

<style>
	/* @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'; */
	/* @import 'leaflet/dist/leaflet.css'; */
	main {
		/* grid-template-columns: au; */
		/* display: grid; */
		display: block;
	}

	:global(.leaflet-container) {
		background: #f9f7eb !important;
	}

	main #map {
		height: 50vh;
		width: 100%;
		grid-column: 1;
		/* width: 800px; */
	}
	main #sidebar {
		background: #f9f7eb;
		height: 50vh;
		width: 100%;
		grid-column: 2;
		position: relative;
	}

	@media (min-width: 600px) {
		main {
			display: grid;
			grid-template-columns: 99fr 1fr;
			align-items: center;
		}
		main #map,
		main #sidebar {
			height: 100vh;
		}
		.box {
			position: absolute;
			align-self: center;
			left: -380px;
			top: 50%;
			-ms-transform: translate(0, -50%);
			transform: translate(0, -50%);
			font-family: monospace, Arial, sans-serif;
		}
	}

	:global(.leaflet-container),
	#sidebar {
		background: #fafaf5;
	}

	.box {
		font-size: 0.8em;
		margin: 0 auto;
		z-index: 10000;
		box-shadow: 0 3px 12px 0 rgb(0 0 0 / 10%);
		transition: 0.3s;
		min-height: 340px;
		min-width: 120px;
		width: 320px;
		border-radius: 10px;
		padding: 18px;
		padding-top: 10px;
		padding-bottom: 10px;
		background-color: #fff;
	}

	.red {
		color: #0093ec;
	}
	h2 {
		color: #555;
	}
	h3,
	h4 {
		color: #444;
		font-weight: normal;
		/* font-family: monospace; */
		/* font-size: 1.4em; */
		margin: 0;
	}
	h4 {
		margin-left: 20px;
	}
	h3 {
		color: #777;
	}

	.box:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
	/* jmp */
	:global(.popup) {
		color: #444;
		font-weight: normal;
		padding: 0;
		padding-left: 16px;
		padding-right: 16px;
		font-family: monospace, Arial, sans-serif;

		/* color: red; */
	}
</style>
