import React from 'react';

const Navigation = function Navigation({ title, children }) {
    return (
        <nav>
            <h2 id={"nav-title"}>{title}</h2>
            <ul>
                {children}
            </ul>
        </nav>
    );
}

Navigation.Item = function Item({ to, children }) {
    return (
        <li>
            <a href={`#${to}`}>{children}</a>
        </li>
    )
}

export default Navigation;


