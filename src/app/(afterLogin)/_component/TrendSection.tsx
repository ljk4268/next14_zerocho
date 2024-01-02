'use client'

import style from './trendSection.module.css'
import Trend from './Trend'
import { usePathname } from 'next/navigation'

export default function TrendSection() {
  const pathname = usePathname()
  if (pathname == '/explore') return null
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  )
}
