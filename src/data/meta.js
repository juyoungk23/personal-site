const meta = {
  // general information
  displayName: 'Juyoung Kim',
  email: 'juyoungk23@gmail.com',
  picture: 'profilepic.jpg',
  sideBarAboutMe:
    "Hi, I'm Juyoung. I like building things. I am a senior at UNC-CH, a musician, and the founder of Agora.",
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
        'Developing an augmented reality application.',
        '(Not getting into too much more detail here until the application is released)',
      ],
    },
    experience2: {
      company: 'Wells Fargo',
      position: 'Software Engineering Intern',
      link: 'https://www.wellsfargo.com/',
      daterange: 'June 2022 - August 2022',
      points: [
        `Developed a working health check dashboard for Wells Fargo’s data warehouse, which will be used in
        real-time by the developers of the team.`,
      ],
    },
    experience3: {
      company: 'Carolina Connection',
      position: 'Audio Engineer',
      link: 'https://carolinaconnection.org/',
      daterange: 'August 2020 - May 2021',
      points: [
        'Mixed and mastered audio for the weekly Carolina Connection Radio show at UNC-CH',
        'Worked with Adobe Audition and several third-party audio production plugins to bring a crystal-clear sound to the show every week',
        'Aired at WCHL-97.9',
      ],
    },
    experience4: {
      company: 'Shiplify',
      position: 'Operations Consultant',
      link: 'https://www.shiplify.com/',
      daterange: 'December 2020 - Present',
      points: [
        `Provide accurate information on hundreds of addresses for freight truck companies in order to
        streamline operations and minimize loss of revenue.`,
        'Shiplify provides accurate, real-time location data to help LTL carriers apply the correct accessorial fees to invoices before they are sent to customers.',
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
