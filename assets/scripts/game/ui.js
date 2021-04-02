'use strict'

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text("Your sign up was successful")
  $('#sign-up').trigger('reset')
  // $('#change-password').show()
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
  $('#change-password').showgit add()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#change.password').show()
  // $('#start-btn').show()

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

const onStartBtnSuccess = function () {
  $('#message').text('Password successfully deleted')
  $('#change-password').trigger('reset')
  // console.log(onSignInSuccess)
}
const onStartBtnFailure = function () {
  $('#message').text('Delete failed. Please retry')
}

const onSignOutSuccess = function () {
  $('#message').text('You have logged out')
  // $('#sign-up').show()
  // $('#sign-in').show()
  // $('#change.password').hide()
  // $('#start-btn').hide

}
const onSignOutFailure = function () {
  $('#message').text('Logout failed. Please retry')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onStartBtnSuccess,
  onStartBtnFailure,
  onSignOutSuccess,
  onSignOutFailure
}
