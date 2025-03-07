import React from "react";
import { Card, CardHeader, CardTitle , CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, CalendarIcon } from "lucide-react";



export function ProjectOverview() {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
        <div>
          <CardTitle className="text-xl font-bold">Autonomous Robot Navigation using Deep RL</CardTitle>
          <div className="flex items-center flex-wrap gap-2 mt-2">
            <Badge variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700">Web Development</Badge>
            <span className="text-sm text-gray-600">By Prof. Sriparna Saha</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Project Details</Button>
          <Button size="sm">Contact Prof.</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <TeamMembers />
          <CurrentTask />
          <Deadline />
          <ProjectID />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectDescription />
          <ProfessorContact />
        </div>
      </CardContent>
    </Card>
  );
}

function TeamMembers() {
  return (
    <div>
      <h3 className="font-medium mb-2">Team Members</h3>
      <div className="flex -space-x-2">
        <Avatar className="h-8 w-8 border-2 border-white">
          <AvatarFallback className="bg-blue-600 text-white">C</AvatarFallback>
        </Avatar>
        <Avatar className="h-8 w-8 border-2 border-white">
          <AvatarFallback className="bg-green-600 text-white">J</AvatarFallback>
        </Avatar>
        <Avatar className="h-8 w-8 border-2 border-white">
          <AvatarFallback className="bg-purple-600 text-white">S</AvatarFallback>
        </Avatar>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs border-2 border-white">
          +2
        </div>
      </div>
    </div>
  );
}

function CurrentTask() {
  return (
    <div>
      <h3 className="font-medium mb-2">Current Task</h3>
      <Badge className="bg-gray-800 text-white hover:bg-gray-700">API Scheduling</Badge>
      <p className="text-sm text-gray-600 mt-2">Next: Prototype Testing</p>
    </div>
  );
}

function Deadline() {
  return (
    <div>
      <h3 className="font-medium mb-2">Deadline</h3>
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>March 15, 2025</span>
      </div>
    </div>
  );
}

function ProjectID() {
  return (
    <div>
      <h3 className="font-medium mb-2">Project ID</h3>
      <p>RL-2025-003</p>
    </div>
  );
}

function ProjectDescription() {
  return (
    <div>
      <h3 className="font-medium mb-2">Project Description</h3>
      <p className="text-sm text-gray-600">
        This project focuses on developing autonomous navigation capabilities for robots using Deep Reinforcement Learning techniques. It adheres to the WAI-ARIA design pattern.
      </p>
    </div>
  );
}

function ProfessorContact() {
  return (
    <div>
      <h3 className="font-medium mb-2">Professor Contact</h3>
      <p className="text-sm text-gray-600">+91 9372180121 | rishit@gmail.com</p>
    </div>
  );
}