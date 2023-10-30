/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getAllProjects } from '../api/projectData';
import StaffProjectCard from '../components/cards/StaffProjectCard';
import UserProjectCard from '../components/cards/UserProjectCard';
import { getUserById } from '../api/userData';
import { useAuth } from '../utils/context/authContext';

export default function Projects() {
  const { user } = useAuth();
  const [proj, setProj] = useState([]);
  const [member, setMember] = useState({});

  useEffect(() => {
    getAllProjects().then((data) => setProj(data));
    getUserById(user[0].uid).then((data) => setMember(data));
  }, []);

  return (
    <>
      {member?.isStaff === true ? (
        <div
          className="projects-page"
          style={{ padding: '30px' }}
        >
          {proj.map((projects) => (
            <StaffProjectCard key={projects.id} projObj={projects} />
          ))};
        </div>
      ) : (
        <div
          className="projects-page"
          style={{ padding: '30px' }}
        >
          {proj.map((projects) => (
            <UserProjectCard key={projects.id} projObj={projects} />
          ))}
        </div>
      )}
    </>
  );
}
