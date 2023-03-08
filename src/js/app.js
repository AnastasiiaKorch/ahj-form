import Popover from "./popover";

const button = document.querySelector('.btn');
const text = 'And here s some amazing content';
const title = 'Popover title';


const popover = new Popover(text, title, button);

button.addEventListener('click', () => {
  if (!document.querySelector('.popover')) {
    popover.show();
  } else {
    popover.hide();
  }
})
