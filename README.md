# React App starting from scratch
> ...well.. just brief guideline for some beginners...

## Basic Setting - File Structure

```
mkdir myproject
cd myproject
npm init -y

touch webpack.config.js
touch .gitignore

mkdir client
cd client
touch index.js
cd ..

mkdir static
cd static
touch index.html
cd ..

mkdir server
cd server
touch index.js
cd ..

mkdir database
cd database
touch index.js
cd .. 
```

## Setup package.json

copy and past my package.json file

## Setup webpack.config.js

copy and past my webpack.config.js

## Setup static/index.html

```
<body>
    <div id="app"></div>
    <script src="bundle.js"></script>
</body>

```

## Setup .gitignore

```
/node_modules
/.env
```

## Setup client/index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<h1>Hello React!!!</h1>,document.getElementById('app'));
```

## Test out webpack now!

on your terminal...
```
npm run webpack
```

## See if it's working?!

```
live-server static
```

## Start your project!!!

## Meta

James Jongho Kim 
- [Portfolio](https://april9288.github.io/) - It's my portfolio website
- [Github](https://github.com/april9288) - This is my Github page
- [Linkedin](https://www.linkedin.com/in/jongho-kim-b05618170/) - This is my Linkedin page
- april9288@gmail.com
