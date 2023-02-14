// Define the original guest list
let guestList = ["Haroon ", "Feroz", "faisal", "Hadi"];

// Print a message that only two people can be invited
console.log("Unfortunately, we can only invite two people for dinner.");

// Remove guests from the list until only two remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, there's no space for you at the dinner anymore.`);
}

// Print invitation messages to the two remaining guests
for (let guest of guestList) {
    console.log(`Dear ${guest},\nYou are still cordially invited to a dinner party at my home this weekend. I look forward to your company.\nSincerely`);
}

// Remove the last two names from the list to make it empty
guestList.pop();
guestList.pop();

// Print the empty list to confirm it's empty
console.log(guestList);
