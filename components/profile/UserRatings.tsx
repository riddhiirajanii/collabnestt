import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Target } from 'lucide-react';

const ratingData = [
  { 
    icon: Trophy, 
    title: "Contributor Rating", 
    value: 1447,
    color: "text-yellow-500"
  },
  { 
    icon: Star, 
    title: "Project Score", 
    value: 850,
    color: "text-blue-500"
  },
  { 
    icon: Target, 
    title: "Domain Expertise", 
    value: 1280,
    color: "text-green-500"
  }
];

export const UserRatings = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {ratingData.map((rating) => (
        <Card key={rating.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{rating.title}</CardTitle>
            <rating.icon className={`h-4 w-4 ${rating.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rating.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};