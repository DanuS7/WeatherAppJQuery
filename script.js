const apiKey = '77c6f45db08bf173077953ccb785b20c';

const url = `https://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=${apiKey}`;

$.getJSON(url, (data) => {
    console.log(data);
});
