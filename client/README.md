# INSIGHT2PROFIT Client

## In the project

This project will allow the user to see a 7-day forecast based on endpoints from the server project. After a forecast is loaded into the application, you can click on each day to see additional information.

## Requirements

1. The project has been locked to use npm only.
2. Make sure you have at least node 14.8.0. This version allows async/await at the top level - https://pprathameshmore.medium.com/top-level-await-support-in-node-js-v14-3-0-8af4f4a4d478
3. (optional) Update your IDE to format your code in prettier. Change your settings to format your code on save.

## Installation

1. Install node modules
2. Run the npm command below (runs on port 3001)

```bash
npm run dev
```

## Testing

```bash
npm run test
```

## Other

The project uses a feature-based folder structure which allows scalability in the code. I added patterns and standards to the code to make it more maintainable and easier to read.

Normally I would create additional md files to document all the patterns and standards.

I added some test for the "src/components/button" file
