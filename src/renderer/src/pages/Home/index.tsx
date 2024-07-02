import { memo, useRef } from 'react'
import Search from '@renderer/components/Search'
import List from '@renderer/components/List'
import { useIgnoreMouseEvent } from '@renderer/hooks/useIgnoreMouseEvent'

const Home = memo(() => {
  const elRef = useRef<HTMLDivElement>(null)
  useIgnoreMouseEvent(elRef)
  return (
    <div className="relative p-3" ref={elRef}>
      <Search />
      <List />
    </div>
  )
})

export default Home
