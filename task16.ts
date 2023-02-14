// Define the original guest list
let guestList = ["Haroon ", " Feroz", " faisal"];

// Print a message that a bigger table is available
console.log("We just found a bigger dinner table! More guests can be invited.");

// Add new guests to the guest list
guestList.unshift(" Hassan"); // add to beginning
guestList.splice(2, 0, " Kamran"); // add to middle
guestList.push("Basit"); // add to end

// Print invitation messages to each guest
for (let guest of guestList) {
  console.log(`Dear ${guest},\nYou are cordially invited to a dinner party at my home this weekend. I look forward to your company.\nSincerely,`);
}
