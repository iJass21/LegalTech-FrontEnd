import React, { useContext, useEffect } from 'react';
// import { AuthContext } from '../context/AuthContext';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import ClinicDashboard from './ClinicDashboard';

function Dashboard() {
  //const { userType } = useContext(AuthContext); // Supongamos que tienes un AuthContext
  const userType = 'admin'
  useEffect(() => {
    // Puedes realizar acciones adicionales según el tipo de usuario aquí si es necesario
  }, [userType]);

  if (userType === 'user') {
    return <UserDashboard />;
  } else if (userType === 'admin') {
    return <AdminDashboard />;
  } else if (userType === 'clinic') {
    return <ClinicDashboard />;
  } else {
    return <div>No autorizado</div>; // Manejo de error para usuarios no autorizados
  }
}

export default Dashboard;
