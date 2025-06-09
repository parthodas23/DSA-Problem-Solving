function isAnagram(s, t) {
    // First, check if the two strings have the same length
    if (s.length !== t.length) {
        return false;
    }

    // Create an empty object to store character counts from the first string
    const count = {};

    // Loop through each character in the first string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // If the character is already in the object, increase its count
        if (count[char]) {
            count[char] = count[char] + 1;
        } else {
            // If the character is not in the object, add it with count 1
            count[char] = 1;
        }
    }

    // Loop through each character in the second string
    for (let i = 0; i < t.length; i++) {
        let char = t[i];

        // If the character is not in the object or the count is 0, return false
        if (!count[char]) {
            return false;
        }

        // Decrease the count of the character
        count[char] = count[char] - 1;
    }

    // If all characters matched properly, return true
    return true;
}
