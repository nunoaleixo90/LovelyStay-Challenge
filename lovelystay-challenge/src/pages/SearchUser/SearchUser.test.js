import { render, screen } from '@testing-library/react';
import SearchUser from './index.js';

describe('Search User Page', ()=>{
    test('render without crashing', () => {
        const div = document.createElement('div');
        render(<SearchUser/>, div);
    
    })
    test('renders input correctly', () => {
        render(<SearchUser/>);
        expect(screen.getByPlaceholderText('Type a username...')).toBeInTheDocument();
    })
})
