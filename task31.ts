let usernames: string[] = []; // Empty array of usernames

if (usernames.length > 0) { // Check if the list of users is not empty
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') { // Check if the current user is admin
      console.log('Hello admin, would you like to see a status report?');
    } else {
      console.log('Hello ' + usernames[i] + ', thank you for logging in again.');
    }
  }
} else { // If the list is empty, print the message
  console.log('We need to find some users!');
}
