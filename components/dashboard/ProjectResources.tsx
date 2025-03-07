import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Link as LinkIcon } from "lucide-react";

export function ProjectResources() {
  const resources = [
    { icon: <FileText className="h-5 w-5" />, title: 'Deep RL for Navigation', type: 'Document' },
    { icon: <LinkIcon className="h-5 w-5" />, title: 'Robot Navigation Tutorial', type: 'Link' },
    { icon: <LinkIcon className="h-5 w-5" />, title: 'API Documentation', type: 'Link' }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Project Resources</CardTitle>
          <Button variant="ghost" size="sm" className="text-sm">View All</Button>
        </div>
        <p className="text-sm text-gray-500">Uploaded by your mentor and professors</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {resources.map((resource, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded">{resource.icon}</div>
            <div>
              <p className="font-medium">{resource.title}</p>
              <p className="text-sm text-gray-500">{resource.type}</p>
            </div>
          </div>
        ))}
        <Button className="w-full">Access Learning Materials</Button>
      </CardContent>
    </Card>
  );
}