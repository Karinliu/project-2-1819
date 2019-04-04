document.addEventListener("DOMContentLoaded", function() {
  var lazyloadSection = document.querySelectorAll(".lazy");  
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.scrollY;
        lazyloadSection.forEach(function(element) {
            if(element.offsetTop < (window.innerHeight + scrollTop)) {
              element.src = element.dataset.src;
              element.classList.remove('lazy');
              element.classList.add('fade');
            }
        });
        if(lazyloadSection.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
