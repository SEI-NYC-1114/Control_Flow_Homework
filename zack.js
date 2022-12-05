//function prompt1() {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }

    /*
 * Prompt 2:
 *
 * Create a loop that prints every even number BETWEEN 0 and 100 (not including 0 or 100).
 */

//function prompt2() {
    for (let i = 2; i <= 98; i+2) {
        console.log(i);
    }
  

    // YOUR CODE HERE
  
    /*
 * Prompt 3:
 *
 * Create a loop that counts from -5 to 5, printing each number (including -5 and 5).
 */

//function prompt3() {
    for (let i = -5; i <= 5; i++) {
    
        console.log(i);
  }
    

    /*
 * Prompt 4:
 *
 * Create a loop that counts down from 10 to 0, printing each number (including 10 and 0).
 */

function prompt4() {
    for (let i = 10; i > -1; i--) {
        console.log(i);

    // YOUR CODE HERE
  }

  /*
 * Prompt 5:
 *
 * Create a loop that counts down from 5 to -5, printing each number (including 5 and -5).
 */
//function prompt5() {
    for (let i = 5; i > -6; i--) {
        console.log(i);
    // YOUR CODE HERE
  }

  /*
 * Prompt 6:
 *
 * Create a loop that counts from 0 to 50 (inclusive) in multiples of 2 (instead of 1),
 * printing each number.
 */

//function prompt6() {

    for (let i = 0; i <= 50; i+=2) {
   
        console.log(i);
    }
      

    // YOUR CODE HERE

    /*
 * Prompt 7:
 *
 * For the numbers 0 - 100 (inclusive), print out "I found a [ number ]. High five!" if the
 * number is a multiple of five.
 *
 * Sample Output IN THE BROWSER:
 *   - I found a 5. High five!
 *   - I found a 10. High five!
 */
//function prompt7() {
    for(let i = 0; i <= 100 i++) {
        if(i % 5 == 0) {
            console.log(`I found a ${i}. high five`)
        }
    }
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt7()
  
  // 🌟 MAKE A COMMIT: "Complete prompt 7"
  
  /*
   * Prompt 8:
   *
   * Create a variable called someNumber and assign it a random number between
   * 0 and 100 (not inclusive). Hint: Use Math.random so that it generates a new number every time the code is run!
   *
   * Create a conditional that matches these requirements:
   *   - if someNumber is less than 30, print "That's a small number!"
   *   - if someNumber is between 30 and 60, print "The number is medium sized."
   *   - if someNumber is greater than 60, print "We got a big one!"
   */
  
  //  define someNumber here
  var someNumber;
  
  //function prompt8() {
    someNumber = Math.random * 100
    i = someNumber|
    console.log(someNumber)
    if (i < 30) {
        console.log("That's a small number!")
    }
    else if (30 < i < 60) {
        console.log("The number is medium sized")
    }
    else {
        console.log("We got a big one!")
    }


  
    // YOUR CODE HERE
  
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt8();
  