
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/logo.jpg';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';


type Props = {
    isTopOfPage: boolean,
        selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage}: Props) => {
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuTogled, setIsMenuTogled] = useState<boolean>(false)
  
  return (
      <nav>
          <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-white`}>
              <div className={`${flexBetween} mx-auto w-5/6`}>
                  <div className={`${flexBetween} w-full gap-16`}>
                      <img src={Logo} width="50" h-100 alt="logo" />
                      {/* right  */}
                    { isAboveMediumScreens ? ( <div className={`${flexBetween}`}>
                          <ul className={`${flexBetween} gap-8 text-sm `}>
                              <Link page="Link1"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage } />
                              <Link page="Link2"
                              selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage }/>
                              <Link page="Link3"
                              selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage }/>
                              <Link page="Link4"
                              selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage} />
                               <Link page="Link5"
                              selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage }/>
                          </ul>
                       
                      </div>) : (
                            <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuTogled(!isMenuTogled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
                      )}
                  </div>
              </div>
          </div>


          {/* right side menu */}
          {!isAboveMediumScreens && isMenuTogled && (
              
              
              <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-800 drop-shadow-xl'>
                  
                  <div className='flex justify-end p-12'>
                      <button
                          onClick={() => setIsMenuTogled(!isMenuTogled)}
                      >
                          <XMarkIcon className='h-6 w-6 text-gray-400' />
                      </button>
                      </div>
                        <ul className="ml-[33%] flex flex-col gap-10 text-2xl">
                              <Link page="link1"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage } />
                              <Link page="Link2"
                              selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage }/>
                              <Link page="Link3"
                              selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage }/>
                              <Link page="Link4"
                              selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage }/>
                  </ul>
              </div>
              
             
                 
          )}
    </nav>
  )
}

export default Navbar