'use client';
import React from 'react';
import MainLayout from './MainLayout';
import Trade from "../Trade/Trade";
// import Completed from '@/components/Tournament/Completed';

export default function Mainlayout() {
  return (
    <MainLayout>
 <Trade/>
 {/* <Completed/> */}
    </MainLayout>
  );
}