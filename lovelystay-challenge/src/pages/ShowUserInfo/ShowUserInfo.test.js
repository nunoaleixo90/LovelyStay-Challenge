import { render, screen } from '@testing-library/react';
import ShowUserInfo from './index.js';

describe('Show User Info', ()=>{
    test('first screen test', () => {
        render(<ShowUserInfo/>);
    
        screen.debug();
    })
})