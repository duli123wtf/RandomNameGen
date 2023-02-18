export const renderRandomFullName = randomFullName => {
    document.querySelector('#name-aleatory h2').innerText = randomFullName;
}
export const initButtons = ({
    onMale,
    onFemale,
    onGeneral
}) => {
    // Inicializando botones
    document.querySelector('#btn-man')
        .addEventListener('click', onMale);
    document.querySelector('#btn-woman')
        .addEventListener('click', onFemale);
    document.querySelector('#btn-general')
        .addEventListener('click', onGeneral);
}