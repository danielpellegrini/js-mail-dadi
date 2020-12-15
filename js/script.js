// Richiesta Email
var email = prompt('What\'s your email address?')
console.log(email + ' ->user\'s email');

var approvedEmails = ['pinco@email.com', 'pallino@email.com', 'amilcare@email.com', 'asdrubale@email.com'];

var emailFound = false;

for (var i = 0; i <= approvedEmails.length; i++) {
  if (email === approvedEmails[i]) {
    emailFound = true;
  }
}

if (emailFound) {
  document.getElementById('granted').innerText = 'Access granted';

  // On Click The Game Will Start
  var clickElement = document.getElementById('button-element');

  clickElement.addEventListener('click',
    function() {
      // User
      var user = Math.floor(Math.random() * 6) + 1;
      document.getElementById('dice').innerHTML = user;

      // Computer
      var computer = Math.floor(Math.random() * 6) + 1;
      document.getElementById('dice').innerHTML = computer;

      if (user > computer) {
        document.getElementById('dice').innerHTML = email + '\'s result is: ' + user +
          '<br>Computer\'s result is: ' + computer +
          '<br> Congrats! You won!';
      } else if (user === computer) {
        document.getElementById('dice').innerHTML = email + '\'s result is: ' + user +
          '<br>Computer\'s result is: ' + computer + '<br>Draw';
      } else {
        document.getElementById('dice').innerHTML = email + '\'s result is: ' + user +
          '<br>Computer\'s result is: ' + computer +
          '<br> Oh no! You lost';
      }
    }
  );

} else {
  document.getElementById('button-element').innerText = 'Access denied';

}
