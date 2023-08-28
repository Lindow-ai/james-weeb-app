import Image from 'next/image'
import styles from './page.module.css'
import SuperCard from './components/superCard/SuperCard'
import Button from './components/Button/Button'
// import Frame from './assets/Frame'

export default function Home() {
  return (
    <main>
      <SuperCard />
    </main>
  )
}
