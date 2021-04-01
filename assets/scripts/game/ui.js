'use strict'

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text("Your sign up was successful")
  $('#sign-up').trigger('reset')
  // console.log(onSignUpSuccess)
}
const onSignUpFailure = function () {
  $('#message').text("Sign up was not successful. Please try again")
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text("Your sign in. You can begin playing")
  $('#sign-in').trigger('reset')
  console.log(onSignInSuccess)
}
const onSignInFailure = function () {
  $('#message').text("Sign in was not successful. Please try again")
}

const onChangePasswordSuccess = function () {
  $('#message').text("Password change accepted")
  $('#sign-in').trigger('reset')
  // console.log(onSignInSuccess)
}
const onChangePasswordFailure = function () {
  $('#message').text("Delete failed. Please retry")
}



module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
