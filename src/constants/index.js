import { meta, shopify, starbucks, tesla, exposys } from "../assets/images";

import {
    apptentive,
    amazon,
    codebeat,
    python,
    numpy,
    pandas,
    matplotlib,
    seaborn,
    clang,
    tensorflow,
    movie,
    coinmarketcap,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: clang,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: matplotlib,
        name: "Matplotlib",
        type: "Library",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Library",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Library",
    },
    {
        imageUrl: numpy,
        name: "Numpy",
        type: "Library",
    },
    {
        imageUrl: seaborn,
        name: "Seaborn",
        type: "Library",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Exposys Data Lab",
        icon: exposys,
        iconBg: "#accbe1",
        date: "November 2023 - December 2023",
        points: [
            "Implemented UI/UX designs in HTML, CSS, and JavaScript for seamless user experience..",
            "Enhanced interactivity with React, improving 13% engagement and front-end efficiency.",
            "Debugged and optimized codebase for improved performance and cross-browser compatibility by 15%.",
            "Contributed to agile development, collaborating on feature delivery for high-quality web solutions.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Implemented UI/UX designs in HTML, CSS, and JavaScript for seamless user experience..",
    //         "Enhanced interactivity with React, improving 13% engagement and front-end efficiency.",
    //         "Debugged and optimized codebase for improved performance and cross-browser compatibility by 15%.",
    //         "Contributed to agile development, collaborating on feature delivery for high-quality web solutions.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mahimadevi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mahima-devi/',
    }
];

export const projects = [
    {
        iconUrl: amazon,
        theme: 'btn-back-red',
        name: 'Amazon Clone',
        description: 'This project is an Amazon-like e-commerce application that provides users with the ability to browse and purchase products, manage their shopping cart, and complete the checkout process. The application includes features such as user authentication, product management, order tracking, and payment processing using the Stripe API.',
        link: 'https://github.com/mahimadevi/amazon_clone',
    },
    {
        iconUrl: coinmarketcap,
        theme: 'btn-back-green',
        name: 'CryptoCurrency Market Analyser',
        description: 'Designed visually appealing interfaces with React, optimized for different screen sizes for improved accessibility. Used CoinRanking API and Bing News Search APIs to show real-time exchange rates for accurate and up-to-date information. Integrated charts to visualize cryptocurrency price trends, offering users insights into historical data. Implemented secure methods for API requests, ensuring data integrity and user privacy in compliance with crypto project standards',
        link: 'https://github.com/mahimadevi/CryptoCurrency-Market-Analyser',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-blue',
        name: 'Movie Recommender',
        description: 'This project implements a Movie Recommender System using content-based filtering. It suggests movies to users based on the similarities between their selected movie and other movies in the dataset. The system considers various features like genres, keywords, cast, and crew to provide personalized recommendations.',
        link: 'https://github.com/mahimadevi/Movie_recommendor',
    },
    {
        iconUrl: apptentive,
        theme: 'btn-back-pink',
        name: 'Customer Segmentation',
        description: 'This project focuses on customer segmentation using data from a mall. It utilizes K-Means clustering to group customers based on features such as age, annual income, and spending score. The project includes data exploration, visualizations, and interactive 3D scatter plots to showcase the identified customer clusters.',
        link: 'https://github.com/mahimadevi/Customer-Segmentation',
    },
    {
        iconUrl: codebeat,
        theme: 'btn-back-black',
        name: 'Amazon Product Reviews Sentiment Analysis',
        description: 'This project demonstrates sentiment analysis in Python using two different techniques: VADER (Valence Aware Dictionary and sEntiment Reasoner) with a bag-of-words approach and a pre-trained Roberta model from Hugging Face. The notebook covers data reading, basic exploratory data analysis (EDA), and the application of sentiment analysis models to analyze the sentiment of Amazon reviews..',
        link: 'https://github.com/mahimadevi/amazon-product-review-sentiment-analysis',
    }
];
