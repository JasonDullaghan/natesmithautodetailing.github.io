fetch("html/templates/header.html")
  .then(response => response.text())
  .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
  });