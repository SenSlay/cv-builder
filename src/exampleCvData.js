// Example summary data
const exampleSummary = {
  description: 'Im the goat',
};

// Example personal details data
const examplePersonalDetails = {
  fullName: 'Irvan Castro',
  email: 'email@gmail.com',
  phoneNumber: '+63 123 456 7890',
  address: 'Earthy',
};

// Example education data
const exampleEducation = [
  {
    school: 'Mapua University',
    degree: 'Bachelor of Science in Computer Science',
    'start-date': 'Aug, 2023',
    'end-date': 'Present',
  },
];

// Example experience data
const exampleExperience = [
  {
    position: 'Web Developer Intern',
    company: 'Company',
    'start-date': 'Before',
    'end-date': 'Before',
    description: 'Created front-end components using React.',
  },
  {
    position: 'Customer Service Representative',
    company: 'Company',
    'start-date': 'Before',
    'end-date': 'Before',
    description: 'Handled deez nuts.',
  },
];

// Example projects data
const exampleProject = [
  {
    name: 'CV Builder',
    tools: 'React, Javascript, HTML, CSS',
    'start-date': 'Jan 1',
    'end-date': 'Present',
    description: 'Created using React',
  },
];

// Example skills data
const exampleSkill = [
  {
    category: 'Coding Languages',
    skills: 'Javascript, HTML/CSS, React, Python',
  },
];

const emptyDataCV = {
  personalDetails: {
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  },
  summary: {
    description: '',
  },
  educationList: [
    {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    },
  ],
  experienceList: [
    {
      company: '',
      role: '',
      description: '',
      startDate: '',
      endDate: '',
    },
  ],
  projectList: [
    {
      title: '',
      description: '',
      link: '',
    },
  ],
  skillList: [
    {
      category: '',
      skills: '',
    },
  ],
};

export {
  exampleSummary,
  examplePersonalDetails,
  exampleEducation,
  exampleExperience,
  exampleProject,
  exampleSkill,
  emptyDataCV,
};
