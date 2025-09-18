 tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Poppins', 'sans-serif'],
            },
            colors: {
              'primary-blue': '#007BFF',   
              'secondary-green': '#16cb5bff',  
              'light-bg': '#F8F9FA',      
              'dark-text': '#212529',     
              'gray-text': '#495057',     
              'border-color': '#DEE2E6',  
              'footer-bg': '#343A40',     
              'footer-text': '#ADB5BD',   
            }
          }
        }
      }
 
 
 const sections = document.querySelectorAll('.fade-in-section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        sections.forEach(section => {
            observer.observe(section);
        });