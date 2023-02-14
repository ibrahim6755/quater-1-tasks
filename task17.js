// Define the original guest list
var guestList = ["Haroon ", "Feroz", "faisal", "Hadi"];
// Print a message that only two people can be invited
console.log("Unfortunately, we can only invite two people for dinner.");
// Remove guests from the list until only two remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", there's no space for you at the dinner anymore."));
}
// Print invitation messages to the two remaining guests
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are still cordially invited to a dinner party at my home this weekend. I look forward to your company.\nSincerely"));
}
// Remove the last two names from the list to make it empty
guestList.pop();
guestList.pop();
// Print the empty list to confirm it's empty
console.log(guestList);
