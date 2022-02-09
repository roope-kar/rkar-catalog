import React from 'react';
import Navigation from 'src/components/Navigation.jsx';
import Outlet from 'src/components/Outlet.jsx';

export default function App() {
    return (
        <React.Fragment>
            <header>header</header>
            <section id={"sidebar"} aria-labelledby={"nav-title"}>
                    <Navigation title={'Components'}>
                        <Navigation.Item to={'alpha'}>Alpha</Navigation.Item>
                        <Navigation.Item to={'beta'}>Beta</Navigation.Item>
                        <Navigation.Item to={'charlie'}>Charlie</Navigation.Item>
                    </Navigation>
                </section>
            <main id={"outlet"}>
                <Outlet />
            </main>
            <footer>footer</footer>
        </React.Fragment>
    );
}
