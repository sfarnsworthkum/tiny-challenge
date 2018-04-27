function Salutation (firstName, lastName) {
  return {
    greeting: function () {
      return "Greetings and Salutations " + firstName + " " + lastName;
    },
    fullName: function () {
      return firstName + " " + lastName;
    }
  };
}
