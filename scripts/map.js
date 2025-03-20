let center = [53.53082219621783,49.42987604232789];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});

	let placemark = new ymaps.Placemark(center, {
		balloonContentHeader: 'TLT PRO',
		balloonContentBody: 'Главный офис',
	}, {
		iconLayout: 'default#image',
		iconImageHref: '../src/svg/Mark.svg',
		iconImageSize: [20, 20],
		iconImageOffset: [-7, -15]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил

	map.geoObjects.add(placemark);
}

ymaps.ready(init);