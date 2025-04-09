import React from 'react';

const Footer = () => {
    const links = ['Home', 'About', 'Contact', 'Blog'];

    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-md-3 col-6">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis totam corrupti! Aperiam facilis, maxime tenetur porro eaque fugit qui.
                        </p>
                    </div>
                    {[...Array(3)].map((_, index) => (
                        <div className="col-md-3 col-6 " key={index}>
                            <ul className="list-unstyled foot_link">
                                {links.map((link, idx) => (
                                    <li key={idx}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-3 border-top pt-3">
                    <small>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
