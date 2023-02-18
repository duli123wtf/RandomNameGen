import { NAMES, SURNAMES, GENDERS } from "./constants.js";

const getRandomNumber = (max = 2) => {
    return Math.floor(Math.random() * max);
}
export const getRandomGender = () => {
    return Math.random() < 0.5 ? GENDERS.MALE : GENDERS.FEMALE;
}
export const getRandomFullName = gender => {
    const quantityNAMES = getRandomNumber(2) + 1;
    const specifyNAMES = NAMES[gender];
    let fullName = '';
    for (let i = 0; i < quantityNAMES; i++) {
        fullName += specifyNAMES[getRandomNumber(specifyNAMES.length)] + ' ';
    }
    fullName += SURNAMES[getRandomNumber(SURNAMES.length)] + ' ';
    fullName += SURNAMES[getRandomNumber(SURNAMES.length)];
    fullName = fullName.trim();
    return fullName;
}