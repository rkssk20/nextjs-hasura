import type { MouseEvent, TouchEvent } from 'react'
import NextLink from 'next/link'

import MuiLink from '@mui/material/Link'

const Category = ({ category }: { category: string | number }) => {
  return (
    <NextLink
      href={
        (category == 0) ? '/categories/nextjs' :
        (category == 1) ? '/categories/supabase' :
        (category == 2) ? '/categories/hasura' : '/categories/firebase'
      }
      passHref
    >
      <MuiLink
        underline='hover'
        onMouseDown={(e: MouseEvent<HTMLSpanElement>) => e.stopPropagation()}
        onTouchStart={(e: TouchEvent<HTMLSpanElement>) => e.stopPropagation()}
      >
        {
          (category == 0) ? '#Next.js' :
          (category == 1) ? '#Supabase' :
          (category == 2) ? '#Hasura' : '#Firebase'
        }
      </MuiLink>
    </NextLink>
  )
}

export default Category
