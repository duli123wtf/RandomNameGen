import { GENDERS } from "./constants.js";
import { getRandomFullName, getRandomGender } from "./logic.js";
import { initButtons, renderRandomFullName } from "./ui.js";

const generateBtnHandlers = {
    onMale: () => renderRandomFullName(getRandomFullName(GENDERS.MALE)),
    onFemale: () => renderRandomFullName(getRandomFullName(GENDERS.FEMALE)),
    onGeneral: () => {
        const gender = getRandomGender();
        renderRandomFullName(getRandomFullName(gender));
    }
};
const initialize = () => {
    initButtons(generateBtnHandlers);
};
initialize();