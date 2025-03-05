export interface ProjectResource {
  id: string;
  title: string;
  type: 'Document' | 'Link';
  url: string;
}
export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
}

export interface ProjectTask {
  id: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  dueDate: string;
}

export interface ProjectMessage {
  id: string;
  sender: {
    name: string;
    avatar?: string;
    role?: string;
  };
  text: string;
  
  timestamp: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  professor: {
    name: string;
    contact: string;
  };
  teamMembers: TeamMember[];
  deadline: string;
  tasks: ProjectTask[];
  messages: ProjectMessage[];
  resources: ProjectResource[];
}