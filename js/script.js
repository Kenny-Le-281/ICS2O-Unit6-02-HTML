// Created by: Kenny Le
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02-HTML/sw.js", {
    scope: "/ICS2O-Unit6-02-HTML/",
  })
}

/**
 * This function updates the cookie count.
 */
function updateCookieCount() {

  // input and process
  if (localStorage.updateCookieCount) {
    localStorage.updateCookieCount = Number(localStorage.updateCookieCount) +1
  } else {
    localStorage.updateCookieCount = 1
  }

  // output
  document.getElementById("answer").innerHTML = "The amount of times clicked: " + localStorage.updateCookieCount
}
