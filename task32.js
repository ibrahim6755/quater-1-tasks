var current_users = ["johndoe", "Admin", "user1", "user2", "Ahmed"];
var new_users = ["user3", "user4", "Ahmed", "johnDOE", "user5"];
var _loop_1 = function (new_user) {
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("Sorry, the username \"".concat(new_user, "\" is already taken. Please choose a different username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_user, "\" is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
