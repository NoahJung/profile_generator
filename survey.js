const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileQ = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  'What do you listen to while doing that?',
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  'What\'s your favourite thing to eat for that meal?',
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!'
]

let profileA = [];

const printProfile = (a, b) => {
  let print = "";
  for (let i = 0; i < a.length; i++) {
    print += `${a[i]}  ${b[i]} \n`
  }
  console.log(print);
  return print;
}

const repeatQ = (hey, a) => {
  rl.question(`${hey[a]}    `, (answer) => {
    //console.log(`saved your answer`);
    profileA.push(answer);
    
    if (a === hey.length - 1) {
      console.log("---------------------");
      console.log(`Your profile is done!`);
      printProfile(hey, profileA);
      rl.close();
    } else {
      repeatQ(hey, a + 1);
     // console.log(a);
    }
  });
  
}

repeatQ(profileQ, 0);
//printProfile(profileQ, profileA);


/*for exapmle
rl.question(`${profileQ[0]}    `, (answer) => {

  console.log(`saved your answer: ${answer}`);
  profileA.push(answer);

  rl.question(`${profileQ[1]}    `, (answer) => {
    console.log(`saved your answer: ${answer}`);
    profileA.push(answer);
  });
 
});

*/


// 

// Once all questions are answered, our survey app should output a fully formed 
// paragraph for their online profile, similar to the one shown previously. 
// It should then exit. The user would have to rerun the app to go through 
// the process of generating another profile.