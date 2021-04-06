
const getFormFields = require('../../../grunt/lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
  .then(ui.onSignUpSuccess)
  .catch(ui.onSignUpFailure)
}

const onSignIn = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
  .then(ui.onSignInSuccess)
  .catch(ui.onSignInFailure)
}

const onChangePassword = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
  .then(ui.onChangePasswordSuccess)
  .catch(ui.onChangePasswordFailure)
}

const onSignOut = function() {
  event.preventDefault()

   api.signOut()
   .then(ui.onSignOutSuccess)
   .catch(ui.onSignOutFailure)
}

const onBeginGame = function() {
 event.preventDefault()
// const firstPlayer = $('#box-one').text(X)
  api.beginGame()
  .then(ui.onBeginGameSuccess)
  .catch(ui.onBeginGameFailure)
}

// Video clue
let currentPlayer = 'x'

const onBoxClick = function(event) {
// selects clicked box // add .id to target specific
let firstPlayer = $(event.target.id)
// console.log(event.target.id)
let board = event.target.id
// string concactenation putting two strings
$('#' + board).text(currentPlayer)
currentPlayer = currentPlayer === 'O' ? 'x' : 'O'
for (i = 0; i < board.length; i++){
 if (currentPlayer = board[i] === ''){
currentPlayer = currentPlayer === 'O' ? 'x' : 'O'
}
// https://stackoverflow.com/questions/44491989/how-do-i-check-a-3x3-tictactoe-board-for-empty-spaces-what-i-have-so-far-is-not
return true
}


}
//  if (currentPlayer === "X") {
// firstPlayer =
// }



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onBeginGame,
  onSignOut,
  onBoxClick
}
