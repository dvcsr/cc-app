"use client";

import { useState, useEffect } from 'react';
import React from 'react';
import logo from '../../assets/yl.svg'
import Image from 'next/image';

interface Team {
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
  const [team, setTeam] = useState<Team[]>([]);

  useEffect(() => {

    // implemment configuration to fetching time
    // Inside the fetchTeam function

    const fetchTeam = async () => {
      const storedData = localStorage.getItem('team');
      const lastFetchTime = localStorage.getItem('lastFetchTime');
      const currentTime = new Date().getTime();
    
      if (storedData && lastFetchTime) {
        const timeElapsed = currentTime - parseInt(lastFetchTime, 10);
        const fetchInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
        if (timeElapsed < fetchInterval) {
          setTeam(JSON.parse(storedData));
          return; // Exit early if data is fresh
        }
      }
    
      try {
        const response = await fetch('https://randomuser.me/api/?results=8');
        const data = await response.json();
        setTeam(data.results);
        localStorage.setItem('team', JSON.stringify(data.results));
        localStorage.setItem('lastFetchTime', currentTime.toString());
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-t from-white to-orange-300 bg-contain"> 
     <section className="py-16">
        <div className="container mx-auto">
        <div className=" bg-gradient-to-bl from-white to-yellow-50 to-35% sm:flex sm:items-center sm:justify-between py-5 shadow-lg rounded-full">
    <div className="flex justify-end md:flex-none md:justify-normal md:w-1/2 md:pl-20">
      {/* complogo */}
      <a href="/" className="font-black tracking-widest text-lg sm:text-2xl w-screen flex justify-end text-amber-600 pr-2">
  <Image src={logo} alt="company logo" className="w-10 animate-pulse"/><span className="opacity-75 text-5xl ml-[-0.3rem]">3LLOW</span>
      </a>
    </div>
    <div className="bg-cover md:w-1/2 flex sm:space-x-12 justify-start text-white">
  <h1 className=' text-amber-600 opacity-75 text-5xl font-black pl-2 tracking-widest'>TEAM</h1>
    </div>
    </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {team.map((member, index) => (
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