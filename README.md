# Advanced-Javascript

Welcome to my Advanced Javascript Tutorials;
i will put here many examples as possible to test the functionality of the modern Javascript.


To run your code via Terminal in your Visual Studio code and keep it running while testing your functions just install;
- node js =>> https://nodejs.org/en/ 
- vscode  =>> https://code.visualstudio.com/

Follow instructions: 
open vscode
1. new Folder
2. sandbox.js
3. npm init -y
4. npm install nodemon

go to package.json and replace the following code to run your javascript file every time you want to test any 
functionality from your project

in your package.json file, you will
REPLACE
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
WITH
   "scripts": {
    "dev": "nodemon sandbox.js"
  },


  Save then close package.json

  go to the Terminal in your distination file and run:

  npm run dev 

  Congrates!! 

  your code is now running all the time no need to restart the console.
  If you add a new file.js you must close the nodemon server update the file package.json with your new file.js,  then run the command line again 
  npm run dev.
