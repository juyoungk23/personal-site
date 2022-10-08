const meta = {
  // general information
  displayName: 'Juyoung Kim',
  email: 'juyoungk23@gmail.com',
  picture: 'profilepic.jpg',
  sideBarAboutMe:
    "Hi, I'm Juyoung. I like building things. I am a senior at UNC-CH studying Computer Science, musician, and founder of Agora.",
  socialGithub: 'https://github.com/juyoungk23',
  socialFacebook: 'https://www.facebook.com/profile.php?id=100068944568739',
  socialInstagram: 'https://www.instagram.com/juyoung.kim/',
  socialLinkedin: 'https://www.linkedin.com/in/juyoung-kim-2023/',
  socialYoutube: '',
  socialTwitter: '',
  socialTiktok: '',
  // About Me (section is in about.md)
  // Resume
  // Education
  university: {
    name: 'University of North Carolina at Chapel Hill',
    degree: 'B.S. Computer Science',
    link: 'https://www.unc.edu/',
    graduationYear: 2023,
  },
  highSchool: {
    name: 'East Chapel Hill High School',
    graduationYear: 2019,
  },
  // Experience
  experience: {
    experience1: {
      company: 'Agora',
      position: 'Founder, C.E.O',
      daterange: 'September 2022 - Present',
      points: [
        'Deployed quantitative strategies to predict the value of fine art in various pricing contexts.',
        'Built production, on-line, end-to-end optimized machine learning pipelines with Pandas, Numpy, Scikit, Tensorflow, Dagster, Postgres, etc. on GCP with Kubernetes.',
        'Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.',
        'YC Alumn. Worked on everything. Built a 16-person team. Operated company for 6+ years.',
      ],
    },
    experience2: {
      company: 'Wells Fargo',
      position: 'Software Engineering Intern',
      link: 'https://www.wellsfargo.com/',
      daterange: 'June 2022 - August 2022',
      points: [
        'Founded a micro-vc fund to throw token amounts of money at problems I find interesting.',
        'Created the InstaSafe. Fast, automated investment docs for YC companies.',
      ],
    },
    experience3: {
      company: 'Carolina Connection',
      position: 'Audio Engineer',
      link: 'https://carolinaconnection.org/',
      daterange: 'August 2020 - May 2020',
      points: [
        'Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.',
        'Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.',
        'Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM’s, and other techniques.',
      ],
    },
    experience4: {
      company: 'Shiplify',
      position: 'Operations Consultant',
      link: 'https://www.shiplify.com/',
      daterange: 'December 2020 - Present',
      points: [
        'Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.',
        'Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations.',
      ],
    },
  },
  // Skills
  skills: [
    {
      title: 'Javascript',
      competency: 4,
      category: ['Web Development', 'Languages', 'Javascript'],
    },
    {
      title: 'Node.JS',
      competency: 3,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'React',
      competency: 4,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'Heroku',
      competency: 2,
      category: ['Web Development', 'Tools'],
    },
    {
      title: 'MS-SQL / T-SQL',
      competency: 5,
      category: ['Databases', 'Languages'],
    },
    {
      title: 'Flask',
      competency: 2,
      category: ['Web Development', 'Python'],
    },
    {
      title: 'Git',
      competency: 3,
      category: ['Tools'],
    },
    {
      title: 'Numpy',
      competency: 3,
      category: ['Data Science', 'Data Engineering', 'Python'],
    },
    {
      title: 'Tensorflow',
      competency: 2,
      category: ['Data Science', 'Python'],
    },
    {
      title: 'Jupyter',
      competency: 3,
      category: ['Data Science', 'Python'],
    },
    {
      title: 'Typescript',
      competency: 2,
      category: ['Web Development', 'Languages', 'Javascript'],
    },
    {
      title: 'HTML + SASS/SCSS/CSS',
      competency: 3,
      category: ['Web Development', 'Languages'],
    },
    {
      title: 'Python',
      competency: 5,
      category: ['Languages', 'Python'],
    },
    {
      title: 'MATLAB',
      competency: 2,
      category: ['Languages'],
    },
    {
      title: 'Pandas',
      competency: 3,
      category: ['Data Engineering', 'Data Science', 'Python'],
    },
    {
      title: 'Scikit-Learn',
      competency: 4,
      category: ['Data Engineering', 'Data Science', 'Python'],
    },
    {
      title: 'C#',
      competency: 4,
      category: ['Web Development', 'Languages'],
    },
  ],
  // Courses
  courses: [
    {
      title: 'Intro to Programming',
      number: 'COMP 110',
      university: 'UNC-CH',
    },
    {
      title: 'Programming Intelligent Physical Systems',
      number: 'COMP 590',
      university: 'UNC-CH',
    },
    {
      title: 'Human Robot Interaction',
      number: 'COMP 590',
      university: 'UNC-CH',
    },
    {
      title: 'Linear Algebra',
      number: 'MATH 347',
      university: 'UNC-CH',
    },
    {
      title: 'Probabilistic Models and Structured Prediction',
      number: 'COMP 590',
      university: 'UNC-CH',
    },
    {
      title: 'Introduction to Entrepreneurship',
      number: 'BUSI 500',
      university: 'UNC-CH',
    },
  ],
  // Stats
  birthdate: '2001-04-30T18:30:00',
  currentCity: 'Chapel Hill',
  hometown: 'Chapel Hill',
  myFavoriteThings: {
    movie: 'The Batman',
    album: 'good kid, m.A.A.d city',
    sport: 'Mixed Martial Arts',
    musician: 'Augustin Hadelich',
  },
};

export default meta;
