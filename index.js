// calculate speed
document.getElementsByClassName('btn_speed')[0].addEventListener('click', () => {  // делаем стрелочную функцию, которая срабатывает при нажатии на нашу кнопку с классом btn-speed
    let distanceForSpeed = document.getElementsByClassName('distance_for_speed')[0].value; // получаем значения введенных данных для занесения их в переменную
    let speedTime = document.getElementsByClassName('speed_time')[0].value;
    if (isNaN(distanceForSpeed)) {
        alert('Введите число в поле "Расстояние"');
    } else if (isNaN(speedTime)) {
        alert('Введите число в поле "Время".');
    } else {
        let speedMeasurementSelect = document.getElementById('speed_measurement');
        let speedMeasurementSystem = speedMeasurementSelect.selectedIndex;
        let speedResult = distanceForSpeed / speedTime;
        document.getElementsByClassName('speed_result')[0].innerHTML = 'Speed: ' + speedResult + " " + speedMeasurementSelect.options[speedMeasurementSystem].text;
    }
}); 