import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import css from "./App.module.css"

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
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        {good === 0 && neutral === 0 && bad === 0 ? (
          <p className={css.message}>There is no feedback</p>
        ) : (
          <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
          </Section>
        )}
      </>
    );     
  }
}

