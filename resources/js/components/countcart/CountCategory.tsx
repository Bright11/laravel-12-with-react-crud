import { usePage } from '@inertiajs/react';
import React from 'react'

interface PageProps {
    [key: string]: any;
  }


function CountCategory() {
    const { props } = usePage<PageProps>();
      const count = props.count;
      const countpro=props.countpro;
  return (
    <div>
      <button>Category {count}</button>
    </div>
  )
}

export default CountCategory
