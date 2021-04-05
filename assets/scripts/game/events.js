
const getFormFields = require('./../../../lib/get-form-fields')

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

const onStartGame = function() {
 event.preventDefault()
// const firstPlayer = $('#box-one').text(X)
  api.startGame()
  .then(ui.onStartGameSuccess)
  .catch(ui.onStartGameFailure)
}

// let currentPlayer = 'x'
const onBoxClick = function(event) {
  event.preventDefault()
  // let currentPlayer = 'x'  // $('#game-board').hide()

// selects clicked box
    // const box = $(event.target)
// $(#box-one).text('X')

    // currentPlayer = currentPlayer === 'O' ? 'x' : 'O'
   .then(ui.onBoxClickSuccess)
   .catch(ui.onBoxClickFailure)
}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onStartGame,
  onSignOut,
  onBoxClick
}
