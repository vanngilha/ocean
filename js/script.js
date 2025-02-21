function openModal(title, description, imgSrc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-image').src = imgSrc;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}