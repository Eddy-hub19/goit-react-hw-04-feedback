// import { Component } from 'react';
// import { SectionTitle } from './Feedback/SectionTitle/SectionTitle';
// import { Statistics } from './Feedback/Statistics/Statistics';
// import { Notification } from './Feedback/Notification/Notification';
// import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
// import css from './App.module.css';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedBack = state => {
//     this.setState(prevState => ({
//       [state]: prevState[state] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     let positive = 0;
//     if (good !== 0) {
//       positive = Math.round((good / this.countTotalFeedback()) * 100);
//     }
//     return positive;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     return (
//       <div className={css.container}>
//         <SectionTitle title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedBack}
//           />
//         </SectionTitle>

//         <SectionTitle title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </SectionTitle>
//       </div>
//     );
//   }
// }
