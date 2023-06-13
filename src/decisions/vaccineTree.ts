import { Decision } from "./decisionTypes";

/**
 * This interface helps keep all possible paths organized such that you provide a value for every path.
 * In addition, it helps to enforce that you don't accidently try to route to a path that doesn't exist.
 */
interface VaccinePaths {
  start: Decision<VaccinePaths>;

  qHasVacHistory: Decision<VaccinePaths>;
  qVacUnder2WeeksAgo: Decision<VaccinePaths>;
  qUnder5MonthsOld: Decision<VaccinePaths>;

  end: Decision<VaccinePaths>;
}

/**
 * This is where you can update prompts and add more button options.
 * Button options are configured using an array (the square bracket [] syntax. )
 *
 * If you want to add a new path, first add the name to the VaccinePaths interface above.
 * Then you will be able to add it in below.
 */
export const vaccineTree: VaccinePaths = {
  start: {
    prompt:
      "Welcome! This application will help you know the vaccine status of your pet. Neato!",
    options: [
      {
        text: "Let's Go!",
        color: "blue",
        path: "qHasVacHistory",
      },
    ],
  },

  qHasVacHistory: {
    prompt: "Does your pet have any vaccination history?",
    options: [
      {
        text: "Yuppers!",
        color: "green",
        path: "qVacUnder2WeeksAgo",
      },
      {
        text: "Nope!",
        color: "red",
        actionItem: "Vaccinate AND boost in the next 2 weeks.",
        path: "qUnder5MonthsOld",
      },
    ],
  },

  qVacUnder2WeeksAgo: {
    prompt: "Okay! Has your pet been vaccinated within the last 2 weeks?",
    options: [
      {
        text: "Yeah",
        color: "green",
        actionItem:
          "Vaccinate your pet 2 weeks from the last vaccination date.",
        path: "qUnder5MonthsOld",
      },
      {
        text: "Nope",
        actionItem: "Vaccinate ASAP.",
        color: "red",
        path: "qUnder5MonthsOld",
      },
    ],
  },

  qUnder5MonthsOld: {
    prompt: "Is your pet over 5 months (20 weeks) old?",
    options: [
      {
        text: "Older",
        color: "green",
        actionItem: "Your next vaccine is due in 1 year.",
        path: "end",
      },
      {
        text: "Younger",
        color: "blue",
        actionItem:
          "Boost every 2 weeks for 20 weeks. After that, vaccinate once every year.",
        path: "end",
      },
    ],
  },

  end: {
    isEnd: true,
    prompt: "That's it! Here's a summary of what you need to do:",
    options: [
      {
        text: "Start over",
        color: "blue",
        path: "start",
      },
    ], // no further path
  },
};
