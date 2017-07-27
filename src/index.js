import React from 'react';
import ReactDOM from 'react-dom';

const list = React.createElement('ul', { className: 'my-interests' }, [
  React.createElement('li', {}, 'JavaScript'),
  React.createElement('li', {}, 'React'),
  React.createElement('li', {}, 'Movies'),
  React.createElement('li', {}, 'Ice cream')
]);

const meInReact = React.createElement('div', { className: 'me' }, [
  React.createElement('h1', {}, 'An Awesome Person'),
  React.createElement('p', {}, 'Who is learning React'),
  list
]);

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
