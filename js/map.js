ymaps.ready(init);
 
function init(){     
 
    var myMap;
 
    myMap = new ymaps.Map("yandex-map", {
        center: [45.043837, 38.942915],
        zoom: 18,
        controls: []
    });
 
    myMap.behaviors.disable('scrollZoom');
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
 
    var myPlacemark = new ymaps.Placemark([45.043407, 38.944506] , {},
        { iconLayout: 'default#image',
          iconImageHref: 'img/pin.png',
          iconImageSize: [231, 190],
          iconImageOffset: [-100, -180] });     
 
    myMap.geoObjects.add(myPlacemark);
 
}