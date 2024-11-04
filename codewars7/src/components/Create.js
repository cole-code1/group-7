import React from 'react';

// Create Element 
const createElement = (tag = 'div', properties = {}, content) => {
    return React.createElement(tag, properties, content);
};

// Create Unordered List 
const createUnorderedList = (list) => {
    return (
        <ul>
            {list.map((listitem) => (
                <li key={listitem}>{listitem}</li>
            ))}
        </ul>
    );
};

// Example to demonstrate the functions 
const Demo = () => {
    return (
        <div>
            {createElement('div', {}, 'Hello World')}
            {createUnorderedList(['apples', 'oranges', 'bananas'])}
        </div>
    );
};

export default Demo;