# User Form

This is a simple app that take input data and display in a format of table
## Available Scripts

In the project directory, you can run:

### `npm install`

Install all necessary dependencies of the app. Please make sure [NodeJS](https://nodejs.org/en) is available and updated with the newest version.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
Snapshot tests are used to make sure UI does not change unexpectedly

## Structure
This app is managing files based on functionality \
`views` groups all UI components.
* `components` groups all reusable components

`utils` groups methods will be used by UI components such as constants file and helper methods
```
src
└───views
│   │   landing
│   │   form-panel
│   │   display-panel
│   └───components
│       │   button
│       │   col
│       │   row
│       │   dropdown
│       │   header
│       │   input
│       │   notification
│       │   tag
└───utils
    │   constants
    │   helper
```

## Third Party Libraries Used
[Ant Design Icons](https://ant.design/components/icon) for icon usages \
[@emotion](https://emotion.sh/docs/introduction) for better style management
