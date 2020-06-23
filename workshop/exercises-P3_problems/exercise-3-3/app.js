// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const btnList = document.querySelector('#btn-list')
const btns = document.querySelectorAll('button');
const resetBtn = document.querySelector('#reset');

for(let i=0; i<btns.length; i++) {
    btns[i].style.background  = 'yellow';
}

btns[0].style.opacity = '100%';

const toggleBtn = (e) => {
    const btnIds = e.target.id;
    const selectedBtn = document.querySelector(`#${btnIds}`);

    switch(btnIds) {
        case 'btn-1':
            if(selectedBtn.style.opacity === '1') {
                selectedBtn.style.opacity = '0%';
            } else {
                selectedBtn.style.opacity = '100%';
            }
            break;
        case 'btn-2':
            if(selectedBtn.style.background === 'yellow') {
                selectedBtn.style.background = 'crimson';
            } else {
                selectedBtn.style.background = 'yellow';
            }
            break;
        case 'btn-3':
            if(selectedBtn.style.background === 'yellow') {
                selectedBtn.style.background = 'lightblue';
            } else {
                selectedBtn.style.background = 'yellow';
            }
            break;
        case 'btn-4':
            selectedBtn.classList.toggle('jitters');
            break;
        default:
            break;
    }
}

const resetBtnState = () => {
    for(let i=0; i<btns.length; i++) {
        btns[i].style.background  = 'yellow';
        btns[i].style.opacity  = '100%';
        btns[i].classList.remove('jitters');
    }
}

btnList.addEventListener('click', toggleBtn);
resetBtn.addEventListener('click', resetBtnState);