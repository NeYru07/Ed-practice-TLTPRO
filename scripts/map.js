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

	map.controls.remove('geolocationControl');
	map.controls.remove('searchControl');
	map.controls.remove('trafficControl');
	map.controls.remove('typeSelector');
	map.controls.remove('fullscreenControl');
	map.controls.remove('zoomControl');
	map.controls.remove('rulerControl');

	map.geoObjects.add(placemark);
}

ymaps.ready(init);