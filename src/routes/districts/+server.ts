import { json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const districts = [
		{
			district_en: 'Ab Band',
			district_da: 'آب بند',
			district_code: 'AF1113',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Ab Kamari',
			district_da: 'آب کمری',
			district_code: 'AF3102',
			district_en_alt: null,
			province_en: 'Badghis',
			province_da: 'بادغیس',
			province_code: 'AF31'
		},
		{
			district_en: 'Achin',
			district_da: 'اچین',
			district_code: 'AF0615',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Adraskan',
			district_da: 'ادرسکن',
			district_code: 'AF3209',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Ahmadaba',
			district_da: 'احمد آبا',
			district_code: 'AF1302',
			district_en_alt: null,
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Ajristan',
			district_da: 'اجرستان',
			district_code: 'AF1118',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Alasay',
			district_da: 'اله سای',
			district_code: 'AF0207',
			district_en_alt: null,
			province_en: 'Kapisa',
			province_da: 'کاپیسا',
			province_code: 'AF02'
		},
		{
			district_en: 'Ali Abad',
			district_da: 'علی آباد',
			district_code: 'AF1903',
			district_en_alt: null,
			province_en: 'Kunduz',
			province_da: 'کندز',
			province_code: 'AF19'
		},
		{
			district_en: 'Alingar',
			district_da: 'علینگار',
			district_code: 'AF0704',
			district_en_alt: null,
			province_en: 'Laghman',
			province_da: 'لغمان',
			province_code: 'AF07'
		},
		{
			district_en: 'Alishang',
			district_da: 'علیشنگ',
			district_code: 'AF0703',
			district_en_alt: null,
			province_en: 'Laghman',
			province_da: 'لغمان',
			province_code: 'AF07'
		},
		{
			district_en: 'Almar',
			district_da: 'المار',
			district_code: 'AF2904',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Anar Dara',
			district_da: 'انار دره',
			district_code: 'AF3307',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Anawa',
			district_da: 'عنابه',
			district_code: 'AF0805',
			district_en_alt: 'Onaba',
			province_en: 'Panjsher',
			province_da: 'پنجشیر',
			province_code: 'AF08'
		},
		{
			district_en: 'Andar',
			district_da: 'اندړ',
			district_code: 'AF1107',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Andarab',
			district_da: 'اندراب',
			district_code: 'AF0907',
			district_en_alt: 'Banu',
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Andkhoy',
			district_da: 'اندخوی',
			district_code: 'AF2913',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Aqcha',
			district_da: 'آقچه',
			district_code: 'AF2807',
			district_en_alt: null,
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Arghandab',
			district_da: 'ارغنداب',
			district_code: 'AF2605',
			district_en_alt: null,
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Arghandab',
			district_da: 'ارغنداب',
			district_code: 'AF2702',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Arghanj Khwah',
			district_da: 'ارغنچخواه',
			district_code: 'AF1703',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Arghestan',
			district_da: 'ارغستان',
			district_code: 'AF2708',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Argo',
			district_da: 'ارگو',
			district_code: 'AF1702',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Asad Abad',
			district_da: 'اسد آباد',
			district_code: 'AF1501',
			district_en_alt: 'Centre',
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Ashtarlay',
			district_da: 'اشترلی',
			district_code: 'AF2403',
			district_en_alt: 'Ishterlai',
			province_en: 'Daykundi',
			province_da: 'دایکندی',
			province_code: 'AF24'
		},
		{
			district_en: 'Atghar',
			district_da: 'اتغر',
			district_code: 'AF2608',
			district_en_alt: null,
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Aybak',
			district_da: 'ایبک',
			district_code: 'AF2001',
			district_en_alt: 'Centre',
			province_en: 'Samangan',
			province_da: 'سمنگان',
			province_code: 'AF20'
		},
		{
			district_en: 'Azra',
			district_da: 'ازره',
			district_code: 'AF0507',
			district_en_alt: null,
			province_en: 'Logar',
			province_da: 'لوگر',
			province_code: 'AF05'
		},
		{
			district_en: 'Baghlan-e-Jadid',
			district_da: 'بغلان جدید',
			district_code: 'AF0905',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Baghran',
			district_da: 'باغران',
			district_code: 'AF3012',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Bagram',
			district_da: 'بگرام',
			district_code: 'AF0302',
			district_en_alt: null,
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Bagrami',
			district_da: 'بگرامی',
			district_code: 'AF0104',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Baharak',
			district_da: 'بهارک',
			district_code: 'AF1706',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Baharak',
			district_da: 'بهارک',
			district_code: 'AF1803',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Bak',
			district_da: 'باک',
			district_code: 'AF1409',
			district_en_alt: null,
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Bakwa',
			district_da: 'بکواه',
			district_code: 'AF3308',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Bala Buluk',
			district_da: 'بالا بلوک',
			district_code: 'AF3306',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Bala Murghab',
			district_da: 'بالا مرغاب',
			district_code: 'AF3105',
			district_en_alt: null,
			province_en: 'Badghis',
			province_da: 'بادغیس',
			province_code: 'AF31'
		},
		{
			district_en: 'Balkh',
			district_da: 'بلخ',
			district_code: 'AF2106',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Balkhab',
			district_da: 'بلخاب',
			district_code: 'AF2207',
			district_en_alt: null,
			province_en: 'Sar-e-Pul',
			province_da: 'سرپل',
			province_code: 'AF22'
		},
		{
			district_en: 'Bamyan',
			district_da: 'بامیان',
			district_code: 'AF1001',
			district_en_alt: 'Centre',
			province_en: 'Bamyan',
			province_da: 'بامیان',
			province_code: 'AF10'
		},
		{
			district_en: 'Bangi',
			district_da: 'بنگی',
			district_code: 'AF1804',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Bar Kunar',
			district_da: 'برکنر',
			district_code: 'AF1508',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Baraki Barak',
			district_da: 'برکی برک',
			district_code: 'AF0502',
			district_en_alt: null,
			province_en: 'Logar',
			province_da: 'لوگر',
			province_code: 'AF05'
		},
		{
			district_en: 'Barg-e-Matal',
			district_da: 'برگ متال',
			district_code: 'AF1608',
			district_en_alt: null,
			province_en: 'Nuristan',
			province_da: 'نورستان',
			province_code: 'AF16'
		},
		{
			district_en: 'Barmal',
			district_da: 'برمل',
			district_code: 'AF1214',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Bati Kot',
			district_da: 'بتی کوټ',
			district_code: 'AF0609',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Bazarak',
			district_da: 'بازارک',
			district_code: 'AF0801',
			district_en_alt: 'Centre',
			province_en: 'Panjsher',
			province_da: 'پنجشیر',
			province_code: 'AF08'
		},
		{
			district_en: 'Behsud',
			district_da: 'بهسود',
			district_code: 'AF0602',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Bilcheragh',
			district_da: 'بلچراغ',
			district_code: 'AF2905',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Burka',
			district_da: 'بورکه',
			district_code: 'AF0910',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Chahab',
			district_da: 'چاه آب',
			district_code: 'AF1816',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Chahar Asyab',
			district_da: 'چهار آسیاب',
			district_code: 'AF0103',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Chahar Darah',
			district_da: 'چهار دره',
			district_code: 'AF1902',
			district_en_alt: null,
			province_en: 'Kunduz',
			province_da: 'کندز',
			province_code: 'AF19'
		},
		{
			district_en: 'Chak-e-Wardak',
			district_da: 'چک',
			district_code: 'AF0404',
			district_en_alt: 'Chak',
			province_en: 'Maidan Wardak',
			province_da: 'میدان وردک',
			province_code: 'AF04'
		},
		{
			district_en: 'Chakhansur',
			district_da: 'چخانسور',
			district_code: 'AF3403',
			district_en_alt: 'Asl-i-Chakhansur',
			province_en: 'Nimroz',
			province_da: 'نیمروز',
			province_code: 'AF34'
		},
		{
			district_en: 'Chal',
			district_da: 'چال',
			district_code: 'AF1805',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Chamkani',
			district_da: 'څمکنی',
			district_code: 'AF1310',
			district_en_alt: 'Samkani',
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Chapa Dara',
			district_da: 'چپه دره',
			district_code: 'AF1513',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Chaparhar',
			district_da: 'چپر هار',
			district_code: 'AF0604',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Char Bolak',
			district_da: 'چار بولک',
			district_code: 'AF2111',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Char Burjak',
			district_da: 'چاربرجک',
			district_code: 'AF3404',
			district_en_alt: null,
			province_en: 'Nimroz',
			province_da: 'نیمروز',
			province_code: 'AF34'
		},
		{
			district_en: 'Charikar',
			district_da: 'چاریکار',
			district_code: 'AF0301',
			district_en_alt: 'Centre',
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Charkent',
			district_da: 'چار کنت',
			district_code: 'AF2104',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Charkh',
			district_da: 'چرخ',
			district_code: 'AF0503',
			district_en_alt: null,
			province_en: 'Logar',
			province_da: 'لوگر',
			province_code: 'AF05'
		},
		{
			district_en: 'Charsadra',
			district_da: 'چار صد ره',
			district_code: 'AF2304',
			district_en_alt: null,
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Chawkay',
			district_da: 'چوکی',
			district_code: 'AF1509',
			district_en_alt: 'Sawkai',
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Chemtal',
			district_da: 'چمتال',
			district_code: 'AF2108',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Chisht-e-Sharif',
			district_da: 'چشت شریف',
			district_code: 'AF3216',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Chora',
			district_da: 'چوره',
			district_code: 'AF2503',
			district_en_alt: null,
			province_en: 'Uruzgan',
			province_da: 'ارزگان',
			province_code: 'AF25'
		},
		{
			district_en: 'Dahana-e-Ghori',
			district_da: 'دهنۀ غوری',
			district_code: 'AF0902',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Daman',
			district_da: 'دامان',
			district_code: 'AF2703',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Dand Wa Patan',
			district_da: 'دند وپټان',
			district_code: 'AF1311',
			district_en_alt: null,
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Dangam',
			district_da: 'دانگام',
			district_code: 'AF1512',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Dara',
			district_da: 'دره',
			district_code: 'AF0803',
			district_en_alt: null,
			province_en: 'Panjsher',
			province_da: 'پنجشیر',
			province_code: 'AF08'
		},
		{
			district_en: 'Dara-e-Nur',
			district_da: 'دره نور',
			district_code: 'AF0612',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Dara-e-Pech',
			district_da: 'دره پیچ',
			district_code: 'AF1507',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Dara-e-Suf-e-Bala',
			district_da: 'درۀ صوف بالا',
			district_code: 'AF2007',
			district_en_alt: null,
			province_en: 'Samangan',
			province_da: 'سمنگان',
			province_code: 'AF20'
		},
		{
			district_en: 'Dara-e-Suf-e-Payin',
			district_da: 'درۀ صوف پائین',
			district_code: 'AF2006',
			district_en_alt: null,
			province_en: 'Samangan',
			province_da: 'سمنگان',
			province_code: 'AF20'
		},
		{
			district_en: 'Darayem',
			district_da: 'درایم',
			district_code: 'AF1707',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Darqad',
			district_da: 'درقد',
			district_code: 'AF1815',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Darzab',
			district_da: 'درز آب',
			district_code: 'AF2811',
			district_en_alt: null,
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Dasht-e-Archi',
			district_da: 'دشت ارچی',
			district_code: 'AF1906',
			district_en_alt: null,
			province_en: 'Kunduz',
			province_da: 'کندز',
			province_code: 'AF19'
		},
		{
			district_en: 'Dasht-e-Qala',
			district_da: 'دشت قلعه',
			district_code: 'AF1812',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Dawlat Abad',
			district_da: 'دولت آباد',
			district_code: 'AF2109',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Dawlat Abad',
			district_da: 'دولت آباد',
			district_code: 'AF2909',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Dawlatshah',
			district_da: 'دولت شاه',
			district_code: 'AF0705',
			district_en_alt: null,
			province_en: 'Laghman',
			province_da: 'لغمان',
			province_code: 'AF07'
		},
		{
			district_en: 'Dawlatyar',
			district_da: 'دولت یار',
			district_code: 'AF2303',
			district_en_alt: null,
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Dawraz-e-Bala',
			district_da: 'دروازبالا ( نیسی)',
			district_code: 'AF1727',
			district_en_alt: 'Nusai',
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Dawraz-e-Payin',
			district_da: 'درواز پائین (ما می )',
			district_code: 'AF1722',
			district_en_alt: 'Mai Mai',
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Daychopan',
			district_da: 'دای چوپان',
			district_code: 'AF2607',
			district_en_alt: null,
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Daymirdad',
			district_da: 'دایمیرداد',
			district_code: 'AF0406',
			district_en_alt: null,
			province_en: 'Maidan Wardak',
			province_da: 'میدان وردک',
			province_code: 'AF04'
		},
		{
			district_en: 'Deh-e-Shu',
			district_da: 'دیشو',
			district_code: 'AF3013',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Deh Bala',
			district_da: 'ده بالا',
			district_code: 'AF0610',
			district_en_alt: 'Haska Meyna',
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Deh Sabz',
			district_da: 'ده سبز',
			district_code: 'AF0105',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Deh Salah',
			district_da: 'ده صلاح',
			district_code: 'AF0908',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Deh Yak',
			district_da: 'ده یک',
			district_code: 'AF1105',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Dehdadi',
			district_da: 'دهدادی',
			district_code: 'AF2103',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Dehrawud',
			district_da: 'دهراود',
			district_code: 'AF2502',
			district_en_alt: null,
			province_en: 'Uruzgan',
			province_da: 'ارزگان',
			province_code: 'AF25'
		},
		{
			district_en: 'Dila',
			district_da: 'دیله',
			district_code: 'AF1216',
			district_en_alt: 'Dila Wa Khusamand',
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'DoLayna',
			district_da: 'دو لینه',
			district_code: 'AF2302',
			district_en_alt: null,
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Doshi',
			district_da: 'دوشی',
			district_code: 'AF0903',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Duab',
			district_da: 'دو آب',
			district_code: 'AF1605',
			district_en_alt: null,
			province_en: 'Nuristan',
			province_da: 'نورستان',
			province_code: 'AF16'
		},
		{
			district_en: 'Dur Baba',
			district_da: 'دُر بابا',
			district_code: 'AF0622',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Eshkashem',
			district_da: 'اشکاشم',
			district_code: 'AF1723',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Eshkmesh',
			district_da: 'اشکمش',
			district_code: 'AF1811',
			district_en_alt: 'Ishkamish',
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Estalef',
			district_da: 'استالف',
			district_code: 'AF0113',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Farah',
			district_da: 'فراه',
			district_code: 'AF3301',
			district_en_alt: 'Centre',
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Farkhar',
			district_da: 'فرخار',
			district_code: 'AF1808',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Farsi',
			district_da: 'فرسی',
			district_code: 'AF3215',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Farza',
			district_da: 'فرزه',
			district_code: 'AF0112',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Fayzabad',
			district_da: 'فیض آباد',
			district_code: 'AF1701',
			district_en_alt: 'Centre',
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Fayzabad',
			district_da: 'فیض آباد',
			district_code: 'AF2808',
			district_en_alt: null,
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Fereng Wa Gharu',
			district_da: 'فرنگ وغارو',
			district_code: 'AF0915',
			district_en_alt: 'Fereng',
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Feroz Koh',
			district_da: 'فیروزکوه',
			district_code: 'AF2301',
			district_en_alt: 'Chagcharan',
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Feroz Nakhchir',
			district_da: 'فیروز نخچیر',
			district_code: 'AF2004',
			district_en_alt: null,
			province_en: 'Samangan',
			province_da: 'سمنگان',
			province_code: 'AF20'
		},
		{
			district_en: 'Gardez',
			district_da: 'گردیز',
			district_code: 'AF1301',
			district_en_alt: 'Centre',
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Garmser',
			district_da: 'گرم سیر',
			district_code: 'AF3006',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Garzewan',
			district_da: 'گرزیوان',
			district_code: 'AF2908',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Gelan',
			district_da: 'گیلان',
			district_code: 'AF1117',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Ghazi Abad',
			district_da: 'غازی آباد',
			district_code: 'AF1511',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Ghazni',
			district_da: 'غزنی',
			district_code: 'AF1101',
			district_en_alt: 'Centre',
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Ghorak',
			district_da: 'غورک',
			district_code: 'AF2709',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Ghorband',
			district_da: 'غوربند',
			district_code: 'AF0307',
			district_en_alt: 'Syah Gird',
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Ghormach',
			district_da: 'غورماچ',
			district_code: 'AF3107',
			district_en_alt: null,
			province_en: 'Badghis',
			province_da: 'بادغیس',
			province_code: 'AF31'
		},
		{
			district_en: 'Ghoryan',
			district_da: 'غوریان',
			district_code: 'AF3211',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Giro',
			district_da: 'گیرو',
			district_code: 'AF1112',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Giyan',
			district_da: 'گیان',
			district_code: 'AF1215',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Gizab',
			district_da: 'گیزاب',
			district_code: 'AF2409',
			district_en_alt: 'Patoo',
			province_en: 'Daykundi',
			province_da: 'دایکندی',
			province_code: 'AF24'
		},
		{
			district_en: 'Gomal',
			district_da: 'گومل',
			district_code: 'AF1208',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Gosfandi',
			district_da: 'گوسفندی',
			district_code: 'AF2206',
			district_en_alt: null,
			province_en: 'Sar-e-Pul',
			province_da: 'سرپل',
			province_code: 'AF22'
		},
		{
			district_en: 'Goshta',
			district_da: 'گوشته',
			district_code: 'AF0614',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Guldara',
			district_da: 'گلدره',
			district_code: 'AF0111',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Gulistan',
			district_da: 'گلستان',
			district_code: 'AF3310',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Gulran',
			district_da: 'گلران',
			district_code: 'AF3208',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Gurbuz',
			district_da: 'گربز',
			district_code: 'AF1403',
			district_en_alt: null,
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Guzara',
			district_da: 'گذره',
			district_code: 'AF3203',
			district_en_alt: 'Nizam-i-Shahid',
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Guzargah-e-Nur',
			district_da: 'گذرگاه نور',
			district_code: 'AF0914',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Hazar Sumuch',
			district_da: 'هزار سموچ',
			district_code: 'AF1802',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Hazrat-e-Sultan',
			district_da: 'حضرت سلطان',
			district_code: 'AF2002',
			district_en_alt: null,
			province_en: 'Samangan',
			province_da: 'سمنگان',
			province_code: 'AF20'
		},
		{
			district_en: 'Hesa-e-Awal-e-Behsud',
			district_da: 'حصه اول بهسود',
			district_code: 'AF0407',
			district_en_alt: null,
			province_en: 'Maidan Wardak',
			province_da: 'میدان وردک',
			province_code: 'AF04'
		},
		{
			district_en: 'Hesarak',
			district_da: 'حصارک',
			district_code: 'AF0621',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Hirat',
			district_da: 'هرات',
			district_code: 'AF3201',
			district_en_alt: 'Centre',
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Hisa-e-Awal-e-Kohistan',
			district_da: 'حصه اول کوهستان',
			district_code: 'AF0204',
			district_en_alt: null,
			province_en: 'Kapisa',
			province_da: 'کاپیسا',
			province_code: 'AF02'
		},
		{
			district_en: 'Hisa-e-Duwum-e-Kohistan',
			district_da: 'حصه دوم کوهستان',
			district_code: 'AF0202',
			district_en_alt: null,
			province_en: 'Kapisa',
			province_da: 'کاپیسا',
			province_code: 'AF02'
		},
		{
			district_en: 'Imam Sahib',
			district_da: 'امام صاحب',
			district_code: 'AF1905',
			district_en_alt: 'Hazrati Imam Sahib',
			province_en: 'Kunduz',
			province_da: 'کندز',
			province_code: 'AF19'
		},
		{
			district_en: 'Injil',
			district_da: 'انجیل',
			district_code: 'AF3202',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Jabal Saraj',
			district_da: 'جبل السراج',
			district_code: 'AF0305',
			district_en_alt: null,
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Jaghatu',
			district_da: 'جغتو',
			district_code: 'AF0408',
			district_en_alt: null,
			province_en: 'Maidan Wardak',
			province_da: 'میدان وردک',
			province_code: 'AF04'
		},
		{
			district_en: 'Jaghatu',
			district_da: 'جغتو',
			district_code: 'AF1106',
			district_en_alt: 'Bahrami Shahid',
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Jaghuri',
			district_da: 'جاغوری',
			district_code: 'AF1114',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Jaji',
			district_da: 'علی خیل',
			district_code: 'AF1307',
			district_en_alt: 'Alikhel',
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Jaji Maydan',
			district_da: 'جاجی میدان',
			district_code: 'AF1413',
			district_en_alt: null,
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Jalalabad',
			district_da: 'جلال آباد',
			district_code: 'AF0601',
			district_en_alt: 'Centre',
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Jalrez',
			district_da: 'جلریز',
			district_code: 'AF0403',
			district_en_alt: null,
			province_en: 'Maidan Wardak',
			province_da: 'میدان وردک',
			province_code: 'AF04'
		},
		{
			district_en: 'Jani Khel',
			district_da: 'جانی خیل',
			district_code: 'AF1209',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Jani Khel',
			district_da: 'جانی خیل',
			district_code: 'AF1309',
			district_en_alt: 'Mangal',
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Jawand',
			district_da: 'جوند',
			district_code: 'AF3106',
			district_en_alt: null,
			province_en: 'Badghis',
			province_da: 'بادغیس',
			province_code: 'AF31'
		},
		{
			district_en: 'Jorm',
			district_da: 'جرم',
			district_code: 'AF1710',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Kabul',
			district_da: 'کابل',
			district_code: 'AF0101',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Kahmard',
			district_da: 'کهمرد',
			district_code: 'AF1004',
			district_en_alt: null,
			province_en: 'Bamyan',
			province_da: 'بامیان',
			province_code: 'AF10'
		},
		{
			district_en: 'Kajaki',
			district_da: 'کجکی',
			district_code: 'AF3010',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Kajran',
			district_da: 'کجران',
			district_code: 'AF2408',
			district_en_alt: null,
			province_en: 'Daykundi',
			province_da: 'دایکندی',
			province_code: 'AF24'
		},
		{
			district_en: 'Kakar',
			district_da: 'کاکړ',
			district_code: 'AF2611',
			district_en_alt: 'Khak-e-Afghan',
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Kalafgan',
			district_da: 'کلفگان',
			district_code: 'AF1807',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Kalakan',
			district_da: 'کلکان',
			district_code: 'AF0110',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Kaldar',
			district_da: 'کلدار',
			district_code: 'AF2113',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Kama',
			district_da: 'کامه',
			district_code: 'AF0605',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Kamdesh',
			district_da: 'کامدیش',
			district_code: 'AF1606',
			district_en_alt: null,
			province_en: 'Nuristan',
			province_da: 'نورستان',
			province_code: 'AF16'
		},
		{
			district_en: 'Kandahar',
			district_da: 'کندهار',
			district_code: 'AF2701',
			district_en_alt: 'Centre',
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Kang',
			district_da: 'کنگ',
			district_code: 'AF3402',
			district_en_alt: null,
			province_en: 'Nimroz',
			province_da: 'نیمروز',
			province_code: 'AF34'
		},
		{
			district_en: 'Karukh',
			district_da: 'کرُخ',
			district_code: 'AF3204',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Keshem',
			district_da: 'کشم',
			district_code: 'AF1715',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Keshendeh',
			district_da: 'کشنده',
			district_code: 'AF2114',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Khadir',
			district_da: 'خدیر',
			district_code: 'AF2404',
			district_en_alt: null,
			province_en: 'Daykundi',
			province_da: 'دایکندی',
			province_code: 'AF24'
		},
		{
			district_en: 'Khak-e-Jabbar',
			district_da: 'خاک جبار',
			district_code: 'AF0109',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Khak-e-Safed',
			district_da: 'خاک سفید',
			district_code: 'AF3303',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Khakrez',
			district_da: 'خاکریز',
			district_code: 'AF2707',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Khamyab',
			district_da: 'خمیاب',
			district_code: 'AF2806',
			district_en_alt: 'Kham Ab',
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Khan-e-Char Bagh',
			district_da: 'خان چارباغ',
			district_code: 'AF2914',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Khan Abad',
			district_da: 'خان آباد',
			district_code: 'AF1904',
			district_en_alt: null,
			province_en: 'Kunduz',
			province_da: 'کندز',
			province_code: 'AF19'
		},
		{
			district_en: 'Khanaqa',
			district_da: 'خانقا',
			district_code: 'AF2803',
			district_en_alt: null,
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Kharwar',
			district_da: 'خروار',
			district_code: 'AF0506',
			district_en_alt: null,
			province_en: 'Logar',
			province_da: 'لوگر',
			province_code: 'AF05'
		},
		{
			district_en: 'Khas Kunar',
			district_da: 'خاص کنر',
			district_code: 'AF1510',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Khas Uruzgan',
			district_da: 'خاص ارزگان',
			district_code: 'AF2505',
			district_en_alt: null,
			province_en: 'Uruzgan',
			province_da: 'ارزگان',
			province_code: 'AF25'
		},
		{
			district_en: 'Khash',
			district_da: 'خاش',
			district_code: 'AF1705',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Khashrod',
			district_da: 'خاش رود',
			district_code: 'AF3405',
			district_en_alt: null,
			province_en: 'Nimroz',
			province_da: 'نیمروز',
			province_code: 'AF34'
		},
		{
			district_en: 'Khenj',
			district_da: 'خنج (حصه اول)',
			district_code: 'AF0804',
			district_en_alt: 'Hisa-e-Awal',
			province_en: 'Panjsher',
			province_da: 'پنجشیر',
			province_code: 'AF08'
		},
		{
			district_en: 'Khinjan',
			district_da: 'خنجان',
			district_code: 'AF0906',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Khogyani',
			district_da: 'خوگیانی',
			district_code: 'AF0608',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Khoshi',
			district_da: 'خوشی',
			district_code: 'AF0504',
			district_en_alt: null,
			province_en: 'Logar',
			province_da: 'لوگر',
			province_code: 'AF05'
		},
		{
			district_en: 'Khost Wa Fereng',
			district_da: 'خوست و فرنگ',
			district_code: 'AF0913',
			district_en_alt: 'Khost',
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Khulm',
			district_da: 'خلم',
			district_code: 'AF2110',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Khuram Wa Sarbagh',
			district_da: 'خرم وسارباغ',
			district_code: 'AF2003',
			district_en_alt: null,
			province_en: 'Samangan',
			province_da: 'سمنگان',
			province_code: 'AF20'
		},
		{
			district_en: 'Khwahan',
			district_da: 'خواهان',
			district_code: 'AF1720',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Khwaja Bahawuddin',
			district_da: 'خواجه بهاوالدین',
			district_code: 'AF1814',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Khwaja Dukoh',
			district_da: 'خواجه دوکوه',
			district_code: 'AF2802',
			district_en_alt: null,
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Khwaja Ghar',
			district_da: 'خواجه غار',
			district_code: 'AF1809',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Khwaja Hejran',
			district_da: 'خواجه هجران',
			district_code: 'AF0909',
			district_en_alt: 'Jalga',
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Khwaja Sabz Posh',
			district_da: 'خواجه سبزپوش',
			district_code: 'AF2903',
			district_en_alt: 'Khwaja Sabz Posh-i-Wali',
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Khwaja Umari',
			district_da: 'خواجه عمری',
			district_code: 'AF1103',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Kiti',
			district_da: 'کیتی',
			district_code: 'AF2405',
			district_en_alt: null,
			province_en: 'Daykundi',
			province_da: 'دایکندی',
			province_code: 'AF24'
		},
		{
			district_en: 'Kofab',
			district_da: 'کوف آب',
			district_code: 'AF1721',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Koh-e-Safi',
			district_da: 'کوه صافی',
			district_code: 'AF0308',
			district_en_alt: null,
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Koh Band',
			district_da: 'کوه بند',
			district_code: 'AF0203',
			district_en_alt: null,
			province_en: 'Kapisa',
			province_da: 'کاپیسا',
			province_code: 'AF02'
		},
		{
			district_en: 'Kohestanat',
			district_da: 'کوهستانات',
			district_code: 'AF2203',
			district_en_alt: null,
			province_en: 'Sar-e-Pul',
			province_da: 'سرپل',
			province_code: 'AF22'
		},
		{
			district_en: 'Kohistan',
			district_da: 'کوهستان',
			district_code: 'AF1708',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Kohistan',
			district_da: 'کوهستان',
			district_code: 'AF2910',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Kohsan',
			district_da: 'کوهسان',
			district_code: 'AF3213',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Koran Wa Monjan',
			district_da: 'کران ومنجان',
			district_code: 'AF1726',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Kot',
			district_da: 'کوټ',
			district_code: 'AF0613',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Kunduz',
			district_da: 'کندز',
			district_code: 'AF1901',
			district_en_alt: 'Centre',
			province_en: 'Kunduz',
			province_da: 'کندز',
			province_code: 'AF19'
		},
		{
			district_en: 'Kushk',
			district_da: 'کُشک',
			district_code: 'AF3207',
			district_en_alt: 'Rubat-i-Sangi',
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Kushk-e-Kuhna',
			district_da: 'کُشک کهنه',
			district_code: 'AF3210',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Kuz Kunar',
			district_da: 'کوز کنر',
			district_code: 'AF0606',
			district_en_alt: 'Khewa',
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Lal Wa Sarjangal',
			district_da: 'لعل و سرجنگل',
			district_code: 'AF2307',
			district_en_alt: null,
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Lalpur',
			district_da: 'لعل پور',
			district_code: 'AF0618',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Lash-e-Juwayn',
			district_da: 'لاش جوین',
			district_code: 'AF3309',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Lashkargah',
			district_da: 'لشکرگاه',
			district_code: 'AF3001',
			district_en_alt: 'Centre',
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Lija Ahmad Khel',
			district_da: 'لجه احمد خیل',
			district_code: 'AF1308',
			district_en_alt: null,
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Mahmood-e-Raqi',
			district_da: 'محمود راقی',
			district_code: 'AF0201',
			district_en_alt: 'Centre',
			province_en: 'Kapisa',
			province_da: 'کاپیسا',
			province_code: 'AF02'
		},
		{
			district_en: 'Malistan',
			district_da: 'مالستان',
			district_code: 'AF1116',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Mandol',
			district_da: 'مندول',
			district_code: 'AF1607',
			district_en_alt: null,
			province_en: 'Nuristan',
			province_da: 'نورستان',
			province_code: 'AF16'
		},
		{
			district_en: 'Mandozayi',
			district_da: 'مندوزائی',
			district_code: 'AF1402',
			district_en_alt: 'Ishmail Khail',
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Marawara',
			district_da: 'مروره',
			district_code: 'AF1502',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Mardyan',
			district_da: 'مردیان',
			district_code: 'AF2809',
			district_en_alt: null,
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Markaz-e-Behsud',
			district_da: 'مدکز بهسود',
			district_code: 'AF0409',
			district_en_alt: null,
			province_en: 'Maidan Wardak',
			province_da: 'میدان وردک',
			province_code: 'AF04'
		},
		{
			district_en: 'Marmul',
			district_da: 'مارمُل',
			district_code: 'AF2105',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Maruf',
			district_da: 'معروف',
			district_code: 'AF2715',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Mata Khan',
			district_da: 'متاخان',
			district_code: 'AF1202',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Matun',
			district_da: 'خوست (متون)',
			district_code: 'AF1401',
			district_en_alt: 'Khost',
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Maydan Shahr',
			district_da: 'میدان شهر',
			district_code: 'AF0401',
			district_en_alt: 'Centre',
			province_en: 'Maidan Wardak',
			province_da: 'میدان وردک',
			province_code: 'AF04'
		},
		{
			district_en: 'Maymana',
			district_da: 'میمنه',
			district_code: 'AF2901',
			district_en_alt: 'Centre',
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Maywand',
			district_da: 'میوند',
			district_code: 'AF2710',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Mazar-e-Sharif',
			district_da: 'مزار شریف',
			district_code: 'AF2101',
			district_en_alt: 'Mazar',
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Mehtarlam',
			district_da: 'مهتر لام',
			district_code: 'AF0701',
			district_en_alt: 'Laghman Centre',
			province_en: 'Laghman',
			province_da: 'لغمان',
			province_code: 'AF07'
		},
		{
			district_en: 'Mingajik',
			district_da: 'منگجک',
			district_code: 'AF2804',
			district_en_alt: 'Farary',
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Mir Bacha Kot',
			district_da: 'میر بچه کوت',
			district_code: 'AF0108',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Miramor',
			district_da: 'میرامور',
			district_code: 'AF2406',
			district_en_alt: null,
			province_en: 'Daykundi',
			province_da: 'دایکندی',
			province_code: 'AF24'
		},
		{
			district_en: 'Miyanshin',
			district_da: 'میانشین',
			district_code: 'AF2713',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Mizan',
			district_da: 'میزان',
			district_code: 'AF2604',
			district_en_alt: null,
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Mohammad Agha',
			district_da: 'محمدآغه',
			district_code: 'AF0505',
			district_en_alt: null,
			province_en: 'Logar',
			province_da: 'لوگر',
			province_code: 'AF05'
		},
		{
			district_en: 'Muhmand Dara',
			district_da: 'مهمند دره',
			district_code: 'AF0617',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Muqur',
			district_da: 'مقر',
			district_code: 'AF1115',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Muqur',
			district_da: 'مقر',
			district_code: 'AF3103',
			district_en_alt: null,
			province_en: 'Badghis',
			province_da: 'بادغیس',
			province_code: 'AF31'
		},
		{
			district_en: 'Musa Khel',
			district_da: 'موسی خیل',
			district_code: 'AF1405',
			district_en_alt: null,
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Musa Qala',
			district_da: 'موسی قلعه',
			district_code: 'AF3009',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Musahi',
			district_da: 'موسهی',
			district_code: 'AF0107',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Nad-e-Ali',
			district_da: 'نادعلی',
			district_code: 'AF3002',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Nadir Shah Kot',
			district_da: 'نادرشاه کوت',
			district_code: 'AF1406',
			district_en_alt: null,
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Nahr-e-Saraj',
			district_da: 'نهر سراج',
			district_code: 'AF3004',
			district_en_alt: 'Grishk',
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Nahr-e-Shahi',
			district_da: 'نهر شاهی',
			district_code: 'AF2102',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Nahrin',
			district_da: 'نهرین',
			district_code: 'AF0904',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Namak Ab',
			district_da: 'نمک آب',
			district_code: 'AF1806',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Narang',
			district_da: 'نرنگ',
			district_code: 'AF1504',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Nari',
			district_da: 'ناړی',
			district_code: 'AF1515',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Nawa',
			district_da: 'ناوه',
			district_code: 'AF1119',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Nawa-e-Barakzaiy',
			district_da: 'ناوه بارکزائی',
			district_code: 'AF3003',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Nawbahar',
			district_da: 'نوبهار',
			district_code: 'AF2609',
			district_en_alt: null,
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Nawur',
			district_da: 'ناور',
			district_code: 'AF1110',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Nawzad',
			district_da: 'نوزاد',
			district_code: 'AF3007',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Nazyan',
			district_da: 'نازیان',
			district_code: 'AF0620',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Nerkh',
			district_da: 'نرخ',
			district_code: 'AF0402',
			district_en_alt: null,
			province_en: 'Maidan Wardak',
			province_da: 'میدان وردک',
			province_code: 'AF04'
		},
		{
			district_en: 'Nesh',
			district_da: 'نیش',
			district_code: 'AF2712',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Nijrab',
			district_da: 'نجراب',
			district_code: 'AF0205',
			district_en_alt: null,
			province_en: 'Kapisa',
			province_da: 'کاپیسا',
			province_code: 'AF02'
		},
		{
			district_en: 'Nika',
			district_da: 'نیکه',
			district_code: 'AF1213',
			district_en_alt: 'Neka',
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Nili',
			district_da: 'نیلی',
			district_code: 'AF2401',
			district_en_alt: 'Centre',
			province_en: 'Daykundi',
			province_da: 'دایکندی',
			province_code: 'AF24'
		},
		{
			district_en: 'Nurgal',
			district_da: 'نورگل',
			district_code: 'AF1514',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Nurgaram',
			district_da: 'نورگرام',
			district_code: 'AF1604',
			district_en_alt: null,
			province_en: 'Nuristan',
			province_da: 'نورستان',
			province_code: 'AF16'
		},
		{
			district_en: 'Obe',
			district_da: 'اوبی',
			district_code: 'AF3212',
			district_en_alt: 'Obi',
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Omna',
			district_da: 'اومنه',
			district_code: 'AF1206',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Pachir Wa Agam',
			district_da: 'پچیراگام',
			district_code: 'AF0611',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Paghman',
			district_da: 'پغمان',
			district_code: 'AF0102',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Panjab',
			district_da: 'پنجاب',
			district_code: 'AF1006',
			district_en_alt: null,
			province_en: 'Bamyan',
			province_da: 'بامیان',
			province_code: 'AF10'
		},
		{
			district_en: 'Panjwayi',
			district_da: 'پنجوائی',
			district_code: 'AF2704',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Parun',
			district_da: 'پرونس',
			district_code: 'AF1601',
			district_en_alt: 'Centre',
			province_en: 'Nuristan',
			province_da: 'نورستان',
			province_code: 'AF16'
		},
		{
			district_en: 'Paryan',
			district_da: 'پریان',
			district_code: 'AF0807',
			district_en_alt: null,
			province_en: 'Panjsher',
			province_da: 'پنجشیر',
			province_code: 'AF08'
		},
		{
			district_en: 'Pasaband',
			district_da: 'پسابند',
			district_code: 'AF2305',
			district_en_alt: null,
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Pashtun Kot',
			district_da: 'پشتون کوټ',
			district_code: 'AF2902',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Pashtun Zarghun',
			district_da: 'پشتون زرغون',
			district_code: 'AF3206',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Pul-e-Alam',
			district_da: 'پل علم',
			district_code: 'AF0501',
			district_en_alt: 'Centre',
			province_en: 'Logar',
			province_da: 'لوگر',
			province_code: 'AF05'
		},
		{
			district_en: 'Pul-e-Hisar',
			district_da: 'پل حصار',
			district_code: 'AF0912',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Pul-e-Khumri',
			district_da: 'پلخمری',
			district_code: 'AF0901',
			district_en_alt: 'Centre',
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Pur Chaman',
			district_da: 'پُرچمن',
			district_code: 'AF3311',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Pushtrod',
			district_da: 'پشترود',
			district_code: 'AF3302',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Qadis',
			district_da: 'قادیس',
			district_code: 'AF3104',
			district_en_alt: null,
			province_en: 'Badghis',
			province_da: 'بادغیس',
			province_code: 'AF31'
		},
		{
			district_en: 'Qala-e-Kah',
			district_da: 'قلعه کاه',
			district_code: 'AF3304',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Qala-e-Naw',
			district_da: 'قلعه نو',
			district_code: 'AF3101',
			district_en_alt: 'Centre',
			province_en: 'Badghis',
			province_da: 'بادغیس',
			province_code: 'AF31'
		},
		{
			district_en: 'Qala-e-Zal',
			district_da: 'قلعه ذال',
			district_code: 'AF1907',
			district_en_alt: 'Qalai Zal',
			province_en: 'Kunduz',
			province_da: 'کندز',
			province_code: 'AF19'
		},
		{
			district_en: 'Qalandar',
			district_da: 'قلندر',
			district_code: 'AF1410',
			district_en_alt: null,
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Qalat',
			district_da: 'قلات',
			district_code: 'AF2601',
			district_en_alt: 'Centre',
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Qara Bagh',
			district_da: 'قره باغ',
			district_code: 'AF0114',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Qara Bagh',
			district_da: 'قره باغ',
			district_code: 'AF1111',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Qaram Qul',
			district_da: 'قرم قل',
			district_code: 'AF2911',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Qarghayi',
			district_da: 'قرغه ئی',
			district_code: 'AF0702',
			district_en_alt: null,
			province_en: 'Laghman',
			province_da: 'لغمان',
			province_code: 'AF07'
		},
		{
			district_en: 'Qarqin',
			district_da: 'قرقین',
			district_code: 'AF2810',
			district_en_alt: null,
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Qaysar',
			district_da: 'قیصار',
			district_code: 'AF2907',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Qurghan',
			district_da: 'قرغان',
			district_code: 'AF2912',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Qush Tepa',
			district_da: 'قوش تیپه',
			district_code: 'AF2805',
			district_en_alt: null,
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Raghestan',
			district_da: 'راغستان',
			district_code: 'AF1714',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Rashidan',
			district_da: 'رشیدان',
			district_code: 'AF1109',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Reg',
			district_da: 'ریگ ( شگه )',
			district_code: 'AF2716',
			district_en_alt: 'Shiga',
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Reg-i-Khan Nishin',
			district_da: 'ریگ خان نشین',
			district_code: 'AF3011',
			district_en_alt: 'Reg',
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Rodat',
			district_da: 'رودات',
			district_code: 'AF0607',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Rostaq',
			district_da: 'رُستاق',
			district_code: 'AF1810',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Rukha',
			district_da: 'رُخه',
			district_code: 'AF0802',
			district_en_alt: null,
			province_en: 'Panjsher',
			province_da: 'پنجشیر',
			province_code: 'AF08'
		},
		{
			district_en: 'Ruy-e-Duab',
			district_da: 'روی دو آب',
			district_code: 'AF2005',
			district_en_alt: null,
			province_en: 'Samangan',
			province_da: 'سمنگان',
			province_code: 'AF20'
		},
		{
			district_en: 'Sabari',
			district_da: 'صبری',
			district_code: 'AF1407',
			district_en_alt: 'Yaqubi',
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Saghar',
			district_da: 'ساغر',
			district_code: 'AF2310',
			district_en_alt: null,
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Salang',
			district_da: 'سالنگ',
			district_code: 'AF0306',
			district_en_alt: null,
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Sancharak',
			district_da: 'سانچارك',
			district_code: 'AF2205',
			district_en_alt: 'Sangchark',
			province_en: 'Sar-e-Pul',
			province_da: 'سرپل',
			province_code: 'AF22'
		},
		{
			district_en: 'Sang-e-Takht',
			district_da: 'سنگ تخت',
			district_code: 'AF2407',
			district_en_alt: null,
			province_en: 'Daykundi',
			province_da: 'دایکندی',
			province_code: 'AF24'
		},
		{
			district_en: 'Sangin',
			district_da: 'سنگین',
			district_code: 'AF3008',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Sar-e-Pul',
			district_da: 'سرپل',
			district_code: 'AF2201',
			district_en_alt: 'Centre',
			province_en: 'Sar-e-Pul',
			province_da: 'سرپل',
			province_code: 'AF22'
		},
		{
			district_en: 'Sar Kani',
			district_da: 'سرکانی',
			district_code: 'AF1505',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Sar Rawzah',
			district_da: 'سرروضه (سرحوضه)',
			district_code: 'AF1205',
			district_en_alt: 'Sar Hawzah',
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Sayad',
			district_da: 'صیاد',
			district_code: 'AF2202',
			district_en_alt: null,
			province_en: 'Sar-e-Pul',
			province_da: 'سرپل',
			province_code: 'AF22'
		},
		{
			district_en: 'Saydabad',
			district_da: 'سید آباد',
			district_code: 'AF0405',
			district_en_alt: null,
			province_en: 'Maidan Wardak',
			province_da: 'میدان وردک',
			province_code: 'AF04'
		},
		{
			district_en: 'Sayed Karam',
			district_da: 'سیدکرم',
			district_code: 'AF1306',
			district_en_alt: null,
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Sayed Khel',
			district_da: 'سیدخیل',
			district_code: 'AF0304',
			district_en_alt: null,
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Sayghan',
			district_da: 'سیغان',
			district_code: 'AF1003',
			district_en_alt: null,
			province_en: 'Bamyan',
			province_da: 'بامیان',
			province_code: 'AF10'
		},
		{
			district_en: 'Shah Joi',
			district_da: 'شاه جوی',
			district_code: 'AF2606',
			district_en_alt: null,
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Shah Wali Kot',
			district_da: 'شاه ولی کوت',
			district_code: 'AF2706',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Shahid-e-Hassas',
			district_da: 'شهید حساس',
			district_code: 'AF2504',
			district_en_alt: 'Charchino',
			province_en: 'Uruzgan',
			province_da: 'ارزگان',
			province_code: 'AF25'
		},
		{
			district_en: 'Shahr-e-Buzorg',
			district_da: 'شهر بزرگ',
			district_code: 'AF1713',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Shahrak',
			district_da: 'شهرک',
			district_code: 'AF2306',
			district_en_alt: null,
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Shahrestan',
			district_da: 'شهرستان',
			district_code: 'AF2402',
			district_en_alt: null,
			province_en: 'Daykundi',
			province_da: 'دایکندی',
			province_code: 'AF24'
		},
		{
			district_en: 'Shakar Dara',
			district_da: 'شکردره',
			district_code: 'AF0106',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Shaki',
			district_da: 'شکی',
			district_code: 'AF1724',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Shamal',
			district_da: 'شمل',
			district_code: 'AF1412',
			district_en_alt: 'Dowa Mandi',
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Shamul Zayi',
			district_da: 'شملزائی',
			district_code: 'AF2610',
			district_en_alt: null,
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Sharak-e-Hayratan',
			district_da: 'شهرک حیرتان',
			district_code: 'AF2116',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Sharan',
			district_da: 'شرن',
			district_code: 'AF1201',
			district_en_alt: 'Centre',
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Shawak',
			district_da: 'شواک',
			district_code: 'AF1304',
			district_en_alt: null,
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Shekh Ali',
			district_da: 'شیخ علی',
			district_code: 'AF0310',
			district_en_alt: null,
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Sherzad',
			district_da: 'شیرزاد',
			district_code: 'AF0619',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Shibar',
			district_da: 'شیبر',
			district_code: 'AF1002',
			district_en_alt: null,
			province_en: 'Bamyan',
			province_da: 'بامیان',
			province_code: 'AF10'
		},
		{
			district_en: 'Shiberghan',
			district_da: 'شبرغان',
			district_code: 'AF2801',
			district_en_alt: 'Centre',
			province_en: 'Jawzjan',
			province_da: 'جوزجان',
			province_code: 'AF28'
		},
		{
			district_en: 'Shibkoh',
			district_da: 'شیب کوه',
			district_code: 'AF3305',
			district_en_alt: null,
			province_en: 'Farah',
			province_da: 'فراه',
			province_code: 'AF33'
		},
		{
			district_en: 'Shigal',
			district_da: 'شیگل وشلتن',
			district_code: 'AF1506',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Shighnan',
			district_da: 'شغنان',
			district_code: 'AF1719',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Shindand',
			district_da: 'شیندند',
			district_code: 'AF3214',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Shinkay',
			district_da: 'شینکی',
			district_code: 'AF2603',
			district_en_alt: null,
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Shinwar',
			district_da: 'شینوار',
			district_code: 'AF0616',
			district_en_alt: 'Ghani Khail',
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Shinwari',
			district_da: 'شینواری',
			district_code: 'AF0303',
			district_en_alt: null,
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Shirin Tagab',
			district_da: 'شیرین تگاب',
			district_code: 'AF2906',
			district_en_alt: null,
			province_en: 'Faryab',
			province_da: 'فاریاب',
			province_code: 'AF29'
		},
		{
			district_en: 'Sholgareh',
			district_da: 'شولگره',
			district_code: 'AF2107',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Shorabak',
			district_da: 'شور آبک',
			district_code: 'AF2714',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Shortepa',
			district_da: 'شور تیپه',
			district_code: 'AF2112',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Shuhada',
			district_da: 'شهدا',
			district_code: 'AF1712',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Shutul',
			district_da: 'شُتل',
			district_code: 'AF0806',
			district_en_alt: null,
			province_en: 'Panjsher',
			province_da: 'پنجشیر',
			province_code: 'AF08'
		},
		{
			district_en: 'Sozmaqala',
			district_da: 'سوزمه قلعه',
			district_code: 'AF2204',
			district_en_alt: null,
			province_en: 'Sar-e-Pul',
			province_da: 'سرپل',
			province_code: 'AF22'
		},
		{
			district_en: 'Spera',
			district_da: 'سپیره',
			district_code: 'AF1411',
			district_en_alt: null,
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Spin Boldak',
			district_da: 'سپین بولدک',
			district_code: 'AF2711',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Surkh-e-Parsa',
			district_da: 'سرخ پارسا',
			district_code: 'AF0309',
			district_en_alt: null,
			province_en: 'Parwan',
			province_da: 'پروان',
			province_code: 'AF03'
		},
		{
			district_en: 'Surkh Rod',
			district_da: 'سرخ رود',
			district_code: 'AF0603',
			district_en_alt: null,
			province_en: 'Nangarhar',
			province_da: 'ننگرهار',
			province_code: 'AF06'
		},
		{
			district_en: 'Surobi',
			district_da: 'سروبی',
			district_code: 'AF0115',
			district_en_alt: null,
			province_en: 'Kabul',
			province_da: 'کابل',
			province_code: 'AF01'
		},
		{
			district_en: 'Surobi',
			district_da: 'سروبی',
			district_code: 'AF1210',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Tagab',
			district_da: 'تگاب',
			district_code: 'AF0206',
			district_en_alt: null,
			province_en: 'Kapisa',
			province_da: 'کاپیسا',
			province_code: 'AF02'
		},
		{
			district_en: 'Tagab',
			district_da: 'تگاب',
			district_code: 'AF1717',
			district_en_alt: 'Kishmi Bala',
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Tala Wa Barfak',
			district_da: 'تاله وبرفک',
			district_code: 'AF0911',
			district_en_alt: null,
			province_en: 'Baghlan',
			province_da: 'بغلان',
			province_code: 'AF09'
		},
		{
			district_en: 'Taloqan',
			district_da: 'تالقان',
			district_code: 'AF1801',
			district_en_alt: 'Centre',
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Tani',
			district_da: 'تنی',
			district_code: 'AF1404',
			district_en_alt: 'Dargai',
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Tarnak Wa Jaldak',
			district_da: 'ترنک و جلدک',
			district_code: 'AF2602',
			district_en_alt: 'Shahr-e-Safa',
			province_en: 'Zabul',
			province_da: 'زابل',
			province_code: 'AF26'
		},
		{
			district_en: 'Taywarah',
			district_da: 'تیوره',
			district_code: 'AF2308',
			district_en_alt: null,
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Terezayi',
			district_da: 'تری زائی',
			district_code: 'AF1408',
			district_en_alt: 'Ali Sher',
			province_en: 'Khost',
			province_da: 'خوست',
			province_code: 'AF14'
		},
		{
			district_en: 'Teshkan',
			district_da: 'تشکان',
			district_code: 'AF1711',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Tirinkot',
			district_da: 'تیرینکوت',
			district_code: 'AF2501',
			district_en_alt: 'Centre',
			province_en: 'Uruzgan',
			province_da: 'ارزگان',
			province_code: 'AF25'
		},
		{
			district_en: 'Tolak',
			district_da: 'تولک',
			district_code: 'AF2309',
			district_en_alt: null,
			province_en: 'Ghor',
			province_da: 'غور',
			province_code: 'AF23'
		},
		{
			district_en: 'Turwo',
			district_da: 'تروو',
			district_code: 'AF1219',
			district_en_alt: 'Tarwe',
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Urgun',
			district_da: 'ارگون',
			district_code: 'AF1211',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Waghaz',
			district_da: 'واغظ',
			district_code: 'AF1104',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Wakhan',
			district_da: 'واخان',
			district_code: 'AF1728',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Wal-e-Muhammad-e-Shahid',
			district_da: 'ولی محمد شهید',
			district_code: 'AF1102',
			district_en_alt: 'Khugyani',
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Wama',
			district_da: 'واما',
			district_code: 'AF1603',
			district_en_alt: null,
			province_en: 'Nuristan',
			province_da: 'نورستان',
			province_code: 'AF16'
		},
		{
			district_en: 'Waras',
			district_da: 'ورث',
			district_code: 'AF1007',
			district_en_alt: null,
			province_en: 'Bamyan',
			province_da: 'بامیان',
			province_code: 'AF10'
		},
		{
			district_en: 'Warduj',
			district_da: 'وردوج',
			district_code: 'AF1716',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Warsaj',
			district_da: 'ورسج',
			district_code: 'AF1813',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Washer',
			district_da: 'واشیر',
			district_code: 'AF3005',
			district_en_alt: null,
			province_en: 'Hilmand',
			province_da: 'هلمند',
			province_code: 'AF30'
		},
		{
			district_en: 'Watapur',
			district_da: 'وته پور',
			district_code: 'AF1503',
			district_en_alt: null,
			province_en: 'Kunar',
			province_da: 'کنر ها',
			province_code: 'AF15'
		},
		{
			district_en: 'Waygal',
			district_da: 'وایگل',
			district_code: 'AF1602',
			district_en_alt: null,
			province_en: 'Nuristan',
			province_da: 'نورستان',
			province_code: 'AF16'
		},
		{
			district_en: 'Wazakhah',
			district_da: 'وازه خواه',
			district_code: 'AF1217',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Wormamay',
			district_da: 'وړ ممی',
			district_code: 'AF1218',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Yaftal-e-Sufla',
			district_da: 'یفتل سفلی',
			district_code: 'AF1704',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Yahya Khel',
			district_da: 'یحی خیل',
			district_code: 'AF1204',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Yakawlang',
			district_da: 'یکاولنگ',
			district_code: 'AF1005',
			district_en_alt: null,
			province_en: 'Bamyan',
			province_da: 'بامیان',
			province_code: 'AF10'
		},
		{
			district_en: 'Yamgan',
			district_da: 'یمگان',
			district_code: 'AF1718',
			district_en_alt: 'Girwan',
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Yangi Qala',
			district_da: 'ینگی قلعه',
			district_code: 'AF1817',
			district_en_alt: null,
			province_en: 'Takhar',
			province_da: 'تخار',
			province_code: 'AF18'
		},
		{
			district_en: 'Yawan',
			district_da: 'یاوان',
			district_code: 'AF1709',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Yosuf Khel',
			district_da: 'یوسف خیل',
			district_code: 'AF1203',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Zadran',
			district_da: 'حّدران',
			district_code: 'AF1305',
			district_en_alt: 'Wuza Zadran',
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		},
		{
			district_en: 'Zanakhan',
			district_da: 'زنه خان',
			district_code: 'AF1108',
			district_en_alt: null,
			province_en: 'Ghazni',
			province_da: 'غزنی',
			province_code: 'AF11'
		},
		{
			district_en: 'Zaranj',
			district_da: 'زرنج',
			district_code: 'AF3401',
			district_en_alt: 'Centre',
			province_en: 'Nimroz',
			province_da: 'نیمروز',
			province_code: 'AF34'
		},
		{
			district_en: 'Zarghun Shahr',
			district_da: 'زرغون شهر',
			district_code: 'AF1207',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Zari',
			district_da: 'زاری',
			district_code: 'AF2115',
			district_en_alt: null,
			province_en: 'Balkh',
			province_da: 'بلخ',
			province_code: 'AF21'
		},
		{
			district_en: 'Zebak',
			district_da: 'زیباک',
			district_code: 'AF1725',
			district_en_alt: null,
			province_en: 'Badakhshan',
			province_da: 'بدخشان',
			province_code: 'AF17'
		},
		{
			district_en: 'Zheray',
			district_da: 'ژړۍ',
			district_code: 'AF2705',
			district_en_alt: null,
			province_en: 'Kandahar',
			province_da: 'کندهار',
			province_code: 'AF27'
		},
		{
			district_en: 'Zindajan',
			district_da: 'زنده جان',
			district_code: 'AF3205',
			district_en_alt: null,
			province_en: 'Hirat',
			province_da: 'هرات',
			province_code: 'AF32'
		},
		{
			district_en: 'Ziruk',
			district_da: 'زیړوک',
			district_code: 'AF1212',
			district_en_alt: null,
			province_en: 'Paktika',
			province_da: 'پکتیکا',
			province_code: 'AF12'
		},
		{
			district_en: 'Zurmat',
			district_da: 'زُرمت',
			district_code: 'AF1303',
			district_en_alt: null,
			province_en: 'Paktya',
			province_da: 'پکتیا',
			province_code: 'AF13'
		}
	];

	let provinces = {};

	districts.forEach((dist) => {
		provinces[dist.province_code] = [dist.province_en, dist.province_da];
	});
	return json({
		body: {
			districts,
			provinces
		}
	});
}
