
"use client"
import React, { useState, useEffect } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Skeleton } from 'antd';
import {useBreadcrumbState} from '@/store/BreadcrumbState'

interface BreadcrumbItem {
  href?: string;
  title: React.ReactNode;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => {
    const { isLoaded,setIsLoaded } = useBreadcrumbState();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [setIsLoaded]);

  const homeItem: BreadcrumbItem = {
    href: '/',
    title: <HomeOutlined />,
  };

  const allItems = [homeItem, ...items];

  if (!isLoaded) {
    return (
      <div className='h-12 flex items-center px-8'>
        <Skeleton.Input active={true} size={"small"} /> 
      </div>
    );
  }

  return (
    <Breadcrumb className='h-12 flex items-center px-8'>
      {allItems.map((item, index) => (
        <Breadcrumb.Item key={index} href={item.href} className='text-gray-500'>
           {item.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
