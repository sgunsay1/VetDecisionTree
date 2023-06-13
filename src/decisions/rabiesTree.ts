import { Decision } from "./decisionTypes";

/**
 * This interface helps keep all possible paths organized such that you provide a value for every path.
 * In addition, it helps to enforce that you don't accidently try to route to a path that doesn't exist.
 */
interface RabiesPaths {
  start: Decision<RabiesPaths>;
  end: Decision<RabiesPaths>;
}

/**
 * This is where you can update prompts and add more button options.
 * Button options are configured using an array (the square bracket [] syntax. )
 *
 * If you want to add a new path, first add the name to the VaccinePaths interface above.
 * Then you will be able to add it in below.
 */
export const rabiesTree: RabiesPaths = {
  start: {
    prompt: "Welcome! This application will help you know X about rabies!",
    options: [
      {
        text: "Let's Go!",
        color: "blue",
        path: "end",
      },
    ],
  },

  end: {
    isEnd: true,
    prompt: "That's it! Congrats on a job well done!",
    options: [
      {
        text: "Start over",
        color: "blue",
        path: "start",
      },
    ], // no further path
  },
};
