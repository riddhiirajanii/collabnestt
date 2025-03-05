import React from 'react';
import { Input } from "@/components/ui/input";

export const LeaderboardSearchBar = () => {
  return (
    <div className="mb-4">
      <Input 
        placeholder="Search by name..." 
        className="max-w-md"
      />
    </div>
  );
};