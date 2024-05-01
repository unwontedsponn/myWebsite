export const smallText = 'I like to get things done';

export const longText = (
  <p>
    I thrive on bringing ideas to life. From creating books and games to websites and musical pieces, I'm fuelled by a passion for creative endeavours, and <span className="italic">getting things done</span>
  </p>
);

export const imageAttributes = {
  src: '/images/homepage-pic.jpeg',
  alt: "homepage picture",
  width: 500,
  height: 500,
  priority: 'priority'
};

export const words = ["things", "websites", "games", "music", "films", "books", "sketches"];

// Checks the viewport height - after checking if the window object is defined
// if (typeof window !== 'undefined') {
//   window.addEventListener('resize', function() {
//     console.log(window.innerHeight);
//   });
// }