// import React from 'react';
// const Greeting = ({ name }) => {
//   return <div>Hello, {name}!</div>;
// };
// export default Greeting;

import React from "react";

// Define the type of props using an interface
interface GreetingProps {
  name: string; // Ensuring 'name' is always a string
}

// Convert the component to TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
