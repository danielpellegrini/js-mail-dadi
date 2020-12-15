// Richiesta Email
var email = prompt('What\'s your email address?')
console.log(email + ' ->user\'s email');

if (email === 'pinco.pallino@email.com') {
  alert('Hello ' + email + '! \nAccess granted.');
} else {
  alert('Unknown user. \nPlease try again');
}

var clickElement = document.getElementById('button-element');

clickElement.addEventListener('click',
  function() {
    var user = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice').innerHTML = user;

    // Computer
    var computer = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice').innerHTML = computer;

    if (user > computer) {
      document.getElementById('dice').innerHTML = 'Ha vinto ' + email + '!';
    } else if (user === computer) {
      document.getElementById('dice').innerHTML = 'Pareggio';
    } else {
      document.getElementById('dice').innerHTML = 'Ha vinto il computer';
    }
  }
);
