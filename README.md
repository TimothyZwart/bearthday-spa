# BearthDay SPA

Bearthday is a single page application that fetches data from the Nasa Api.
The data is used to retrieve images closest to the date that has occured over the past year. The project is built using create-react-app, typescript, jest, and bootstrap. This project requires the use of NPM and node.js. In development mode the project will start on port 3000.

View the project online: [https://bearthday-spa.netlify.app/](https://bearthday-spa.netlify.app/)

## Functionality

The application takes in a previous date in history and looks for if the nasa Api has an image for the date matching or greater that the date. If matching date was found the word earth in the header of the application will be bolded and green. If the next closest date was picked then the font in the header will be left as unbolded and black.

## How to install and run application

1. Clone the repo
   ` git clone git@github.com:TimothyZwart/bearthday-spa.git`
2. Install project dependencies
   ` npm install`
3. Run application in development mode using node.js
   `npm run start`

## Available Scripts From Create React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
