const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      
      const image = document.querySelector('#animated-image ');
      image.style.transform = `translateY(0) rotate(-6deg)`;
      observer.disconnect();
    }
  }, {
    threshold: 1.0, 
  });
  observer.observe(document.querySelector('#animated-image'));
  
  const multiplayerObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      
      const multiplayerImage = document.querySelector('#multiplayerimage');
      multiplayerImage.style.transform = `translateY(0) `;
  
      multiplayerObserver.disconnect();
       
     
  
    }
  }, {
    threshold: 1.0, 
  });
  
  multiplayerObserver.observe(document.querySelector('#multiplayerimage'));
  
  
  const multiplayerimageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
     
      const multiplayerimageImage = document.querySelector('#m-image ');
      multiplayerimageImage.style.transform = `translateY(0) rotate(7deg) `;
  
      multiplayerimageObserver.disconnect();
       
     
  
    }
  }, {
    threshold: 1.0, 
  });
  
  multiplayerimageObserver.observe(document.querySelector('#m-image'));
  
  
  
  
  
  const zombieObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      
      const zombieImage = document.querySelector('#zombieimage');
      zombieImage.style.transform = `translateY(0px) `;
      zombieObserver.disconnect();
    }
  }, {
    threshold: 1.0, 
  });
  
  zombieObserver.observe(document.querySelector('#zombieimage'));
  
  const zombieimageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const zombieimageImage = document.querySelector('#z-image');
      zombieimageImage.style.transform = `translateY(0) rotate(-6deg)`;
      zombieimageObserver.disconnect();
    }
  }, {
    threshold: 1.0, 
  });
  
  zombieimageObserver.observe(document.querySelector('#z-image'));

 