import { mapActions, mapState, mapGetters } from "vuex";

export default  {
  methods: {
    ...mapActions(["colourCycle"])
  },
  computed: {
    ...mapState(["activeBgColour"]),
    ...mapGetters([
      'styleObject'
    ])
  }
}
