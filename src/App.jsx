import { useState } from "react";
import "./App.css";

const FaqItem = ({question,answer}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={toggleShow}>
      {question}
      </div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
         {answer}
        </div>
      </div>
    </div>
  );
};
const FaqAccordian = ({data}) => {
  return (
    <div className="faq-accordian">
      <h1>FAQs</h1>
     {data.map((item)=>(
  <FaqItem key={item.id} question={item.question} answer={item.answer} />
    ) )}
   
    </div>
  );
};

const data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is an open-source JavaScript library for building user interfaces. It was developed and is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: 2,
    question: " What are the features of React?",
    answer:
      "Component-Based: React is built around the concept of reusable UI components, making it easy to manage and maintain code. Virtual DOM: React's virtual DOM efficiently updates the actual DOM, improving rendering performance. JSX: JSX allows developers to write HTML-like code within JavaScript for defining component structures",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript.JSX is not required to use React, but it is highly recommended. JSX makes it easier to write and understand your UI code, as you don't have to switch between two separate languages.",
  },
  {
    id: 4,
    question: " What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight representation of the real DOM. It is a JavaScript object that describes the current state of the UI. When the state of the UI changes, React updates the Virtual DOM. Then, React compares the Virtual DOM to the real DOM and efficiently updates the real DOM only with the changes that are needed",
  },
  {
    id: 5,
    question: " What are the different types of components in React?",
    answer:
      "Functional components: Functional components are pure functions that take props as input and return an element as output. They are the simplest and most common type of component in React. Class components: Class components are more complex than functional components, but they offer more features, such as state management and lifecycle hooks. ",
  },
  {
    id: 6,
    question: " What is the one-way data flow in React? ",
    answer:
      "One-way data flow in React is a design pattern that ensures that data flows in one direction, from parent to child components.",
  },
  {
    id: 7,
    question:
      " What is the difference between a controlled and uncontrolled component? ",
    answer:
      "Controlled components use React state to manage their state. This means that the parent component is responsible for updating the state of the controlled component. Uncontrolled components do not use React state to manage their state. Instead, they manage their own internal state.",
  },
];

function App() {
  return (
    <>
      <div className="App">
        <FaqAccordian data={data} />
      </div>
    </>
  );
}

export default App;
