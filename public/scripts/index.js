import { surnames, names, GENDERS } from './constants.js';
const getRandomNumber = (max = 11) => {
    return Math.floor(Math.random() * max);
};
const generateFullName = (gender) => {
    const quantityNames = getRandomNumber(2) + 1;
    const specifyNames = names[gender];
    let fullName = '';
    for (let i = 0; i < quantityNames; i++) {
        fullName += specifyNames[getRandomNumber(specifyNames.length)] + ' ';
    }
    fullName += surnames[getRandomNumber(surnames.length)] + ' ';
    fullName += surnames[getRandomNumber(surnames.length)];
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