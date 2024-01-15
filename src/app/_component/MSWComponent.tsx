'use client'

import { useEffect } from 'react'

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBILC_API_MOCKING === 'enabled') {
        require('@/mocks/browser')
      }
    }
  }, [])
  return null
}
