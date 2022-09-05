const button = document.querySelector("button");
const ipText = document.querySelector(".ip");
const region = document.querySelector(".region");
const postalCode = document.querySelector(".postalCode");
const timeZone = document.querySelector(".timezone");
const isp = document.querySelector(".isp");

const apiKey = "at_FtamSSfLENRiZ7fUsTmfLTU9FjRUn";
let ipAddress = "192.212.174.101";
let url;
let lat = 0;
let lng = 0;
var map;

getInfo(lat, lng);
let dataJson;

function getInfo(lat, lng, zoom = 17) {
  url = getUrl(apiKey, ipAddress);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dataJson = data;
      lat = data.location.lat;
      lng = data.location.lng;
    });

  setTimeout(() => {
    /* UI Text Changes */
    ipText.textContent = dataJson.ip;
    timeZone.textContent = "UTC " + dataJson.location.timezone;
    region.textContent =
      dataJson.location.city + "," + dataJson.location.region;
    postalCode.textContent = dataJson.location.postalCode;
    isp.textContent = dataJson.isp;
    document.querySelector(".isp2").textContent = "";
    /*  UI Text Changes Finished */

    /*  Map Changes */
    map = L.map("map").setView([lat, lng], zoom);

    var mapIcon = L.icon({
      iconUrl: "images/icon-location.svg",
      iconSize: [35, 45],
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      // Specify the maximum zoom of the map
      maxZoom: 19,

      // Set the attribution for OpenStreetMaps
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    var marker = L.marker([lat, lng], { icon: mapIcon }).addTo(map);
    /*  Map Changes Finished */
  }, 1200);
}

function getUrl(apiKey, ipAddress) {
  return `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
}

button.addEventListener("click", function () {
  ipAddress = document.querySelector("input").value;

  if (ipAddress.length !== 0) {
    map.off();
    map.remove();
    getInfo(lat, lng, 17);
  }
});
