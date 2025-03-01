const projectsData = [
  {
    title: 'Straight Flush Plumbing',
    description:
      'Designed and developed a website for a local plumbing company to showcase services and contact information. The website is built with Next.js and Tailwind CSS, ensuring high performance and accessibility. 100% Lighthouse score 🚀',
    imgSrc: '/static/images/projectCards/straight-flush.png',
    deployed: 'https://straightflush.ca/',
    tools: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Personal Website',
    description:
      'Designed and developed a personal website to showcase projects and notes, emphasizing efficient and responsive design with Tailwind CSS and Next.js. Achieved near-perfect Lighthouse score, ensuring high performance and accessibility. 42 stars and 9 forks on GitHub ⭐️',
    imgSrc: '/static/images/projectCards/personal-site-img.png',
    href: 'https://github.com/Cwarcup/personal-blog',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Notflix Clone',
    description:
      'This project is a Netflix clone that was built using technologies such as TypeScript, Next.js, React, Hasura, Supabase, GraphQL, Magic, and more. Please note: This is a learning project and is not intended for commercial use. All content used is for demonstration purposes only.',
    imgSrc: '/static/images/projectCards/notflix-clone-preview.png',
    href: 'https://github.com/Cwarcup/netflix-clone',
    tools: ['TypeScript', 'Next.js', 'GraphQL', 'Supabase', 'Magic', 'Hasura'],
  },
  {
    title: 'Coffee Shops - Discover and Favourite Coffee Shops near you!',
    description:
      'This project served as a learning tool for me to get more familiar with the advanced features of Next.js and to learn more about the use of Airtable as a database. I also wanted to learn more about the use of SWR to handle data fetching and caching. I wanted to learn about creating API routes and using Airtable to store data.',
    imgSrc: '/static/images/projectCards/Coffee.png',
    href: 'https://github.com/Cwarcup/coffee-shops',
    deployed: 'https://coffee-shops-cwarcup.vercel.app',
    tools: ['TypeScript', 'Next.js', 'SWR', 'Airtable', 'Foursquare API'],
  },
  {
    title: 'Nextjs Tailwind Template',
    description:
      "This is a Next.js, Tailwind CSS starter template intended to be used as a portfolio or personal website. It comes out of the box configured with the latest technologies, tools, and best practices. It's built to be easily configured, customized and extended. It's also fully responsive and mobile friendly.",
    imgSrc: '/static/images/projectCards/nextjstailwind.jpg',
    href: 'https://github.com/Cwarcup/nextjs-tailwind-portfolio',
    deployed: 'https://nextjs-tailwind-portfolio-cwarcup.vercel.app/',
    tools: ['React', 'Nextjs', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'E-commerce Website with TypeScript, React, Redux and Firebase',
    description: `This is a project that I built while learning React and Redux. It is a fully functional e-commerce website that allows users to sign in with their Google account, add items to their cart, and make payments with Stripe. It is built with TypeScript, React, Redux, Firebase, Stripe, and Tailwind.`,
    imgSrc: '/static/images/projectCards/twitter-card.jpg',
    href: 'https://github.com/Cwarcup/ecom-firebase',
    deployed: 'https://firebase-store-cwarcup.netlify.app/',
    tools: ['React', 'Redux', 'Firebase', 'Stripe', 'Tailwind CSS'],
  },
  {
    title: 'Is this a banana?',
    description: `Is this a banana? No. Maybe? I don't know. Use this app to find out. I wanted to learn more about machine learning and how to use TensorFlow.js. I explored the TensorFlow.js website and found a pre-trained image classification model called MobileNet. I used this model to classify images of bananas and other objects.`,
    imgSrc: '/static/images/projectCards/banana.jpg',
    href: 'https://github.com/Cwarcup/wtf_is_this',
    deployed: 'https://is-it-a-banana.vercel.app/',
    tools: ['React', 'TensorFlow.js'],
  },
  {
    title: 'Supa Snacks',
    description: `Supa Snacks is a mini-project to learn Supabase and introduce myself to React-Query. It's a simple app that allows you to add snacks to a list, edit and delete from. Users can also change the order of the snacks in the list. It is built using TypeScript, React, React-Query, Supabase and React Router Dom.`,
    imgSrc: '/static/images/projectCards/supa-snacks.jpg',
    href: 'https://github.com/Cwarcup/supa-snacks',
    tools: ['React', 'Supabase', 'React-Query', 'React Router Dom'],
  },
  {
    title: 'PayByFonie',
    description: `PayByFonie is a play on the app PayByPhone, a parking app that allows you to pay for parking via your phone. PayByFonie is a similar app, but allows you to search a destination and view parking meter data near that location. Users can search a location using the MapBox API, view the price and time limit of parking meters near that location, and obtain the PayByPhone meter number to pay for that meter.`,
    imgSrc: '/static/images/projectCards/paybyfonie.jpg',
    href: 'https://github.com/Cwarcup/free-parking-mapper',
    deployed: 'https://paybyfonie.vercel.app/',
    tools: ['MapBox', 'React', 'Axios', 'Tailwind CSS'],
  },
  {
    title: 'Cthulhu Teaches Typing',
    description: `TCthulhu Teaches Typing is a typing game for learning to type. Our goal was to target the keyboard enthusiast market with a minimal, yet customizable application to track and compare typing statistics. We also wanted to create a fun and engaging typing game that would help users learn to type faster and more accurately.`,
    imgSrc: '/static/images/projectCards/CTT.jpg',
    href: 'https://github.com/Cwarcup/ctt-front-end',
    deployed: 'https://www.cthulhuteachestyping.com/',
    tools: ['React', 'Tailwind CSS', 'Socket.io', 'Node.js', 'PostgreSQL', 'Ruby on Rails'],
  },
  {
    title: 'Jungle - E-Commerce Application',
    description: `A mini e-commerce application built with Rails 6.1. This project was completed as part of the Lighthouse Labs Web Development Bootcamp. Jungle allows visitors to browse products, add them to their cart, and purchase them using Stripe. Admins can add and remove products and categories, and view sales data.`,
    imgSrc: '/static/images/projectCards/jungle.jpg',
    href: 'https://github.com/Cwarcup/jungle-rails',
    tools: ['Ruby on Rails', 'PostgreSQL', 'Stripe', 'Bootstrap', 'Cypress', 'RSpec'],
  },
  {
    title: 'On Your Mental Podcast',
    description: `Website for the On Your Mental Podcast. On Your Mental focuses on mental health and wellness. The website was built using Next.js and Tailwind CSS. The website is hosted on Vercel. Content is updated automatically when new episodes are published using the RSS feed and Youtube API.`,
    imgSrc: '/static/images/projectCards/OnYourMental.jpg',
    href: 'https://github.com/Cwarcup/on-your-mental',
    deployed: 'www.onyourmental.com',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'RSS Feed', 'Youtube API'],
  },
  {
    title: 'TinyApp',
    description: `TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly). Includes features such as authentication, analytics dashboard, hashed passwords, encrypted cookies. Built with Express and EJS.`,
    imgSrc: '/static/images/projectCards/tinyApp.jpg',
    href: 'https://github.com/Cwarcup/tinyapp',
    tools: ['Node.js', 'Express', 'EJS', 'bcrypt', 'cookie-session'],
  },
  {
    title: 'lotide',
    description: `A library similar to lodash for JavaScript. This project was created and published by me as part of my learnings at Lighthouse Labs. The library provides utilities that are not built into native JavaScript such as 'flatten()' to convert nested arrays into a single array.`,
    imgSrc: '/static/images/projectCards/lotide.jpg',
    href: 'https://github.com/Cwarcup/lotide#readme',
    deployed: 'https://www.npmjs.com/package/@cwarcup/lotide',
    tools: ['JavaScript', 'Node.js', 'Mocha', 'Chai'],
  },
  {
    title: 'jsBooks - Interactive Notes and Code Cells',
    description: `This is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.`,
    imgSrc: '/static/images/projectCards/jsBooks.jpg',
    href: 'https://github.com/Cwarcup/jbook',
    tools: ['React', 'TypeScript', 'Babel', 'Webpack', 'Monaco Editor', 'NPM', 'Lerna'],
  },
]

export default projectsData
