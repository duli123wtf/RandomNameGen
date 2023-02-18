import { surnames, names, GENDERS } from "./constants.js";
// getRandomNumber(11) #0-10
const generateFullName = (gender) => {
    if (!gender) return;
    const quantityNames = getRandomNumber(2);
    const specifyNames = names[gender];
    let fullName = "";
    for (let i = 0; i < quantityNames; i++) {
        fullName += specifyNames[getRandomNumber(specifyNames.length)] + " ";
    }
    fullName += surnames[getRandomNumber(surnames.length)] + " ";
    fullName += surnames[getRandomNumber(surnames.length)];
    fullName = fullName.trim();
    // Llenando nombre aleatorio
    document.querySelector('#name-aleatory h2').innerText = fullName;
}
const getGender = randomNumber => {
    if (randomNumber < 0.3)
        return GENDERS.MALE;
    if (randomNumber < 0.6) 
        return GENDERS.FEMALE;
    return null;
}
const generateGeneralFullName = () => {
    generateFullName(getGender(randomNumber));
}
const initialize = () => {
    // Inicializando botones
    document.querySelector('#btn-man')
        .addEventListener('click', () => generateFullName(GENDERS.MALE));
    document.querySelector('#btn-woman')
        .addEventListener('click', () => generateFullName(GENDERS.FEMALE));
    document.querySelector('#btn-general')
        .addEventListener('click', generateGeneralFullName);
};
initialize();