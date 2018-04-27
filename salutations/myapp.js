function salute() {
  var mySalutation = Salutation('Peter', 'Forsberg');
  $('#salutation').text(mySalutation.greeting());
}
function insertName() {
  var mySalutation = Salutation('Joe', 'Sakic');
  $('#fullname').text(mySalutation.fullName());
}
