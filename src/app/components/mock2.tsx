"use client";

import { useState, useEffect } from 'react';
import React from 'react';

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const Team: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {

    // implemment configuration to fetching time
    // Inside the fetchTeamMembers function

    const fetchTeamMembers = async () => {
      let storedData = localStorage.getItem('teamMembers');
      let lastFetchTime = localStorage.getItem('lastFetchTime');
      const currentTime = new Date().getTime();
    
      if (storedData && lastFetchTime) {
        const timeElapsed = currentTime - parseInt(lastFetchTime, 10);
        const fetchInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
        if (timeElapsed < fetchInterval) {
          setTeamMembers(JSON.parse(storedData));
          return; // Exit early if data is fresh
        }
      }
    
      try {
        const response = await fetch('https://randomuser.me/api/?results=8');
        const data = await response.json();
        setTeamMembers(data.results);
        localStorage.setItem('teamMembers', JSON.stringify(data.results));
        localStorage.setItem('lastFetchTime', currentTime.toString());
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div> 
     <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src={member.picture.large} alt={`${member.name.first} ${member.name.last}`} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">{`${member.name.first} ${member.name.last}`}</h2>
                <p className="text-sm text-gray-500">{member.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
