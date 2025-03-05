import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activityData = [
  {
    project: "Autonomous Robot Navigation",
    domain: "Web Development",
    date: "11h ago",
    status: "In Progress"
  },
  {
    project: "Deep Reinforcement Learning",
    domain: "Machine Learning",
    date: "1d ago",
    status: "Completed"
  }
];

export const RecentActivity = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {activityData.map((activity, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center py-3 border-b last:border-b-0"
          >
            <div>
              <div className="font-medium">{activity.project}</div>
              <div className="text-sm text-muted-foreground">
                {activity.domain}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge 
                variant={activity.status === "Completed" ? "default" : "outline"}
              >
                {activity.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {activity.date}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};