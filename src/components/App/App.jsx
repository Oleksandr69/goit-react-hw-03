import React from 'react'
// import { useEffect, useState } from 'react'
import './App.css'

import ContactForm from '../ContactForm/ContactForm'

const App = () => {
  
  // const [counter, setCounter] = useState(() => {
  //   const savedClicks = window.localStorage.getItem("saved-clicks");
  //   // console.log(savedClicks);
  //     if (savedClicks !== null) {
  //       return JSON.parse(savedClicks);
  //     } else {
  //       return { good: 0, neutral: 0, bad: 0 };
  //     }
  //   } 
  // );

  // const totalFeedback = (counter.good + counter.neutral + counter.bad);
  // const positiveFeedback = Math.round((counter.good / totalFeedback) * 100);
  
  // const updateFeedback = (feedbackType) => {
  //   if (feedbackType == 'reset') {
  //     setCounter({ good: 0, neutral: 0, bad: 0 });
  //   } else {
  //     setCounter({ ...counter, [feedbackType]: counter[feedbackType] + 1 });
  //   }
  // }

  // useEffect(() => {
  //   // console.log({...counter});
  //   window.localStorage.setItem("saved-clicks", JSON.stringify({...counter}));
  // }, [counter]);

    return (
    <div>
      <ContactForm
      />
      {/* <Options
          good={counter.good}
          neutral={counter.neutral}
          bad={counter.bad}
          totalFeedback = {totalFeedback}
        onUpdate={updateFeedback}
        />
        {totalFeedback == 0 ? (<Notification
        />) :
          (<Feedback
            good={counter.good}
            neutral={counter.neutral}
            bad={counter.bad}
            total={totalFeedback}
            positive={positiveFeedback}
          />)} */}
    </div>
  );
};

export default App
