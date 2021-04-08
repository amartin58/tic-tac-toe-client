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



let currentPlayer = 'X'

  const onBoxClick = function(event) {

    let board = event.target.id
    // # - selects an id from the board
    $('#' + board).text(currentPlayer)
    // console.log('board is ', currentPlayer)

     if (currentPlayer === 'O') {
        currentPlayer = 'X'
    } else if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {

    }


}

// setTimeout(() => {
//   $('#player-message').text('')
//   $('#player-message').removeClass('success')
// }, 5000)
// }


















































// let currentPlayer = 'x'
//
// const onBoxClick = function(event) {
// console.log('this is the event log', currentPlayer)
// // let index = event.target.id // box0
// const box = $(event.target)// box2
//
// //[ empty ] if: the box is empty -> Place Player's token
// // console.log(box)
// // if (box === ''){




// if (currentPlayer === "X") {
// firstPlayer =
// }



















// const onBoxClick = function(event) {


/**
currentPlayer = X
[X| O| X]
[ | | ]
[ | | ]


currentPlayer = O
[X| O| X]
[ | | ]
[ | | ]


**/
// console.log('this is the event log', event)
// event.target.id // box0
// let board = event.target.id // box2
// //[ empty ] if: the box is empty -> Place Player's token
// // console.log(box)
// if (box === ''){ <- empty
// // token x or o can be placed in box;
//  $('#' + board).text(currentPlayer) //X
//  if (currentPlayer === 'O'){
//  currentPlayer = 'x'
//  }
//  if( currentPlayer === 'x'){
//  currentPlayer = 'O'
//  }
// } else { <- filled
//  console.log("invalid move")
// }
//[x/o] else: if the box is filled in -> console log an Error: You can't move here





// if (currentPlayer === "X") {
// firstPlayer =
// }
// if (pickSquare=== currentPlayer){
//
//
// }
// console.log(event.target)
// const index = event.target.id
//   $(event.target).text()
//     if $(event.target).text(currentPlayer)
//
//   }
//   if (currentPlayer === 'O')
//     currentPlayer = 'x'
//   }
//    (currentPlayer === 'x'){
//     currentPlayer = 'O'
//
// }
// const onBoardClick = function () {
//   let currentPlayer = 'playerX'
//
//   // const cells = $('#board div').toArray()
//   // console.log(cells)
//   // get the position the player chose on the board by the id attribute
//   const index = event.target.id
//
//   // figure out whos turn it is
//
//   // use jquery to add the player to the html board
//   $(event.target).text('X')
//   $(event.target).off().text('No, No, No. Not Today!')
//
//   // then pass the index and player to the boardClick function
//   // so it can send that data to the API
//   api.boardClick()
//     .then(ui.onBoardClickSuccess)
//     .catch(ui.onError)
// }









// else {
//   $('#player-message').text('Spot Taken!')
//   $('#player-message').addClass('success')
//   setTimeout(() => {
//     $('#player-message').text('')
//     $('#player-message').removeClass('success')
//   }, 5000)
// }



/**
currentPlayer = X
[X| O| X]
[ | | ]
[ | | ]


currentPlayer = O
[X| O| X]
[ | | ]
[ | | ]


**/
// console.log('this is the event log', box.innerText)
// let box = event.target // box0


//   // the square choosen by the player
//   const chooseSquare = event.target.id // box2
//   // console.log (event.target.id)
//   //[ empty ] if: the box is empty -> Place Player's token
//   // console.log(box)
//   // if (box === ''){
//     // <- empty
//   // token x or o can be placed in box;
//    // $('#' + box).text(currentPlayer) //X
//    // choosen square will enter either x or o
// $(event.target).text(currentPlayer) {
// console.log(chooseSqaure)
// if $('# + box').text() === '')
//    if (currentPlayer === 'O'){
//    currentPlayer = 'x'
//    }
//    if( currentPlayer === 'x'){
//    currentPlayer = 'O'
//
//   } else {
//     // <- filled
//    console.log("invalid move")
//   }
// }

//[x/o] else: if the box is filled in -> console log an Error: You can't move here









module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onBeginGame,
  onSignOut,
  onBoxClick
}
