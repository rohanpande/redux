// create a new component. This comopnent should produce some HTML

// Take this component's generated HTML and put it on the page in the DOM.

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCF9wVMXUrfqtAOTyq99lJSEXBV8Q-PY0c';

const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
};

ReactDOM.render(<App />,document.querySelector('.container'));
