  // LOADER LOGO

  const loaderScreen = () => {
    bodyContainer = document.querySelector('body');
    loaderContainer = document.createElement('div');
    loaderContainer.id = 'loaderScreen';
    loaderContainer.classList.add('w3-sidebar', 'w3-display-container', 'w3-animate-opacity');
    loaderContainer.style = 'width:100vw; height:100vh; z-index:10';
      loaderLogo = document.createElement('img');
      loaderLogo.classList.add('w3-display-middle', 'w3-image', 'w3-spin');
      loaderLogo.setAttribute('alt', 'Logo loader');
      loaderLogo.setAttribute('src', 'https://1.bp.blogspot.com/-39q_5fQ3b5g/YKxVvLdttcI/AAAAAAABAc0/NqYQJ4hjIoIACoP6wcCk1JIPFYBXdIL1gCLcBGAsYHQ/s200/logo_cad_transparencia.png');
    bodyContainer.appendChild(loaderContainer);
      loaderContainer.appendChild(loaderLogo);
  }
  loaderScreen();

  window.addEventListener('load', () => document.querySelector('#loaderScreen').classList.add('w3-hide'));
