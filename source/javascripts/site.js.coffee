console.log('I use Arch btw :)')

copy = (textObj) ->
  textObj.select()
  textObj.setSelectionRange(0, 99999)
  document.execCommand('copy')

notify = (ms) ->
  obj = document.querySelector('.popup#email label')
  obj.classList.remove('hide')
  setTimeout(( -> obj.classList.add('hide')), ms)