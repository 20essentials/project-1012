document.addEventListener('click', e => {
  if (e.target.matches('.logout') || e.target.matches('.logout *')) {
    fetch('/logout', {
      method: 'POST'
    }).then(() => {
      window.location.href = '/login';
    });
  }
});

