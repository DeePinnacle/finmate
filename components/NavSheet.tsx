import React from 'react'
import {
 Sheet,
 SheetTitle,
 SheetTrigger,
 SheetContent,
} from "@/components/ui/sheet"
import { CiMenuFries } from "react-icons/ci"
const NavSheet = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <CiMenuFries className="text-2xl font-extrabold block text-finmate_secondary" />
        </SheetTrigger>
        <SheetContent className='bg-finmate_primary'>
            <SheetTitle className='mt-8'>
                <p>Finmate</p>
            </SheetTitle>
            <p>hello world</p>
        </SheetContent>
    </Sheet>
  )
}

export default NavSheet