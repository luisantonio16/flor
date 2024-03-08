onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 4000);
  };

  document.addEventListener('DOMContentLoaded', function() {
    const titles = ['Feliz dia de la mujer', 'para Juliana una mujer con una sonrisa encantadora', 'a la cual espero conocer mas y compartir con ella'];
    let index = 0;
  
    function changeTitle() {
      document.getElementById('title').textContent = titles[index];
      index = (index + 1) % titles.length;
    }
  
    setInterval(changeTitle, 8000);
  });
  