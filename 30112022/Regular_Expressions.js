/*
freeCodeCamp
Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.
In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.
*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);            //true              // .test returns TRUE or FALSE

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;                                 // '|' allows searching of several variants
let result = petRegex.test(petString);          //true

let myString = "freeCodeCamp";
let fccRegex = /FREEcOdEcamp/i;                                     // the flag i ignores case
let result = fccRegex.test(myString);           //true

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex);     //["coding"]        // .match returns array with /word/ ( ["coding"] )

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;                                        // the flag i searchs a pattern more than once
let result = twinkleStar.match(starRegex);      //["Twinkle", "twinkle"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;                                                // The wildcard character . will match any one character.
let result = unRegex.test(exampleStr);          //["fun"]

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;                                            // The [aiu] is the character class that will only match the characters a, i, or u.
bigStr.match(bgRegex);                          //["big"]
bagStr.match(bgRegex);                          //["bag"]
bugStr.match(bgRegex);                          //["bug"]
bogStr.match(bgRegex);                          //["bog"]

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;                                            // match lowercase letters a through e you would use [a-e]. (abcde)
catStr.match(bgRegex);                          //["cat"]
batStr.match(bgRegex);                          //["bat"]
matStr.match(bgRegex);                          // null

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;                                         // searching [h-s] (hijklmnopqrs) and [2-6] (23456) 
let result = quoteSample.match(myRegex);        // ['l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's']

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi;                                     // ^ after the opening bracket and before the characters you DON'T want to match
let result = quoteSample.match(myRegex);        // [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.']

let soccerWord = "gooooooooal! gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;                                                // Match Characters that Occur Zero or More Times
let gRegex = /go+/;                                                 // Match Characters that Occur One or More Times
console.log(soccerWord.match(goRegex));         // ['goooooooo']
console.log(soccerWord.match(gRegex));          // ['goooooooo']
console.log(gPhrase.match(goRegex));            // ['g']
console.log(gPhrase.match(gRegex));             // null
console.log(oPhrase.match(goRegex));            // null
console.log(oPhrase.match(gRegex));             // null


let ttnc = /t[a-z]*i/;
console.log('titanic'.match(ttnc));             // ['titani']

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;                                              // finds the smallest possible part of the string 
let result = text.match(myRegex);               // ['<h1>']

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;                                          // search the beginning of strings
firstRegex.test(firstString);                   // true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);                      // false

let theEnding = "This is a never ending story";
let storyRegex = /story$/;                                          // search the end of strings
storyRegex.test(theEnding);                     // true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);                      // false

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;                                              // \w is equal to [A-Za-z0-9_]
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);                         // true
shortHand.test(numbers);                        // true
longHand.test(varNames);                        // true
shortHand.test(varNames);                       // true

let shortHand = /\W/;                                               // \W is equal to [^A-Za-z0-9_] (not letters any case and numbers)
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);                       // ["%"]
sentence.match(shortHand);                      // ["!"]

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;                                               // \d is equal to [0-9] 
let result = movieName.match(numRegex);         // [ '2', '0', '0', '1' ]

                                                                    // \D is equal to the character class [^0-9]


let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;                                             // \s is searching whitespaces  \S for NON-whitespaces
whiteSpace.match(spaceRegex);                   // [" ", " "]

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;                                          // {x,y} to match only the letter 'a' appearing between x and y times in the string
multipleA.test(A4);                             // true
multipleA.test(A2);                             // false

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
let result = ohRegex.test(ohStr);

let A3 = "haaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;                                          // {x,} = [x; +infinity]
multipleA.test(A3);                             // true
multipleA.test(A2);                             // false
multipleA.test(A100);                           // true

let A3 = "haaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;                                          // {x} true only if x times
multipleHA.test(A3);                             // true
multipleHA.test(A2);                             // false
multipleHA.test(A100);                           // false

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;                                        // ? specify the possible existence of an element 
rainbowRegex.test(american);                     // true
rainbowRegex.test(british);                      // true

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;                                              // ?=.. positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it
let qRegex = /q(?!u)/;                                              // ?!.. negative lookahead will look to make sure the element in the search pattern is not there 
quit.match(quRegex);                             // true
noquit.match(qRegex);                            // true

/* A more practical use of lookaheads is to check two or more patterns in one string. 
Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:*/
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");         // The replace call would return the string The sky is blue.

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);   // regex change the string 'one two three' to the string 'three two one'

let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);      // => ['really', 'happy']       array[3] = 'really
let newArray = array.splice(2, 1);      // => ['feeling']
