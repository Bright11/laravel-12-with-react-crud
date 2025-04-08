import React from 'react'

function ViewCategory({...props}) {
    const {category}=props

    // console.log(category?.name)

  return (
    <div>
      <h1>{category?.name}</h1>
    </div>
  )
}

export default ViewCategory
