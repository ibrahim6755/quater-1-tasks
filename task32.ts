const current_users: string[] = ["johndoe", "Admin", "user1", "user2", "Ahmed"];
const new_users: string[] = ["user3", "user4", "Ahmed", "johnDOE", "user5"];

for (const new_user of new_users) {
  if (current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase())) {
    console.log(`Sorry, the username "${new_user}" is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations! The username "${new_user}" is available.`);
  }
}
