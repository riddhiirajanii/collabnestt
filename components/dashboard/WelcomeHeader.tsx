"use client"; // 👈 Ensure this is at the top

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { 
  Dialog, // 👈 Make sure it's correctly imported
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"; 

interface UserData {
  name: string;
  projects: string[];
}

async function fetchUserData(): Promise<UserData> {
  return new Promise((resolve) =>
    setTimeout(() =>
      resolve({
        name: "John Doe",
        projects: ["Project Alpha", "Project Beta", "Project Gamma"],
      })
    , 1000)
  );
}

export function WelcomeHeader() {
  const [user, setUser] = useState<UserData | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showWelcomePopup, setShowWelcomePopup] = useState<boolean>(true);

  useEffect(() => {
    async function loadUserData() {
      const data = await fetchUserData();
      setUser(data);
      setSelectedProject(data.projects[0]); // Default to the first project
    }
    loadUserData();
  }, []);

  return (
    <div className="mb-6">
      {/* Welcome Pop-up */}
      {user && (
        <Dialog open={showWelcomePopup} onOpenChange={setShowWelcomePopup}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Welcome to CollabNest, {user.name}!</DialogTitle>
              <DialogDescription>
                You’re all set to start collaborating. Explore your projects and start making an impact!
              </DialogDescription>
            </DialogHeader>
            <Button onClick={() => setShowWelcomePopup(false)}>Get Started</Button>
          </DialogContent>
        </Dialog>
      )}

      {/* Main Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Welcome back, {user ? user.name : "Loading..."}!
          </h1>
          <p className="text-gray-600 mt-2">
            You're making great progress on your projects. Keep up the good work!
          </p>
        </div>
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-zinc-500 shrink-0">
                {selectedProject} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {user.projects.map((project) => (
                <DropdownMenuItem
                  key={project}
                  onClick={() => setSelectedProject(project)}
                >
                  {project}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
