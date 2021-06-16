 feature/generate-webpage
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});


// const printProfileDate = profileDataArr => {
//     // This... 
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);  
//     }
    
//     console.log('================');

//     // Is the same as this...
//    profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileDate(profileDataArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);






const printProfileDate = profileDataArr => {
    // This... 
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);  
    }
    
    console.log('================');

    // Is the same as this...
   profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileDate(profileDataArgs); develop
