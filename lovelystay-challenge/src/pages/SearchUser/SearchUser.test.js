import { render, screen } from '@testing-library/react';
import SearchUser from './index.js';

describe('Search User', ()=>{
    test('first screen test', () => {
        render(<SearchUser/>);
    
        screen.debug();
    })
})
