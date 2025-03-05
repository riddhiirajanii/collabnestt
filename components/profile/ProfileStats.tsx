import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, BookOpen } from 'lucide-react';

export const ProfileStats = () => {
  const stats = [
    { 
      icon: Trophy, 
      title: "Total Projects", 
      value: 12 
    },
    { 
      icon: Star, 
      title: "Completed Tasks", 
      value: 45 
    },
    { 
      icon: BookOpen, 
      title: "Active Domains", 
      value: 4 
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};