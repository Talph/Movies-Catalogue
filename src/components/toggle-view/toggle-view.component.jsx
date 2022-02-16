import React from 'react';

import './toggle-view.styles.css';

export const ToggleView = ({ children, isActive, ...otherProps }) => (
    <button className={`${isActive ? 'grid-view' : ''} custom-button`}
        {...otherProps}>
        {children}
    </button>
)