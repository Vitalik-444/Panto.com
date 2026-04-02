document.querySelectorAll(
    '.feature-item, .why-title, .product .block1, ' +
    '.experiences-title, .main-text, .regular-text, .main-link, ' +
    '.double-image, .main-image, .text-block, ' +
    '.footer-brand, .footer-col, .text-block2'
).forEach((el, i) => {
    const cls = i % 3 === 0 ? 'fade-left' : i % 3 === 1 ? 'fade-up' : 'fade-right';
    el.classList.add(cls);
});

document.querySelectorAll(
    '.testimonial-card, .testimonial-card2, .testimonial-card3, .block'
).forEach((el, i) => {
    el.classList.add(i % 2 === 0 ? 'fade-left-strong' : 'fade-right-strong');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
            const delay = el.dataset.delay || 0;
            setTimeout(() => el.classList.add('visible'), Number(delay));
        } else {
            el.classList.remove('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.feature-item').forEach((el, i) => {
    el.dataset.delay = i * 150;
});

document.querySelectorAll('.product .block1').forEach((el, i) => {
    el.dataset.delay = i * 120;
});

document.querySelectorAll('.footer-col').forEach((el, i) => {
    el.dataset.delay = i * 100;
});

document.querySelectorAll(
    '.feature-item, .why-title, .product .block1, ' +
    '.experiences-title, .main-text, .regular-text, .main-link, ' +
    '.double-image, .main-image, .text-block, ' +
    '.testimonial-card, .testimonial-card2, .testimonial-card3, ' +
    '.block, .footer-brand, .footer-col, .text-block2'
).forEach(el => observer.observe(el));