import React from 'react';
import ReactDOM from 'react-dom';

//create a neew component. This component should produce some HTML

const App = ()  => {
    return  <div>Hi!</div>;
}

//take this component's generated HTML and put it on the page(DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

