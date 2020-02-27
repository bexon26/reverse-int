module.exports = function reverse (n) {
    var String = n.toString();
    var mass = String.split("");
    mass.reverse();
    var reverseString = mass.join('');
    var reverseNumber = parseInt(reverseString, 10);
    return reverseNumber;
}
