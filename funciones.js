const selectTemplate = (src) =>{
    const activeSection = document.querySelector('.contenedor[style*="display: block"]');
    const cardOutput = activeSection.querySelector('.card');
    cardOutput.innerHTML = `<img src="${src}" style="width: 100%; border: 5px solid #fff;">`;
};

const generateCard = () => {
    const activeSection = document.querySelector('.contenedor[style*="display: block"]');
    const fuenteTexto = document.getElementById('fuenteTexto').options[document.getElementById('fuenteTexto').selectedIndex].style.fontFamily;
    const cardText = activeSection.querySelector('#cardText').value;
    const borderColor = activeSection.querySelector('#bordeTexto').value;
    const textColor = activeSection.querySelector('#colorTexto').value;

    const cardOutput = activeSection.querySelector('.card');
    const cardImage = cardOutput.querySelector('img');

    if (borderColor) {
        cardImage.style.borderColor = borderColor;
    }

    let cardCaption = cardOutput.querySelector('div');
    if (!cardCaption) {
        cardCaption = document.createElement('div');
        cardCaption.style.position = 'absolute';
        cardCaption.style.fontFamily = fuenteTexto;
        cardCaption.style.bottom = '20px';
        cardCaption.style.textAlign = 'center';
        cardCaption.style.width = '90%';
        cardOutput.appendChild(cardCaption);
    }
    cardCaption.style.color = textColor;
    cardCaption.textContent = cardText;

    let cardCapturar = cardOutputxd.querySelector('div');
    if (!cardCapturar) {
        cardCapturar = document.createElement('div');
        cardCapturar.style.position = 'absolute';
        cardCapturar.style.bottom = '20px';
        cardCapturar.style.textAlign = 'center';
        cardCapturar.style.width = '50%';
        cardOutputxd.appendChild(cardCapturar);
    }
    cardCapturar.style.color = textColor;
    cardCapturar.textContent = cardText;

    let memeCap = cardOutputAle.querySelector('div');
    if (!memeCap) {
        memeCap = document.createElement('div');
        memeCap.style.position = 'absolute';
        memeCap.style.bottom = '20px';
        memeCap.style.textAlign = 'center';
        memeCap.style.width = '50%';
        cardOutputAle.appendChild(memeCap);
    }
    memeCap.style.color = textColor;
    memeCap.textContent = cardText;
};


document.getElementById('temas').addEventListener('change', (event) => {
    document.querySelectorAll('.contenedor').forEach(section => section.style.display = 'none');
    const selectedSection = document.getElementById(event.target.value);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
});
