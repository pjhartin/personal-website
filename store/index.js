export const state = () => ({
  activeBgColour: "antiquewhite",
  bgColours: [
    "antiquewhite",
    "darksalmon",
    "mediumaquamarine",
    "tan",
    "#1b1b1b", // Near Black
    "rgb(39, 39, 108)" // Blue type
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
