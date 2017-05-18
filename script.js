const BASE = "https://api.github.com/repos/lovasoa/sha_hashes/contents/hashes/sha1";
const form = document.querySelector("form");
const response = document.querySelector("#response");

function onsubmit(evt) {
  evt.preventDefault();
  var hash = form.elements.hash.value;
  var folders = hash.substring(0,4).split("").join("/");
  var url = BASE + '/' + folders + '/' + hash;
  response.textContent = "Loading...";
  fetch(url, {
    headers: {
      "Accept": "application/vnd.github.VERSION.raw"
    }
  }).then(r => r.ok ? r.text() : r.json().then(x=>Promise.reject(x)))
    .then(handle).catch(error);
}

function handle(resp) {
  response.className = "success";
  response.textContent = resp;
}

function error(resp) {
  response.className = "error";
  response.textContent = resp.message || JSON.stringify(resp);
  console.error(resp);
}

form.addEventListener("submit", onsubmit);