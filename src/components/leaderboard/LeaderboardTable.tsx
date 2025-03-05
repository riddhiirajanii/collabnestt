import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { LeaderboardEntry } from '@/types/leaderboard';
import { LeaderboardUserAvatar } from './LeaderboardUserAvatar';
import { LeaderboardUserDomains } from './LeaderboardUserDomains';

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
}

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ entries }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Active Domains</TableHead>
          <TableHead>Department</TableHead>
          <TableHead className="text-right">Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map((entry, index) => (
          <TableRow key={entry.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-3">
                <LeaderboardUserAvatar 
                  name={entry.name} 
                  avatarUrl="/placeholder-avatar.png" 
                />
                <span>{entry.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <LeaderboardUserDomains domains={entry.activeDomains} />
            </TableCell>
            <TableCell>{entry.department}</TableCell>
            <TableCell className="text-right">{entry.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};