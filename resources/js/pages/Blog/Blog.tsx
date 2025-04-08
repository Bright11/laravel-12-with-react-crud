import React from 'react';
import './blog.css';
import { usePage } from '@inertiajs/react';
import CountCategory from '@/components/countcart/CountCategory';

interface PageProps {
    [key: string]: any;
  }


function Blog() {
  const { props } = usePage<PageProps>();
  const count = props.count;
  const countpro=props.countpro;

  return (
    <>
     <CountCategory/>

    </>
  );
}

export default Blog;
