// import React from 'react';

// const About = () => {
//   return (
//     <h1>
//       About
//     </h1>
//   )
// }

// export default About;

// src/components/AboutUs.js
// import React from 'react';
import '../styles/About.css';
function About() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to <strong>Food wala</strong>, your go-to food delivery app!</p>
      <p>
        At <strong>Food wala</strong>, we're passionate about delivering delicious meals
        straight to your doorstep. Our mission is to provide convenient and
        tasty dining experiences for our customers.
      </p>
      <p>
        Our dedicated team of chefs and delivery drivers work tirelessly to
        ensure you receive your favorite dishes in a timely manner. We pride
        ourselves on the quality of our food and the satisfaction of our
        customers.
      </p>
      <p>
        Thank you for choosing <strong>Food wala</strong>. We look forward to serving you
        and satisfying your cravings!
      </p>
    </div>
  );
}

export default About;
