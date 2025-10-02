// Popup elements
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupDesc = document.getElementById('popup-desc');
const closeBtn = document.getElementById('close');
const backBtn = document.getElementById('back-btn');

// Open popup when clicking character
document.querySelectorAll('.character').forEach(character => {
  character.addEventListener('click', () => {
    const imgSrc = character.getAttribute('data-full');
    const desc = character.querySelector('.char-desc p').textContent;
    popupImg.src = imgSrc;
    popupDesc.textContent = desc;
    popup.style.display = 'flex';
  });
});

// Close popup with ×
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup with Back button
backBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup if clicking outside image
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
