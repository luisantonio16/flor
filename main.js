onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 5000);
  };

  document.addEventListener('DOMContentLoaded', function() {
    const titles = ['Feliz dia de la mujer', 'para una mujer con una sonrisa encantadora', 'a la cual espero conocer y compartir con ella.'];
    let index = 0;
  
    function changeTitle() {
      document.getElementById('title').textContent = titles[index];
      index = (index + 1) % titles.length;
    }
  
    setInterval(changeTitle, 7000);
  });
  