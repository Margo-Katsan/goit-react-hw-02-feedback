import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    if (!this.countTotalFeedback()) {
      return 0;
    }
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }
  onLeaveFeedback = optionType => {
    this.setState(prevState => {
      return {
        [optionType]: prevState[optionType] + 1
      }
    })
  }
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
      </>
    );     
  }
}

