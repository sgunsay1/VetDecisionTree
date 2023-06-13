## Getting Started

### Installations

You will need to install the following to get up and running:

- [Node.js](https://nodejs.org/en)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Downloading the code

1. Open a terminal at the directory location where you would like the project to be stored
2. Run `git clone https://github.com/sgunsay1/VetDecisionTree.git`
3. While still in the terminal, cd into the directory titled `VetDecisionTree`
4. Run `npm install` to download all project dependencies
5. You're ready to go!

### IDE Suggestions

It is much easier to write/develop code using and IDE (Integrated Development Environment). They provide a TON of helpful tools to get you up and running whilst coding. They also provide intellisense and autocompletion features for your code.

My favorite IDE is [VS Code](https://code.visualstudio.com/download)

## Working on the code

Things should be set up such that all you have to do to change the decision tree paths is edit or add files inside of the `src/decisions` folder. Checkout `vaccineTree.ts` for an example of how this might work.

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `npm start`

  - Runs the app in the development mode.<br> Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.<br>

- `npm run build`

  - Builds the app for production to the `dist` folder.<br> It correctly bundles Solid in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.<br> Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
