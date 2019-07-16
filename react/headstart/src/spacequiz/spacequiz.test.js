import React from 'react';
import ReactDOM from 'react-dom';
import SpaceQuiz from './SpaceQuiz';

describe('SpaceQuiz', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SpaceQuiz />, div);
		ReactDOM.unmountComponentAtNode(div);
	  });
});
 