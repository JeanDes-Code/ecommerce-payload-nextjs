'use client'

import React from 'react'
import { Category, Media } from '../../../../payload/payload-types'
import Link from 'next/link'

import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'

const CategoryCard = ({ category }: { category: Category }) => {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href="/products"
      className={classes.card}
      onClick={() => setCategoryFilters([category.id])}
      style={{
        backgroundImage: `url(${media.url})`,
      }}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
