//your JS code here. If required.
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
  let cname = name + "=";
  let cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

window.onload = function() {
  let savedSize = getCookie("fontsize");
  let savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize);
    document.getElementById("fontsize").value = parseInt(savedSize);
  }

  if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    document.getElementById("fontcolor").value = savedColor;
  }
};


function savePreferences(event) {
  event.preventDefault();

  let size = document.getElementById("fontsize").value + "px";
  let color = document.getElementById("fontcolor").value;


  document.documentElement.style.setProperty("--fontsize", size);
  document.documentElement.style.setProperty("--fontcolor", color);


  setCookie("fontsize", size, 30);
  setCookie("fontcolor", color, 30);
}