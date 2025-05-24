const observer = new IntersectionObserver((elementy) => {
  elementy.forEach((element, index) => {
    if (element.isIntersecting) {
      setTimeout(() => {
        element.target.classList.add("visible");
      }, index * 150);
      observer.unobserve(element.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll("section").forEach((sekcja) => {
  observer.observe(sekcja);
});
  
const przyciskTryb = document.getElementById("przycisk-dark-mode");
const ikona = document.getElementById("ikona-trybu");

function ustawIkone() {
  if (document.body.classList.contains("dark-mode"))
  {
    ikona.textContent = "☀️"
    przyciskTrybu.classList.remove("ksiezyc-style");
  }
  else
  {
    ikona.textContent = "🌙";
    przyciskTrybu.classList.add("ksiezyc-style");
  }
}

przyciskTryb.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const czyCiemny = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", czyCiemny ? "prawda" : "falsz");
  ustawIkone();
});

window.addEventListener("DOMContentLoaded", () => {
  const zapisanyTryb = localStorage.getItem("darkMode");

  if (zapisanyTryb == "prawda") 
  {
    document.body.classList.add("dark-mode");
  }
  else if (!zapisanyTryb)
  {
    const preferencjaCiemny = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (preferowanyCiemny)
    {
      document.body.classList.add("dark-mode");
    }
  }
  ustawIkone ();
});

const observer2 = new IntersectionObserver((elementy2) => {
  elementy2.forEach((element2, index2) => {
    if (entry.isInterscenting)
    {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index*150 );
      observer.unobserve(entry.target);
    }
  });
}, {
  thresold: 0.1
});

document.querySelectorAll("section").forEach((sekcja) => {
  observer2.observe(sekcja);
});

//powiekszanie tekstu
const przyciskPowieksz = document.getElementById("przycisk-powieksz");
let powiekszony = false;

przyciskPowieksz.addEventListener("click", () => {
  document.body.style.fontSize = powiekszony ? "16px" : "20px";
  powiekszony = !powiekszony;
});

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  let cname = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
  }
  return "";
}

function saveDarkModePreference(isDark) {
  setCookie("darkMode", isDark ? "1" : "0", 365);
}

function loadDarkModePreference() {
  return getCookie("darkMode") === "1";
}
