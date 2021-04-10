'use strict'

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text("Your sign up was successful")
  $('#sign-up').trigger('reset')
  // $('#change-password').hide()
  // $('#start-btn').hide()
  // $('#start-btn').hide()
  // console.log(onSignUpSuccess)
}
const onSignUpFailure = function () {
  $('#message').text('Sign up was not successful. Please try again')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' You are signed in. You can begin playing')
  $('#sign-in').trigger('reset')

  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#beginGame').show()
  $('#beginGame').trigger('reset')
  $('#sign-out').show()
  $('#board').show()
}

const onSignInFailure = function () {
  $('#message').text('Sign in was not successful. Please try again')
}

const onSignOutSuccess = function () {
  $('#message').text('You have logged out')
  $('#sign-out').trigger('reset')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#beginGame').trigger('reset')
  $('.box').trigger('reset')
  $('#beginGame').hide()
  $('.box').hide()
  $('#board').hide()
}

const onSignOutFailure = function () {
  $('#message').text('Logout failed. Please retry')
}

const onBeginGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('Player one\'s move')

    $('.box').show()


}

const onBeginGameFailure = function () {
  $('#message').text('Delete failed. Please retry')
}

const onBoxClickSuccess = function (data) {
  store.user = data.user
  $('#message').text('It is your move')
  $('.boxclick').trigger('reset')
  $('#beginGame').trigger('reset')

}

const onBoxClickFailure = function () {
  $('#message').text('Delete failed. Please retry')

}


module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onBeginGameSuccess,
  onBeginGameFailure,
  onBoxClickSuccess,
  onBoxClickFailure
}
