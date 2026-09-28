fetch("https://cantone.com.ar/datos2.txt")
  .then(res => res.text())
  .then(data => console.log(data))
  .catch(err => console.error(err));