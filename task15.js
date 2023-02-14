// Define the original guest list
var guestList = ["Haroon", "Feroz", "faisal"];
// Print a message stating the guest who can't make it
console.log("".concat(guestList[2], " can't make it to dinner."));
// Replace the second guest with a new invitee
guestList[1] = "Ahad";
// Print invitation messages to each remaining guest
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to a dinner party at my home this weekend. I look forward to your company.\nSincerely,"));
}
