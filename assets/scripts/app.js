'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#start-btn').on('click', gameEvents.onStartGame)
  $('#change-password').on('click', gameEvents.onChangePassword)
  $('#sign-out').on('click', gameEvents.onSignOut)
})
