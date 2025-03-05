import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
 
const badgeData = [
  { name: "Top Performer", variant: "default" },
  { name: "ML Enthusiast", variant: "secondary" },
  { name: "Open Source Contributor", variant: "outline" },
  { name: "Research Innovator", variant: "default" }
];
 
export const ProfileBadges = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Achievements & Badges</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {badgeData.map((badge) => (
          <Badge key={badge.name} variant={badge.variant as any}>
            {badge.name}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};
 