// Richiesta Email
var email = prompt('What\'s your email address?')
console.log(email + ' ->user\'s email');

if (email === 'pinco.pallino@email.com') {
  document.getElementById('granted').innerHTML = 'Hello ' + email + '! <br> Access granted.';
} else {
  document.getElementById('denied').innerHTML = 'Unknown user. <br>Please try again';
}





// Gioco Dadi

var min, max

min = 1;
max = 6;
var dice = Math.floor(Math.random() * (max + 1 - min) + min)
document.getElementById('dice').innerHTML = dice + ' is your lucky number';

if (dice === '6') {
  dice.className = 'green';
} else {
  dice.className = 'red';

}
