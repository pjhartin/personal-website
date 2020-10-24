export const state = () => ({
  activeBgColour: "#1b1b1b",
  bgColours: [
    // "antiquewhite",
    // "#e9967a",
    "#00476b",
    // "#482b48",
    "#1b1b1b", // Near Black
    "rgb(39, 39, 108)", // Blue type,
    "#ffdb73"
  ]
});

export const actions = {
  colourCycle({ commit, state }) {
    const choices = state.bgColours.filter(colour => {
      return colour !== state.activeBgColour;
    });

    const colour = choices[Math.floor(Math.random() * choices.length)];
    commit("changeColour", colour);
  }
};

export const mutations = {
  changeColour(state, colour) {
    state.activeBgColour = colour;
  }
};

export const getters = {
  styleObject(state) {
    return {
      backgroundColor: state.activeBgColour
    };
  }
};
