// react

// import React from 'react'; 
// const Greeting = ({ name }) => { 
//   return <div>Hello, {name}!</div>;
// };
// export default Greeting;


// ts

import React from 'react';

// Define a type for the props
interface GreetingProps {
  name: string;
}

// Convert to TypeScript by using React.FC and typing the props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

// react

// import React, { Component } from 'react'; 

// class Counter extends Component { 
//   state = {
//     count: 0
//   }; 

//   increment = () => {
//     this.setState({ count: this.state.count + 1 }); 
//   };

//   render() { 
//     return ( 
//       <div> 
//         <p>Count: {this.state.count}</p> 
//         <button onClick={this.increment}>Increment</button> 
//       </div> 
//     );
//   }
// } 

// export default Counter;

// typescript

import React, { Component } from 'react';

// Define types for props and state
interface CounterProps {}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> { 
  // Initialize state with a type
  state: CounterState = {
    count: 0
  };

  // Type the increment function
  increment = (): void => {
    this.setState({ count: this.state.count + 1 }); 
  };

  render() { 
    return ( 
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div> 
    );
  }
} 

export default Counter;




