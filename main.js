onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 5000);
  };

  document.addEventListener('DOMContentLoaded', function() {
    const titles = ['para Juliana', 'Una mujer con una sonrisa encantadora',' y una voluntad inquebrantable', 'a la cual espero conocer mas y compartir con ella','Att: Luis'];
    let index = 0;
  
    function changeTitle() {
      document.getElementById('title').textContent = titles[index];
      index = (index + 1) % titles.length;
    }
  
    setInterval(changeTitle, 4000);
  });
  