export const state = () => ({
  activeBgColour: "#778e90",
  bgColours: [
    "#af6f59",
    "#b36060",
    "#755e69",
    "#9e8f64",
    "#778e90",
    "#00476b",
    "#9e869e",
    "#2c4e5f",
    "#2c355f",
    "#2c5f4c",
    "#749689",
    "#495692",
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
