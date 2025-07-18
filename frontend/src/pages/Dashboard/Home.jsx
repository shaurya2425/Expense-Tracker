import React from 'react'
import DashboardLayout from '../../components/Layouts/DashboardLayout'
import { useUserAuth } from '../../hooks/useUserAuth'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useEffect } from 'react';

function Home() {

  useUserAuth();

  
 
  return (
    <DashboardLayout activeMenu = 'Dashboard'>
        <div className='my-5 mx-auto text-black ' >
          Home
        </div>
    </DashboardLayout>
  )
}

export default Home
