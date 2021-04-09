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



// there are eight winning possibilities
// [ 0| 1 | 2]
// [ 3| 4 | 5 ]
// [ 6| 7 | 8 ]

// make and array to compare the indexes
// make each row of winning combinations
const row1 = [box0, box1, box2]
const row2 = [box3, box4, box5]
const row3 = [box6, box7, box8]
const col1 = [box0, box3, box6]
const col2 = [box1, box4, box7]
const col3 = [box6, box7, box8]
const cro7 = [box0, box4, box6]
const row8 = [box2, box4, box6]


console.log('tis this working', row2)

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
      // if squar already occupied send error msg
    $('#next-turn').text('You can\'t do that!')
    }

// there are eight winning possibilities
// [ 0| 1 | 2]
// [ 3| 4 | 5 ]
// [ 6| 7 | 8 ]

// compare player x to all the winning combinations
// if player equals winning combo, msg player x wins
//forwards and backwards

// search array of index to find if equal to each other

// use if, if, else with msg it's a tie

//compare player 0 to all winning combinatons, msg player 0 wins



// let winningRow = function(event) {
// console.log('show me something', winningRow)
// }




}













// alert('Hi')
//     }setTimeout(() => {
//         $('#next-turn').text('')
//       }, 10000)



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
