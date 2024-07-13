"use client"
import React, { useEffect } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Skeleton } from 'antd';
import { useBreadcrumbState } from '@/store/BreadcrumbState'

interface BreadcrumbItem {
  href?: string;
  title: React.ReactNode;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => {
  const { isLoaded, setIsLoaded } = useBreadcrumbState();

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

  const allItems = [homeItem, ...items].map((item, index) => ({
    key: index,
    href: item.href,
    title: item.title,
  }));

  if (!isLoaded) {
    return (
      <div className='h-12 flex items-center px-8'>
        <Skeleton.Input active={true} size={"small"} />
      </div>
    );
  }

  return (
    <Breadcrumb
      className='h-12 flex items-center px-8'
      items={allItems}
      itemRender={(route, _, routes) => {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
          <span className='text-gray-500'>{route.title}</span>
        ) : (
          <a href={route.href} className='text-gray-500'>{route.title}</a>
        );
      }}
    />
  );
};

export default CustomBreadcrumb;