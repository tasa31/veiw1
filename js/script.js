document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        document.querySelector(this.getAttribute('href'))
                                .scrollIntoView({
                                        behavior: 'smooth'
                                });
                });
        });

function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function() {
                const context = this;
                const args = arguments;
                if (!lastRan) {
                        func.apply(context, args);
                        lastRan = Date.now();
                } else {
                        clearTimeout(lastFunc);
                        lastFunc = setTimeout(function() {
                                if ((Date.now() - lastRan) >= limit) {
                                        func.apply(context, args);
                                        lastRan = Date.now();
                                }
                        }, limit - (Date.now() - lastRan));
                }
        }
}

document.addEventListener('DOMContentLoaded', () => {
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

        const animateOnScroll = () => {
                const windowHeight = window.innerHeight;
                elementsToAnimate.forEach(element => {
                        const elementTop = element.getBoundingClientRect()
                                .top;
                        if (elementTop < windowHeight - 150) {
                                element.classList.add('animated');
                        }
                });
        };

        animateOnScroll();
        window.addEventListener('scroll', throttle(animateOnScroll, 100));
});

window.addEventListener('scroll', throttle(() => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
                header.classList.add('scrolled');
        } else {
                header.classList.remove('scrolled');
        }
}, 100));


document.addEventListener('DOMContentLoaded', function() {
        const faqItems = document.querySelectorAll('.faq-item h3');

        faqItems.forEach(item => {
                item.addEventListener('click', function() {
                        const faqItem = this.parentElement;
                        faqItem.classList.toggle('active');

                        faqItems.forEach(otherItem => {
                                if (otherItem !== this && otherItem.parentElement.classList.contains('active')) {
                                        otherItem.parentElement.classList.remove('active');
                                }
                        });
                });
        });
});

document.addEventListener('DOMContentLoaded', function() {
        const texts = document.querySelectorAll('.testimonial-text');
        const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;

        function showText(index) {
                texts.forEach((text, i) => {
                        text.classList.toggle('active', i === index);
                });
                dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === index);
                });
                currentIndex = index;
        }

        function showNextText() {
                const nextIndex = (currentIndex + 1) % texts.length;
                showText(nextIndex);
        }

        showText(currentIndex);

        setInterval(showNextText, 5000);

        dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                        showText(index);
                });
        });
});