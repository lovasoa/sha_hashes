/**
 * Takes a password hash and returns a promise that resolves to the password
 * @param {string} hash
 * @returns {Promise<string>} password
 **/
function reverse_hash(hash) {
  const BASE = "https://api.github.com/repos/lovasoa/sha_hashes/contents/hashes/sha1";
  var folders = hash.substring(0,4).split("").join("/");
  var url = BASE + '/' + folders + '/' + hash;
  const options = {
    headers: {
      "Accept": "application/vnd.github.VERSION.raw"
    }
  };
  return fetch(url, options)
    .then(r => r.ok ?
                  r.text() :
                  r.json().then(x => Promise.reject(x))
    );
}

(function(){

function onsubmit(evt) {
  evt.preventDefault();
  response.textContent = "Loading...";
  function handle(resp) {
    response.className = "success";
    response.textContent = resp;
  }
  function error(resp) {
    response.className = "error";
    response.textContent = resp.message || JSON.stringify(resp);
    console.error(resp);
  }
  reverse_hash(form.elements.hash.value).then(handle).catch(error);
}

const form = document.querySelector("form");
const response = document.querySelector("#response");
form.addEventListener("submit", onsubmit);
})();
