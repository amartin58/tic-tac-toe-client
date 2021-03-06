'use strict'


const config = require('./../config')
const store = require('./../store')

const signUp = function(data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + "/sign-up",
    data: data
  })
}

const signIn = function(data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + "/sign-in",
    data: data
  })
}

const signOut = function(data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + "/sign-out",
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const beginGame = function(data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + "/games",
    // data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })

  const box = function(data) {
    return $.ajax({
      method: 'POST',
      url: config.apiUrl + "/box",
      data: data,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }
}


module.exports = {
  signUp,
  signIn,
  signOut,
  beginGame
}
