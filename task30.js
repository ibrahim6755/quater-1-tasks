var usernames = ['Ali', 'Haider', 'admin', 'Ahmed', 'Mohib'];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
