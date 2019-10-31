// This is where it all goes :)
console.log('I use Arch btw :)')

function copy(textObj) {
  textObj.select();
  textObj.setSelectionRange(0, 99999);
  document.execCommand('copy');
}