import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">CollabNest</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600">My Projects</a>
          <a href="#" className="text-gray-600">Discover</a>
          <a href="#" className="text-gray-600">Leaderboard</a>
          <a href="#" className="text-gray-900 font-semibold">Profile</a>
        </nav>
      </div>

      {/* Profile Section */}
      <Card className="p-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">Frank Ocean</h2>
            <p className="text-gray-500">Computer Science Engineering</p>
            <p className="text-gray-500">frank.ocean@college.edu</p>
          </div>
        </div>
      </Card>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {[
          { label: "Total Projects", value: "12" },
          { label: "Completed Tasks", value: "45" },
          { label: "Active Domains", value: "4" },
          { label: "Contributor Rating", value: "1447" },
          { label: "Project Score", value: "850" },
          { label: "Domain Expertise", value: "1280" },
        ].map((stat, index) => (
          <Card key={index} className="p-4">
            <h3 className="text-lg font-semibold">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Achievements & Badges */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Achievements & Badges</h3>
        <div className="flex space-x-2">
          {["Top Performer", "ML Enthusiast", "Open Source Contributor", "Research Innovator"].map((badge, index) => (
            <Badge key={index}>{badge}</Badge>
          ))}
        </div>
      </div>

      {/* Completed Projects */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Completed Projects</h3>
        <Card className="p-4 mb-2">
          <h4 className="font-semibold">Autonomous Robot Navigation</h4>
          <p className="text-sm text-gray-500">Developed Deep Reinforcement Learning navigation algorithms</p>
          <Badge className="mt-2">Machine Learning</Badge> <Badge>Robotics</Badge>
        </Card>
        <Card className="p-4">
          <h4 className="font-semibold">Web Development Framework</h4>
          <p className="text-sm text-gray-500">Created a scalable React-based web application framework</p>
          <Badge className="mt-2">Web Development</Badge> <Badge>Frontend</Badge>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
        <Card className="p-4 mb-2">
          <h4 className="font-semibold">Autonomous Robot Navigation</h4>
          <p className="text-sm text-gray-500">Web Development - In Progress (11h ago)</p>
        </Card>
        <Card className="p-4">
          <h4 className="font-semibold">Deep Reinforcement Learning</h4>
          <p className="text-sm text-gray-500">Machine Learning - Completed (1d ago)</p>
        </Card>
      </div>

      {/* CV Section */}
      <div className="mt-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Curriculum Vitae</h3>
          <p className="text-gray-500 text-sm">Last updated: February 2025</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" /> Download CV
        </Button>
      </div>
    </div>
  );
}
