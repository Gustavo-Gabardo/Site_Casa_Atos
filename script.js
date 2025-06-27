// script.js - Centraliza todo o JS do site Igreja Casa Atos

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking a link
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Image carousel for hero section
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-img');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentImageIndex = 0;
    // Create dots
    carouselImages.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
        dot.addEventListener('click', () => showImage(idx));
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.carousel-dot');
    function showImage(idx) {
        carouselImages[currentImageIndex].classList.remove('opacity-100');
        carouselImages[currentImageIndex].classList.add('opacity-0');
        dots[currentImageIndex].classList.remove('active');
        currentImageIndex = idx;
        carouselImages[currentImageIndex].classList.remove('opacity-0');
        carouselImages[currentImageIndex].classList.add('opacity-100');
        dots[currentImageIndex].classList.add('active');
    }
    function showNextImage() {
        showImage((currentImageIndex + 1) % carouselImages.length);
    }
    setInterval(showNextImage, 5000);
});

function toggleDcecInfo() {
    var info = document.getElementById('dcec-info');
    if (info.classList.contains('hidden')) {
        info.classList.remove('hidden');
        info.scrollIntoView({behavior: 'smooth', block: 'center'});
    } else {
        info.classList.add('hidden');
    }
}

// Abrir/Fechar modal de contribuição
document.getElementById('contribua-btn').onclick = function(e) {
    e.preventDefault();
    document.getElementById('contribua-modal').classList.remove('hidden');
};

// Botão para mostrar/ocultar mapa DCEC
document.getElementById('btn-mapa-dcec').onclick = function() {
    var mapa = document.getElementById('mapa-dcec');
    if (mapa.classList.contains('hidden')) {
        mapa.classList.remove('hidden');
        mapa.scrollIntoView({behavior: 'smooth', block: 'center'});
    } else {
        mapa.classList.add('hidden');
    }
};

// Garante que o botão X fixo feche o modal mesmo se houver outros botões de fechar
Array.from(document.getElementsByClassName('dcec-close-global')).forEach(btn => {
  btn.onclick = function() {
    toggleDcecInfo();
  };
});
