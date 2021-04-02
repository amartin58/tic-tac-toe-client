
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


const onStartBtn = function(form) {
  event.preventDefault()

   api.startBtn()
   .then(ui.onStartBtnSuccess)
   .catch(ui.onStartBtnFailure)
}
const onSignOut = function() {
  event.preventDefault()

   api.signOut()
   .then(ui.onSignOutSuccess)
   .catch(ui.onSignOutFailure)
}




module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onStartBtn,
  onSignOut
}
