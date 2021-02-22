const hamburger = document.getElementById('hamburger');
const mobile_menu = document.querySelector('.mobile__menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const hamburgerIcon = hamburger.querySelector('img');

const bookmark = document.querySelector('.hero__bookmark');
//modal
const btn_btp = document.getElementById('btp');
const close_modal = document.getElementById('close-modal');

const default_modal = document.querySelector('.modal');
const modal_container = document.querySelector('.modal__container');

const modal_cards = default_modal.querySelectorAll('.card');
// modal selected
// const btn_selected = document.querySelectorAll('.btn-selected');
const modal_selected = document.querySelector('.modal__completed');
const btn_completed = document.getElementById('btn-completed');
//  check box
const checkboxs = document.querySelectorAll('.card input[type="checkbox"]');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  if(hamburger.classList.contains('open')){
    hamburgerIcon.src = "/dist/img/icon-close-menu.svg"
  }else {
    hamburgerIcon.src = "/dist/img/icon-hamburger.svg"
    
  }

  mobile_menu.classList.toggle('open');
  overlay.classList.toggle('open');
  body.classList.toggle('noscroll');

  if(overlay.classList.contains('open')){
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }else {
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');

  }

});

bookmark.addEventListener('click',() => {
  bookmark.classList.toggle('active');
  if(bookmark.classList.contains('active')){
    bookmark.querySelector('h3').innerHTML = 'Bookmarked'
  }else {
    bookmark.querySelector('h3').innerHTML = 'Bookmark'
  }
});

// modal default
btn_btp.addEventListener('click', () => {
  default_modal.classList.remove('fade-out');
  body.classList.add('noscroll');
  default_modal.classList.add('open');
  default_modal.classList.add('fade-in');
  modal_container.classList.add('open');
  
});

close_modal.addEventListener('click',() => {
  body.classList.remove('noscroll');
  default_modal.classList.remove('fade-in');
  default_modal.classList.add('fade-out');
  modal_container.classList.remove('open');
  default_modal.classList.remove('open');

  checkboxs.forEach(check => check.checked = false);
})

modal_cards.forEach((card, i) => {
  const checkbox = card.querySelector('input[type="checkbox"]');
  const selected_card = card.querySelector('.card__selected');
  
  if(selected_card){
    const btn_selected = document.querySelectorAll('.btn-selected');
    checkbox.addEventListener('click',() => {
        checkboxs.forEach(box => {
        if(checkbox !== box && checkbox.checked == true){
          box.disabled = true;
        }else {
          if(!box.classList.contains('disabled')){
            box.disabled = false;
          }
        }
      })
      if(checkbox.checked == true){
        default_modal.classList.add('noscroll');
        card.classList.add('selected');
        selected_card.classList.add('selected');
        // console.log(pageYOffset);
        btn_selected.forEach(btn => {

          btn.addEventListener('click',() => {

            modal_container.classList.remove('open');
            default_modal.classList.add('open');
            modal_selected.classList.add('open');
            card.classList.remove('selected');
            selected_card.classList.remove('selected');
            default_modal.classList.add('noscroll');
            checkbox.checked = false;
          });

        });

      }else {
        default_modal.classList.remove('noscroll');
        card.classList.remove('selected');
        selected_card.classList.remove('selected');
      }
    });
  }
});


btn_completed.addEventListener('click', () => {  
  default_modal.classList.remove('fade-in');
  default_modal.classList.add('fade-out');
  modal_selected.classList.remove('open');
  default_modal.classList.remove('open');
  default_modal.classList.remove('noscroll');
  checkboxs.forEach(c => {
    if(!c.classList.contains('disabled')) c.disabled = false;
  });
  body.classList.remove('noscroll');
});

