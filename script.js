document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary');
  
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Sección en desarrollo. ¡Gracias por tu interés!');
      });
    });
  });