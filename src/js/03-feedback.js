import throttle from 'lodash.throttle';

const formRefs = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state'; // ключ для сховища
const formData = {} 

formRefs.addEventListener('input', throttle(onFormData, 500));
formRefs.addEventListener('submit', onFormSubmit);

SaveData();

function onFormSubmit(e) {
    e.preventDefault();

formData.email = formRefs.elements.email.value;
formData.message = formRefs.elements.message.value;
console.log(formData);

formRefs.reset();

localStorage.removeItem(STORAGE_KEY);
}

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function SaveData() {
    let savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parceSaveData = JSON.parse(savedData);

        for (const prop in parceSaveData) {
            if (parceSaveData.hasOwnProperty(prop)) {
                formRefs.elements[prop].value = parceSaveData[prop];
                formData[prop] = parceSaveData[prop];
            }
    }
}
}
