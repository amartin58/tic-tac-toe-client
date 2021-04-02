'use strict'

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text("Your sign up was successful")
  $('#sign-up').trigger('reset')
  // $('#sign-up').hide()
  // console.log(onSignUpSuccess)
}
const onSignUpFailure = function () {
  $('#message').text('Sign up was not successful. Please try again')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' You are signed in. You can begin playing').hide()
  $('#sign-in').trigger('reset')
  $('#change.password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()

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



module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
