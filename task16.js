// Define the original guest list
var guestList = ["Haroon ", " Feroz", " faisal"];
// Print a message that a bigger table is available
console.log("We just found a bigger dinner table! More guests can be invited.");
// Add new guests to the guest list
guestList.unshift(" Hassan"); // add to beginning
guestList.splice(2, 0, " Kamran"); // add to middle
guestList.push("Basit"); // add to end
// Print invitation messages to each guest
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to a dinner party at my home this weekend. I look forward to your company.\nSincerely,"));
}
