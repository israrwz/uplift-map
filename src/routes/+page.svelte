<script>
	import SvelteMap from './SvelteMap.svelte';
	// export let map;
	// export let districts;
	// export let provinces;
	// export let stats;
	export let data;
</script>

<SvelteMap
	data={data.map}
	provinces={data.provinces}
	districts={data.districts}
	stats={data.stats}
/>

<style>
	:global(body) {
		margin: 0px;
		padding: 0px;
	}
</style>
