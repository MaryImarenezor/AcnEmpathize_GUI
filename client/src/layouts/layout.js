import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/Header/NavBar';

//insert links to stylesheets soon

function Layout(html) {
    return (
        <html>
            <head>
                <title>AcnEmpathize</title>
                <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></link>
            </head>
            <body>
                <NavBar />
                {html.children}
                <Footer />
            </body>
        </html>
    );
}

export default Layout;