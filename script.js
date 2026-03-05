//your JS code here. If required.
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
  let cname = name + "=";
  let cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();

    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length);
    }
  }
  return "";
}

window.onload = function () {
  let size = getCookie("fontsize");
  let color = getCookie("fontcolor");

  if (size) {
    document.documentElement.style.setProperty("--fontsize", size);
    document.getElementById("fontsize").value = parseInt(size);
  }

  if (color) {
    document.documentElement.style.setProperty("--fontcolor", color);
    document.getElementById("fontcolor").value = color;
  }
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let size = document.getElementById("fontsize").value + "px";
  let color = document.getElementById("fontcolor").value;

  document.documentElement.style.setProperty("--fontsize", size);
  document.documentElement.style.setProperty("--fontcolor", color);

  setCookie("fontsize", size);
  setCookie("fontcolor", color);
});