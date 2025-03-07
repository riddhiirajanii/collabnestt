import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectTimeline() {
  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CardTitle className="text-xl font-bold">Task Timeline</CardTitle>
        <Button variant="outline" size="sm">View All Tasks</Button>
      </CardHeader>
      <CardContent>
        <div className="relative border-l border-gray-200 pl-6 pb-2 pt-2">
          <TimelineItem 
            status="completed" 
            title="Task 1: Research and Planning" 
            description="Research existing robot navigation algorithms and plan implementation approach."
            dueDate="Mar 15, 2025"
          />
          
          <TimelineItem 
            status="in-progress" 
            title="Task 2: Algorithm Implementation" 
            description="Implement the core navigation algorithm using Deep RL techniques."
            dueDate="Mar 25, 2025"
          />
          
          <TimelineItem 
            status="upcoming" 
            title="Task 3: API Scheduling" 
            description="Develop API endpoints for robot control and scheduling."
            dueDate="Apr 15, 2025"
          />
          
          <TimelineItem 
            status="upcoming" 
            title="Task 4: Prototype Testing" 
            description="Test the navigation algorithm on the robot prototype."
            dueDate="Apr 25, 2025"
            isLast={true}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface TimelineItemProps {
  status: "completed" | "in-progress" | "upcoming";
  title: string;
  description: string;
  dueDate: string;
  isLast?: boolean;
}

function TimelineItem({ status, title, description, dueDate, isLast = false }: TimelineItemProps) {
  const statusMap = {
    "completed": { 
      color: "bg-green-500", 
      badge: <Badge variant="outline" className="text-green-600 bg-green-50 hover:bg-green-100 border-green-200">Completed</Badge>
    },
    "in-progress": { 
      color: "bg-blue-500", 
      badge: <Badge variant="outline" className="text-blue-600 bg-blue-50 hover:bg-blue-100 border-blue-200">In Progress</Badge>
    },
    "upcoming": { 
      color: "bg-gray-300", 
      badge: <Badge variant="outline" className="text-gray-600 bg-gray-50 hover:bg-gray-100 border-gray-200">Upcoming</Badge>
    }
  };
  
  return (
    <div className={`${!isLast ? 'mb-8' : ''}`}>
    <div className={`absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full ${statusMap[status].color} border-4 border-white`}></div>
    <div className="flex items-center flex-wrap gap-2 mb-1">
      <h3 className="font-medium">{title}</h3>
      {statusMap[status].badge}
    </div>
    <p className="text-sm text-gray-600 mb-1">{description}</p>
    <p className="text-xs text-gray-500">Due: {dueDate}</p>
  </div>
  );
}