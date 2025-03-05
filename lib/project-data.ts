import { Project } from '../app/My_Projects/project';

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'Autonomous Robot Navigation using Deep RL',
    category: 'Web Development',
    description: 'Developing autonomous navigation capabilities for robots using Deep Reinforcement Learning techniques.',
    professor: {
      name: 'Prof. Sriparna Saha',
      contact: '+91 9372180121 | nrisht@gmail.com'
    },
    teamMembers: [
      {id:"1",name:'Chaitanya Narayan',avatar:'/profile-2.png'},
      {id:"2",name:'Emily Wong',avatar:'/profile-2.png'}
      ],
    deadline: 'March 15, 2025',
    tasks: [
      {
        id: 'task1',
        title: 'Research and Planning',
        description: 'Research existing robot navigation algorithms',
        status: 'Completed',
        dueDate: 'Mar 15, 2025'
      },
      {
        id: 'task2',
        title: 'Algorithm Implementation',
        description: 'Implement core navigation algorithm using Deep RL techniques',
        status: 'In Progress',
        dueDate: 'Mar 25, 2025'
      },
      {
        id: 'task3',
        title: 'API Scheduling',
        description: 'Develop API endpoints for robot control and scheduling',
        status: 'Upcoming',
        dueDate: 'Apr 15, 2025'
      }
    ],
    messages: [
      {
        id: 'msg1',
        sender: {
          
          name: 'Olivia',
          role: 'Mentor',
          avatar: '/profile-2.png'
        },
        text: 'Hey, did you complete the algorithm implementation?',
        timestamp: '1h ago'
      },      {
        id: 'msg2',
        sender: {
          
          name: 'Olivia',
          role: 'Mentor',
          avatar: '/profile-2.png'
        },
        text: 'Hey, did you complete the algorithm implementation?',
        timestamp: '1h ago'
      },      {
        id: 'msg3',
        sender: {
          
          name: 'Olivia',
          role: 'Mentor',
          avatar: '/profile-2.png'
        },
        text: 'Hey, did you complete the algorithm implementation?',
        timestamp: '1h ago'
      },      {
        id: 'msg4',
        sender: {
          
          name: 'Olivia',
          role: 'Mentor',
          avatar: '/profile-2.png'
        },
        text: 'Hey, did you complete the algorithm implementation?',
        timestamp: '1h ago'
      },      {
        id: 'msg5',
        sender: {
          
          name: 'Olivia',
          role: 'Mentor',
          avatar: '/profile-2.png'
        },
        text: 'Hey, did you complete the algorithm implementation?',
        timestamp: '1h ago'
      },
      {
        id: 'msg6',
        sender: {
          
          name: 'Jackson Lee',
          role: 'Team Member',
          avatar: '/profile-2.png'
        },
        text: 'Almost! Just running final checks on the implementation.',
        timestamp: '1h ago'
      },      {
        id: 'msg7',
        sender: {
          
          name: 'Olivia',
          role: 'Mentor',
          avatar: '/profile-2.png'
        },
        text: 'Hey, did you complete the algorithm implementation?',
        timestamp: '1h ago'
      },      {
        id: 'msg8',
        sender: {
          
          name: 'Olivia',
          role: 'Mentor',
          avatar: '/profile-2.png'
        },
        text: 'Hey, did you complete the algorithm implementation?',
        timestamp: '1h ago'
      }
    ],
    resources: [
      {
        id: 'res1',
        title: 'Deep RL for Navigation Document',
        type: 'Document',
        url: '/resources/deep-rl-navigation.pdf'
      },
      {
        id: 'res2',
        title: 'Robot Navigation Tutorial',
        type: 'Link',
        url: 'https://example.com/robot-navigation-tutorial'
      },{
        id: 'res3',
        title: 'Robot Navigation Tutorial',
        type: 'Link',
        url: 'https://example.com/robot-navigation-tutorial'
      },{
        id: 'res4',
        title: 'Robot Navigation Tutorial',
        type: 'Link',
        url: 'https://example.com/robot-navigation-tutorial'
      },{
        id: 'res5',
        title: 'Robot Navigation Tutorial',
        type: 'Link',
        url: 'https://example.com/robot-navigation-tutorial'
      },{
        id: 'res6',
        title: 'Robot Navigation Tutorial',
        type: 'Link',
        url: 'https://example.com/robot-navigation-tutorial'
      },{
        id: 'res7',
        title: 'Robot Navigation Tutorial',
        type: 'Link',
        url: 'https://example.com/robot-navigation-tutorial'
      }
    ]
  },
  // Add more project objects here for multiple projects
  {
    id: 'proj2',
    title: 'AI-Powered Smart City Traffic Management',
    category: 'Machine Learning',
    description: 'Developing an AI system to optimize traffic flow in urban environments.',
    professor: {
      name: 'Dr. Emily Chen',
      contact: '+1 650-123-4567 | echen@university.edu'
    },
    teamMembers: [{
      id:"3",name:'William Kim',avatar:'/profile-2.png'
    }],
    deadline: 'April 30, 2025',
    tasks: [
      {
        id: 'task4',
        title: 'Initial Research',
        description: 'Literature review and initial system design',
        status: 'Completed',
        dueDate: 'Feb 15, 2025'
      },
      {
        id: 'task5',
        title: 'Data Collection',
        description: 'Gather traffic data from multiple city intersections',
        status: 'In Progress',
        dueDate: 'Mar 30, 2025'
      }
    ],
    messages: [
      {
        id: 'msg3',
        sender: {
          
          name: 'William Kim',
          role: 'Research Assistant',
          avatar: '/profile-2.png'
        },
        text: 'Data collection pipeline is ready for review!',
        timestamp: '2h ago'
      }
    ],
    resources: [
      {
        id: 'res3',
        title: 'Traffic Dataset',
        type: 'Document',
        url: '/resources/traffic-dataset.csv'
      }
    ]
  }
];
