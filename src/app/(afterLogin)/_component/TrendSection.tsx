import style from './trendSection.module.css'
import Trend from './Trend'


export default function TrendSection() {
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