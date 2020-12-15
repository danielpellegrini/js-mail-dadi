// Richiesta Email
var email = prompt('What\'s your email address?')
console.log(email + ' ->user\'s email');

if (email === 'pinco.pallino@email.com') {
  alert('\nHello ' + email + '! \n \n Now type your password to enter')
} else {
  alert('\nUnknown user. \n \nTry again please')
}
