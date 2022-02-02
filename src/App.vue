<template>
  <Experiment title="magpie3-iterated-guessing">
    <InstructionScreen :title="'Welcome'">
      In this experiment you will be asked to guess quantities of everyday events.
      This can sometimes be difficult.
      This is why we show you on each trial how a one previous participant in this experiment has answered the question.
      You can take this value as an orientation for yourself, but you should give your own best guess.
    </InstructionScreen>

    <ConnectInteractiveScreen :title="'Connecting...'"></ConnectInteractiveScreen>

    <!-- <AwaitIteratedResultScreen :title="'Waiting for previous participants'"> -->
    <!--   Please wait while we retrieve the data from previous participants. -->
    <!-- </AwaitIteratedResultScreen> -->

    <!-- Here we create screens in a loop for every entry in forced_choice -->
    <template v-for="(trial, i) of guessingTrials">
      <Screen :key="i">

      <Slide>
        <p> <strong>{{trial.question}}</strong></p>
        <p style="textcolor:'gray'"> A previous participant answered {{trial.defaultGuess}} {{trial.unit}}.</p>
        <p> Chain: {{$magpie.socket.chain}} </p>
        <p> Generation: {{$magpie.socket.generation}} </p>
        <p> Last iteration results: {{$magpie.socket.lastIterationResults}} </p>
        <TextareaInput
            :response.sync= "$magpie.measurements.guess"
          />
        <p v-if= "$magpie.measurements.guess && isNaN($magpie.measurements.guess)">Please enter a number!</p>
        <button
          v-if= "$magpie.measurements.guess && !isNaN($magpie.measurements.guess)"
          @click="$magpie.saveAndNextScreen();">
          Next
        </button>

        <Record :data="{
              item: trial.item,
            }" />
      </Slide>

    </Screen>
    </template>


    <!--

      Comment this in, to try out interactive components like the Chat component.

      <ConnectInteractiveScreen />

      <Screen>
          <Chat :messages.sync="$magpie.measurements.messages"></Chat>
          <button @click="$magpie.saveAndNextScreen()">Next</button>
      </Screen>

      -->

    <PostTestScreen />

    <!-- While developing your experiment, using the DebugResults screen is fine,
      once you're going live, you can use the <SubmitResults> screen to automatically send your experimental data to the server. -->
      <SubmitResultsScreen/>
    <!-- <DebugResultsScreen /> -->
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
  }
};

</script>
