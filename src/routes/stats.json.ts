export async function get({ params }) {
	return {
		body: {
			AF21: { families: 20, individuals: 100, partners: ['Awal Gul Organization', 'SANF'] },
			AF13: { families: 90, individuals: 400, partners: ['SANF'] },
			AF07: { families: 30, individuals: 150, partners: ['SANF'] },
			AF09: { families: 10, individuals: 50, partners: ['SANF'] },
			AF18: { families: 150, individuals: 600, partners: ['SANF'] },
			AF31: { families: 70, individuals: 300, partners: ['Emergency Relief Afghanistan', 'SANF'] },
			AF11: { families: 5, individuals: 25, partners: ['Emergency Relief Afghanistan', 'SANF'] }
		}
	};
}
