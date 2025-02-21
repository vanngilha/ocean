function openModal(title, description, imgSrc) {
    let modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-image').src = imgSrc;
    modal.style.display = 'flex';
}

function closeModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
}


