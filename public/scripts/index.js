import { SURNAMES, NAMES, GENDERS } from './constants.js';
const getRandomNumber = (max = 11) => {
    return Math.floor(Math.random() * max);
};
const generateFullName = (gender) => {
    const quantityNAMES = getRandomNumber(2) + 1;
    const specifyNAMES = NAMES[gender];
    let fullName = '';
    for (let i = 0; i < quantityNAMES; i++) {
        fullName += specifyNAMES[getRandomNumber(specifyNAMES.length)] + ' ';
    }
    fullName += SURNAMES[getRandomNumber(SURNAMES.length)] + ' ';
    fullName += SURNAMES[getRandomNumber(SURNAMES.length)];
    fullName = fullName.trim();
    //Llenando nombre aleatorio
    document.querySelector('#name-aleatory h2').innerText = fullName;
};
const updateGeneralFullName = () => {
    const gender = Math.random() < 0.5 ? GENDERS.MALE : GENDERS.FEMALE;
    generateFullName(gender);
};
const initialize = () => {
    // Inicializando botones
    document.querySelector('#btn-man')
        .addEventListener('click', () => generateFullName(GENDERS.MALE));
    document.querySelector('#btn-woman')
        .addEventListener('click', () => generateFullName(GENDERS.FEMALE));
    document.querySelector('#btn-general')
        .addEventListener('click', updateGeneralFullName);
};
initialize();