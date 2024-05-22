import React from 'react';
import './App.css'
import { Menu } from "./base/components";

function App({children}) {
    const menuItems = [
        {
            label: 'Home',
            to: '/'
        },
        {
            label: 'Frontend',
            subMenu: [
                { label: 'Consulting',  to: '/frontend/consulting' },
                { label: 'Development',  to: '/frontend/development' },
                { label: 'Design',  to: '/frontend/design' },
            ],
        },
        {
            label: 'Services',
            subMenu: [
                { label: 'Consulting',  to: '/services/consulting' },
                { label: 'Development',  to: '/services/development' },
                { label: 'Design',  to: '/services/design' },
            ],
        },
        {
            label: 'About',
            to: '/about'
        },
        {
            label: 'Contact',
            to: '/contract'
        },
    ];

    return (
        <div className="app">
            <Menu className={'app-menu'} items={menuItems} />
            <div className={'app-content'}>
                {children}
            </div>
        </div>
    );
}

export default App;