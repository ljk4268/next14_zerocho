import style from '@/app/(afterLogin)/explore/explore.module.css'
import SearchForm from '../_component/SearchForm'
import Trend from '../_component/Trend'

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  )
}
