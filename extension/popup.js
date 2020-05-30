document.addEventListener(
  'DOMContentLoaded',
  function () {
    function parseString(htmlString) {
      let parser = new DOMParser();
      let parsedHtml = parser.parseFromString(htmlString, 'text/html');
      let cotizaciones = parsedHtml.querySelectorAll('.pill-coti');

      for (let i = 0; i < cotizaciones.length; i++) {
        let rowIndex = Math.trunc(i / 2);
        let title = cotizaciones[i].getElementsByTagName('a')[0].innerText;
        cotizaciones[i].getElementsByTagName('h4')[0].innerText = title;
        document
          .getElementsByClassName('pill-col')
          [rowIndex].appendChild(cotizaciones[i]);
      }
    }

    fetch('https://dolarhoy.com')
      .then((response) => response.text())
      .then((html) => parseString(html));

    // var checkPageButton = document.getElementById('checkPage');
    // checkPageButton.addEventListener(
    //   'click',
    //   function () {
    //     console.log('clicked');
    //   },
    //   false
    // );
  },
  false
);
