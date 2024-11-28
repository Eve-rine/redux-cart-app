# Redux Cart App

A simple shopping cart application built with React and Redux, with components and tests structured for maintainability and scalability.

## Features

- **State Management**: Powered by Redux.
- **Dynamic Components**: Components for cart management, product listing, and navigation.
- **Testing**: Unit tests using Jest and React Testing Library.

## Project Structure
redux-cart-app/
├── __tests__/                # Test files for Redux reducers
│   ├── cartReducer.test.js   # Unit test for cartReducer
│   ├── productReducer.test.js # Unit test for productReducer
├── node_modules/             # Installed dependencies
├── public/                   # Public assets
├── src/                      # Source files
│   ├── components/           # Reusable React components
│   │   ├── Cart.jsx          # Shopping cart component
│   │   ├── Navbar.jsx        # Navigation bar component
│   │   ├── ProductsList.jsx  # Product listing component
│   ├── redux/                # Redux setup for state management
│   ├── App.css               # Styles for the main App component
│   ├── App.js                # Main App component
│   ├── App.test.js           # Unit test for the App component
│   ├── index.css             # Global styles
│   ├── index.js              # Entry point of the application
│   ├── logo.svg              # Application logo
│   ├── reportWebVitals.js    # Performance reporting file
│   ├── setupTests.js         # Jest setup file for unit testing
├── .gitignore                # Specifies files to be ignored by Git
├── babel.config.json         # Babel configuration for JavaScript transpiling
├── jest.config.js            # Jest configuration for testing
├── package-lock.json         # Lock file for npm dependencies
├── package.json              # Dependencies and project scripts

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Responsive Design

The application is fully responsive and works well on:
- Desktop browsers
- Tablets
- Mobile devices


Project Link: 'https://github.com/Eve-rine/redux-cart-app'