const meta = {
  // general information
  displayName: 'Juyoung Kim',
  email: 'juyoungk23@gmail.com',
  picture: 'profilepic.jpg',
  sideBarAboutMe:
    "Hi, I'm Juyoung. I like building things. I am a recent graduate from UNC-CH, a musician, and a life-long learner.",
  socialGithub: 'https://github.com/juyoungk23',
  // socialFacebook: 'https://www.facebook.com/profile.php?id=100068944568739',
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
      company: 'Wells Fargo',
      position: 'Software Engineering Intern',
      link: 'https://www.wellsfargo.com/',
      daterange: 'June 2022 - August 2022',
      points: [
        `During my 10-week internship, I developed a real-time dashboard and notification system for the developer team to monitor loan application statuses.
        `,
        `Received a Shared Success Corporate Recognition for Learning and Growing from my team.
        `,
      ],
    },
    experience2: {
      company: 'Shiplify',
      position: 'Operations Consultant',
      link: 'https://www.shiplify.com/',
      daterange: 'December 2020 - Present',
      points: [
        `Provide accurate locational information for LTL shipment companies to optimize operations and minimize revenue loss.
        `,
        `Rapidly advanced through 3 promotions to join the Data Quality Task Force, responsible for ensuring data accuracy and integrity by cleaning up data from lower teams.
        `,
      ],
    },
    experience3: {
      company: 'Carolina Connection',
      position: 'Audio Engineer',
      link: 'https://carolinaconnection.org/',
      daterange: 'August 2020 - May 2021',
      points: [
        'Carolina Connection is a student-produced radio show that airs on WCHL-97.9 every Saturday morning at noon.',
        'As the Audio Engineer, I mixed, mastered, and finalized the weekly Carolina Connection Radio show.',
        'Worked with Adobe Audition and several audio production software to bring a crystal-clear sound to the show every week',
      ],
    },
  },
  // Skills
  skills: [
    {
      title: 'Javascript',
      competency: 5,
      category: ['Web Development', 'Languages', 'Javascript'],
    },
    {
      title: 'Java',
      competency: 3,
      category: ['Web Development', 'Languages'],
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
      title: 'MS-SQL / T-SQL',
      competency: 5,
      category: ['Databases', 'Languages'],
    },
    {
      title: 'Flask',
      competency: 3,
      category: ['Web Development', 'Python'],
    },
    {
      title: 'Git',
      competency: 3,
      category: ['Tools'],
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
      competency: 4,
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
      title: 'C#',
      competency: 4,
      category: ['Web Development', 'Languages'],
    },
    {
      title: 'Unity',
      competency: 3,
      category: ['Tools'],
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
    {
      title: 'Modern Web Programming',
      number: 'COMP 426',
      university: 'UNC-CH',
    },
    {
      title: 'Files and Databases',
      number: 'COMP 421',
      university: 'UNC-CH',
    },
    {
      title: 'Algorithms and Analysis',
      number: 'COMP 550',
      university: 'UNC-CH',
    },
    {
      title: 'Models of Languages and Computation',
      number: 'COMP 455',
      university: 'UNC-CH',
    },
    {
      title: 'Peer Tutoring',
      number: 'EDUC 387',
      university: 'UNC-CH',
    },
    {
      title: 'Foundation of Programming',
      number: 'COMP 401',
      university: 'UNC-CH',
    },
    {
      title: 'Data Structures',
      number: 'COMP 410',
      university: 'UNC-CH',
    },
    {
      title: 'Computer Organization',
      number: 'COMP 411',
      university: 'UNC-CH',
    },
    {
      title: 'Discrete Structures',
      number: 'COMP 283',
      university: 'UNC-CH',
    },
  ],
  // Stats
  birthdate: '2001-04-30T18:30:00',
  currentCity: 'Chapel Hill, NC',
  hometown: 'Chapel Hill, NC',
  myFavoriteThings: {
    movie: 'The Batman',
    favoriteSong: 'Smells Like Teen Spirit by Nirvana',
    album: 'Views by Drake',
    sport: 'Mixed Martial Arts',
    musician: 'Augustin Hadelich',
  },
};

export default meta;
