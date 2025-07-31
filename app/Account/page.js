'use client';
import React from 'react';
import MainLayout from '../MainLayout/MainLayout';
import Account from './Account';

// import Completed from '@/components/Tournament/Completed';

export default function Mainlayout() {
  return (
    <MainLayout>
 <Account/>

 {/* <Completed/> */}
    </MainLayout>
  );
}