// This is where it all goes :)
console.log('I use Arch btw :)')

function copy(textObj) {
  textObj.select();
  textObj.setSelectionRange(0, 99999);
  document.execCommand('copy');
}

function notify(ms) {
  let obj = document.querySelector('.popup#email label');
  obj.classList.remove('hide');
  setTimeout(() => {
    obj.classList.add('hide');
  }, ms);
}