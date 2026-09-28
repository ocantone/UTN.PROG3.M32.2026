fetch("https://cantone.com.ar/datos.txt")
  .then(res => res.text())
  .then(data => console.log(data))
  .catch(err => console.error(err));