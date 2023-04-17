// Q1 - fizzbuzz

function fizzBuzz(n) {

    // looping until value of n
    for (var i = 1; i <= n; i++) {

        // if divisible by 3 and 5, print fizzbuzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } 

        // if divisible by 5, print buzz
        else if (i % 5 === 0) {
            console.log('buzz');
        }

        // if divisible by 3, print fizz
        else if (i % 3 === 0) {
            console.log('fizz');
        }

        // else, print num
        else {
            console.log(i);
        }
    }
}

// calling the function
fizzBuzz(15);