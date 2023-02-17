import { surnames, names } from "./constants.js";

const updateFullName = (gender) => {
    const quantityNames = Math.floor(Math.random() * 2) + 1;
    let fullName = "";
    const specifyNames = names[gender];
    for (let i = 0; i < quantityNames; i++) {
        fullName += specifyNames[Math.floor(Math.random() * specifyNames.length)] + " ";
    }
    // Manuel 
    // Manuel Rivera Becerra 
    // const firstName = nameGenerators[gender]();
    // let secondName, names;
    // if (randomNumber > 0.5) {
    //     secondName = nameGenerators[gender]();
    //     names = firstName + ' ' + secondName;
    // } else {
    //     names = firstName;
    // }

    // const surname1 = generateSurname();
    // const surname2 = generateSurname();
    // const fullName = names + ' ' + surname1 + ' ' + surname2;
    // document.querySelector('#name-aleatory h2').innerText = fullName;
}
const initialize = () => {
    document.getElementById('btn-man').addEventListener('click', () => {
        updateFullName('male');
    });
    document.getElementById('btn-woman').addEventListener('click', () => {
        updateFullName('female');
    });
    document.getElementById('btn-general').addEventListener('click', () => {
        updateFullName('general');
    });
}
initialize();