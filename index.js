// Remove Blanks
function removeBlanks(s) {
    return s.split(" ").join("");
}



// Get Digits
function getDigits(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(Number(s[i]))) {
            result += s[i];
        }
    }
    return Number(result);
}

// Acronyms
function acronym(s) {
    let words = s.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            result += words[i][0].toUpperCase();
        }
    }
    return result;
}

// Count Non-Spaces
function countNonSpaces(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            count++;
        }
    }
    return count;
}

// Remove Shorter Strings
function removeShorterStrings(arr, length) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= length) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Testing the functions
console.log("// Remove Blanks");

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

console.log("// getDigits");

console.log(getDigits("abc8c0d1ngd0j0!8"));

console.log("// acronym");

console.log(acronym(" there's no free lunch - gotta pay yer way. "));

console.log("// countNonSpaces");

console.log(countNonSpaces("Honey pie, you are driving me crazy"));

console.log("// removeShorterStrings");

console.log(
    removeShorterStrings(
        ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
        4
    )
);

