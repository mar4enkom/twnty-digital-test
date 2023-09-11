# Thanks so much for the interesting test task
## There are some interesting decisions and challenges below that were made during development:

## Decisions:
1. The application has two strict modules with their own public API: Checkout and SolarModules. This was needed to make code reusable, easily testable, easily scalable, and to avoid circular dependencies. Checkout is just about operating with selected modules. SolarModules - is just about fetching solar modules from the backend. 
2. Using redux-thunk to work with asynchronous actions
3. Choosing an associative array as a data structure for saving solar modules' data in store. There are a lot of cases.
when we need to find a solar module by name. Using this data structure, we can find it with O(1).
4. Before submitting an order, we do an extra validation by fetching the latest data from server to make sure that we have 
enough solar modules to process the order.
5. Using MUI to focus only on functionality

## Problems with the app:
Due to the time restrictions, I hadn't chance to fix some issues:
1. Lots of boilerplate code. I know that it could be better to avoid createStore() and use slices approach. And it would be even better to use redux toolkit.
2. Memoisation (a lot of extra re-renders that we should avoid).
3. useAppDispatch hook, which gets any as a generic. 

## Future work:
1. Fix issues in the "Problems of the App" section
2. Make the checkout reducer asynchronous (we don’t need to include the reducer for the checkout page in the app bundle) 
3. Add .env file to .gitignore 
4. Add unit testing for actions and selectors. Add UI testing and e2e testing. 
5. Improve and thoroughly correct errors showing 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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
