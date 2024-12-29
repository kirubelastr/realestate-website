"use client"

import { BookmarkIcon } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"

export const Bookmark = () => {
  const itemcount =0
  return (
    <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
          <BookmarkIcon 
          aria-hidden='true' 
          className="h-5 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"/>
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            0
          </span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
          <SheetHeader className="space-y-2.5 pr-6">
            <SheetTitle > Bookmark(0)</SheetTitle>
          </SheetHeader>
          {itemcount > 0 ? (
            <>
              <div className="flex w-full flex-col pr-6">
                bookmark lists
              </div>
              <div className="space-y-4 pr-6">
                <Separator />
                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link 
                      href='/apartments'
                      className={buttonVariants({
                        className: "w-full",
                      })}>
                        Explore more apartments
                    </Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ):(
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div 
                aria-hidden='true' 
                className="relative mb-4 h-60 w-60 text-muted-foreground">
                  <Image
                    src="/hippo-empty-cart.png"
                    fill
                    alt="empty bookmark"
                  />
              </div>
              <div className="text-xl font-semibold">
                Your bookmark is empty
              </div>
              <SheetTrigger asChild>
                  <Link
                   href='/apartments'
                   className={buttonVariants({
                    variant: 'link',
                    size: 'sm',
                    className:"text-sm text-muted-foreground",
                   })}>
                    Add to bookmark for later view
                  </Link>
              </SheetTrigger>
            </div>
          )}
          
        </SheetContent>
       
    </Sheet>
  )
}
