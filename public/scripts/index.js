import { surnames, names } from "./constants.js";

const generate = () => {
    const updateFullName = (gender) => {
        const quantityNames = Math.floor(Math.random() * 2) + 1;
        const specifyNames = names[gender];
        let fullName = "";
        for (let i = 0; i < quantityNames; i++) {
            fullName += specifyNames[Math.floor(Math.random() * specifyNames.length)] + " ";
        }
        fullName += surnames[Math.floor(Math.random() * surnames.length)] + " ";
        fullName += surnames[Math.floor(Math.random() * surnames.length)];
        fullName = fullName.trim();
        document.querySelector('#name-aleatory h2').innerText = fullName;
    };

    const btnMale = document.querySelector('#btn-man');
    btnMale.addEventListener('click', () => updateFullName('male'));

    const btnFemale = document.querySelector('#btn-woman');
    btnFemale.addEventListener('click', () => updateFullName('female'));

    const btnGeneral = document.querySelector('#btn-general');
    btnGeneral.addEventListener('click', () => {
        let gender;
        if (Math.random() < 0.5) {
            gender = 'male';
        } else {
            gender = 'female';
        }
        updateFullName(gender);
    });


};
generate();