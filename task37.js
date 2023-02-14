function make_Shirt(message, size) {
    if (message === void 0) { message = "I love TypeScript"; }
    if (size === void 0) { size = " large "; }
    console.log("Making a ".concat(size, " shirt with the message '").concat(message, "'."));
}
make_Shirt();
make_Shirt("I love TypeScript", "medium");
make_Shirt("TypeScript is great!", "small");
