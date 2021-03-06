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

  api.beginGame()
    .then(ui.onBeginGameSuccess)
    .catch(ui.onBeginGameFailure)
}

let currentPlayer = 'X'
const onBoxClick = function(event) {

    const board = event.target.id

     // # - selects an id from the board
     if ($('#' + board).text() === '') {
       $('#' + board).text(currentPlayer)
       // console.log('board is ', currentPlayer)
       if (currentPlayer === 'O') {
         currentPlayer = 'X'
         $('#next-turn').text('Player 1\'s turn')
       } else if (currentPlayer === 'X') {
         currentPlayer = 'O'
         $('#next-turn').text('Player 2\'s turn')
       }
       } else {
   $('#next-turn').text('You can\'t do that!')
         // if squar already occupied send error msg
       }
     }
    //     .then(ui.onBoardClickSuccess)
    //     .catch(ui.onError)
    // }




    module.exports = {
      onSignUp,
      onSignIn,
      onChangePassword,
      onBeginGame,
      onSignOut,
      onBoxClick
    }
