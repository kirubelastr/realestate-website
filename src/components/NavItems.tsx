'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'
import { useEffect, useRef, useState, useCallback } from 'react'
import NavItem from './NavItem'

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  // Close the active item on Escape key press
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null)
      }
    }

    document.addEventListener('keydown', handler)

    // Cleanup event listener on unmount
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const isAnyOpen = activeIndex !== null

  const navRef = useRef<HTMLDivElement | null>(null)

  // Close any open nav item when clicking outside
  useOnClickOutside(navRef, () => setActiveIndex(null))

  // Memoized function to toggle the active category
  const handleOpen = useCallback(
    (index: number) => {
      setActiveIndex(prevIndex => (prevIndex === index ? null : index))
    },
    [] // Dependency array ensures the function is only created once
  )

  // Function to close any active item
  const close = () => setActiveIndex(null)

  return (
    <div className='flex gap-4 h-full' ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const isOpen = i === activeIndex

        return (
          <NavItem
            category={category}
            close={close}
            handleOpen={() => handleOpen(i)}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
}

export default NavItems
