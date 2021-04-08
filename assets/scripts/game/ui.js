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
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#beginGame').show()
  $('#sign-out').show()
}

const onSignInFailure = function () {
  $('#message').text('Sign in was not successful. Please try again')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Password successfully deleted')
  $('#change-password').trigger('reset')
  // console.log(onSignInSuccess)
}

const onChangePasswordFailure = function () {
  $('#message').text('Delete failed. Please retry')
}

const onSignOutSuccess = function () {
  $('#message').text('You have logged out')
  $('#sign-out').trigger('reset')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#beginGame').hide()
  // $('.box').hide()
}

const onSignOutFailure = function () {
  $('#message').text('Logout failed. Please retry')
}

const onBeginGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('You are ready to play')
  // $('#beginGame').trigger('reset')
  $('.box').show()
}

const onBeginGameFailure = function () {
  $('#message').text('Delete failed. Please retry')
}

const onBoxClickSuccess = function (data) {
  $('#message').text('It is your move')
  $('.boxclick').trigger('reset')
  store.user = data.user
}

const onBoxClickFailure = function () {
  $('#message').text('Delete failed. Please retry')

}


module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onBeginGameSuccess,
  onBeginGameFailure,
  onBoxClickSuccess,
  onBoxClickFailure
}
