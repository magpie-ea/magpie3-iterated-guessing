<template>
  <Experiment title="magpie3-iterated-guessing">
    <InstructionScreen :title="'Welcome'">
      In this experiment you will be asked to guess quantities of everyday
      events or acts. This can sometimes be difficult. This is why each trial
      shows the answer of the previous participant in this experiment for the
      same question. You can use this value for orientation, but you should give
      your own best guess.
    </InstructionScreen>

    <ConnectInteractiveScreen
      :title="'Connecting...'"
    ></ConnectInteractiveScreen>

    <AwaitIteratedResultScreen
      :title="'Waiting for previous participant to finish'"
    >
    </AwaitIteratedResultScreen>

    <Wait
      :time="0"
      @done="
        prepareData();
        $magpie.nextScreen();
      "
    />

    <!-- <Screen :title="'Get ready'">
			Ready to start the experiment.
			<br>
			<br>
			When you are ready, click the button to start your test session.
			<button @click="prepareData();$magpie.nextScreen();">
				Next
			</button>
		</Screen> -->

    <template v-for="(trial, i) of guessingTrials">
      <Screen :key="i">
        <Slide>
          <p>
            <strong>{{ trial.question }}</strong>
          </p>
          <p style="textcolor: 'gray'">
            The previous participant answered
            {{ getPreviousResponse(trial.item) }} {{ trial.unit }}.
          </p>
          <!-- <p> Chain: {{$magpie.socket.chain}} </p> -->
          <!-- <p> Generation: {{$magpie.socket.generation}} </p> -->
          <!-- <p> Last iteration results: {{$magpie.socket.lastIterationResults}} </p> -->
          <TextareaInput :response.sync="$magpie.measurements.guess" />
          <p
            v-if="
              $magpie.measurements.guess && isNaN($magpie.measurements.guess)
            "
          >
            Please enter a number!
          </p>
          <button
            v-if="
              $magpie.measurements.guess && !isNaN($magpie.measurements.guess)
            "
            @click="$magpie.saveAndNextScreen()"
          >
            Next
          </button>

          <Record
            :data="{
              chain: $magpie.socket.chain,
              generation: $magpie.socket.generation,
              variant: trial.variant,
              item: trial.item,
              anchor: getPreviousResponse(trial.item)
            }"
          />
        </Slide>
      </Screen>
    </template>

    <PostTestScreen />

    <SubmitResultsScreen />
  </Experiment>
</template>

<script>
// Load data from csv files as javascript arrays with objects
import guessingTrials from '../trials/guessingTrials.csv';
import _ from 'lodash';

export default {
  name: 'App',
  data() {
    return {
      guessingTrials,
      // Expose lodash.range to template above
      range: _.range
    };
  },
  methods: {
    prepareData: function () {
      // console.log("variant: ", this.$magpie.socket.variant)
      // console.log("chain: ", this.$magpie.socket.chain)
      // console.log("generation: ", this.$magpie.socket.generation)
      var variant = this.$magpie.socket.variant;
      this.guessingTrials = _.shuffle(
        _.filter(this.guessingTrials, { variant: variant })
      );
    },
    getPreviousResponse: function (item) {
      // which generation is this
      var generation = this.$magpie.socket.generation;

      // if we are in the first generation, we will return the defaultGuess for the item
      if (generation == 1) {
        var currrentItemData = _.filter(this.guessingTrials, { item: item });
        return currrentItemData[0].defaultGuess;
      }

      // get information about the results from the last iteration from the socket
      var lastIterationResults = this.$magpie.socket.lastIterationResults;

      // before initialization with ConnectInteractiveScreen, lastIterationResults will be 'null'
      // so we make sure that there is some output
      // if we are neither first-generation in the chain, nor have an empty socket,
      // we can return the previous input for the current item

      var filteredData = _.filter(lastIterationResults, ['item', item]);
      var extractedRow = filteredData[0];
      return extractedRow == null ? null : extractedRow.guess;
    }
  }
};
</script>
