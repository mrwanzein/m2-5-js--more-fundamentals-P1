// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const btnList = document.querySelector('#btn-list');

const btnEvents = (e) => {
    const getBtnId = e.target.id;
    const targetedBtn = document.querySelector(`#${getBtnId}`);

    switch(getBtnId) {
        case 'btn-1':
            targetedBtn.style.opacity = '0%';
            break;
        case 'btn-2':
            targetedBtn.style.background = 'crimson';
            break;
        case 'btn-3':
            targetedBtn.style.background = 'lightblue';
            break;
        case 'btn-4':
            targetedBtn.classList.add('jitters');
            break;
        default:
            break;
    }
}

btnList.addEventListener('click', btnEvents);