import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';
 
const projectData = [
  {
    title: "Autonomous Robot Navigation",
    description: "Developed Deep Reinforcement Learning navigation algorithms",
    domains: ["Machine Learning", "Robotics"],
    status: "Completed",
    date: "Mar 2025"
  },
  {
    title: "Web Development Framework",
    description: "Created a scalable React-based web application framework",
    domains: ["Web Development", "Frontend"],
    status: "Completed",
    date: "Jan 2025"
  }
];
 
export const CompletedProjects = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Completed Projects</CardTitle>
      </CardHeader>
      <CardContent>
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center py-4 border-b last:border-b-0"
          >
            <div>
              <div className="font-medium">{project.title}</div>
              <div className="text-sm text-muted-foreground">
                {project.description}
              </div>
              <div className="mt-2 flex space-x-2">
                {project.domains.map((domain) => (
                  <Badge key={domain} variant="outline">{domain}</Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="default">{project.status}</Badge>
              <span className="text-sm text-muted-foreground">{project.date}</span>
              <Button variant="outline" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
 