export const state = () => ({
  currentMode: null
});

export const mutations = {
  setMode(state, mode) {
    state.currentMode = mode;
  }
};
