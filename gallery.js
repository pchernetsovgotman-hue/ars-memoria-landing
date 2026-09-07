// Скрипт для галереи
let currentSlide = 0;
const track = document.getElementById('galleryTrack');
const slides = document.querySelectorAll('.gallery-slide');

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
}

// Модальное окно
function openModal(image, title, price, desc) {
    document.getElementById('modalImage').src = image;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('productModal').classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}