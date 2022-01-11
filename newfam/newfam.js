import { 
    logout,
    checkAuth,
    createFamily
} from '../fetch-utils.js';

const form = document.querySelector('.family-form');
const logoutButton = document.getElementById('logout');


form.addEventListener('submit', async e => {

    e.preventDefault();

    const data = new FormData(form);

    const name = data.get('family-name');

    await createFamily({
        name: name
    });
    
    form.reset();
});



checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});