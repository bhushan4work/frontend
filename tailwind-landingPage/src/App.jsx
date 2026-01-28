import React from 'react'
import { useEffect, useState } from 'react'
import '/src/index.css'; // Import the CSS file
import SidebarToggle from './icons/SidebarToggle';
import logo from "./assets/img/logo.jpg"

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};


export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isDesktop])

  return (
    <div className='flex'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Content sidebarOpen={sidebarOpen} />
    </div>
  )
}


function Sidebar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) {  //when sidebar is not open
    return <div className='fixed left-0 top-0'>
      <div className='cursor-pointer' onClick={() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarToggle />
      </div>

    </div>
  }
  //else when side bar is open do this
  return <div className='w-96 h-screen bg-black shadow'>
    <div>
      <div className='cursor-pointer' onClick={() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarToggle />
      </div>

      <div className='flex flex-col gap-3 p-2'>
         <div className="px-4 py-2 rounded-lg hover:bg-gray-900 cursor-pointer transition text-white">Home</div>
         <div className="px-4 py-2 rounded-lg hover:bg-gray-900 cursor-pointer transition text-white">Customization</div>
         <div className="px-4 py-2 rounded-lg hover:bg-gray-900 cursor-pointer transition text-white">Settings</div>
      </div>

    </div>
  </div>
}

function Content({ sidebarOpen }) {
  return <div className='w-full'>
    <div className='h-40 bg-black hidden md:grid place-items-center'>
      <h1 className='font-bold text-2xl text-white'>Bhu$han Builds</h1>
    </div>
    <div className='grid grid-cols-11 gap-6 p-4'>

      <div className='md:col-span-2 col-span-11 hidden md:grid bg-white h-64 rounded-2xl shadow -translate-y-24 shadow-lg place-items-center'>
        <img src={logo} alt="logo" className="w-24 h-24 object-contain rounded-2xl" />
        <h1 className='text-lg font-bold'>@Bhushan4work_</h1>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/695/small/twitter-logo-twitter-icon-transparent-free-free-png.png" alt="twt" className='w-20 h-20' />
      </div>

      <div className='md:col-span-5 col-span-11 bg-white h-80 rounded-2xl shadow'>
        <div className='font-bold text-2xl p-4'>TO-DO's</div>
        <div className="flex items-center gap-3 p-4">
          <input id="dsa" type="checkbox" />
          <label htmlFor="dsa" className='font-semibold'>DSA - 4 hours</label>
        </div>

        <div className="flex items-center gap-3 p-4">
          <input id="dev" type="checkbox" />
          <label htmlFor="dev" className='font-semibold'>DEV - 6 hours</label>
        </div>

        <div className="flex items-center gap-3 p-4">
          <input id="gym" type="checkbox" />
          <label htmlFor="gym" className='font-semibold'>GYM - 1 hour</label>
        </div>
      </div>

      <div className='md:col-span-4 col-span-11 bg-white h-64 rounded-2xl shadow flex gap-10 p-4'>
        <div>
          <img src="https://img.icons8.com/?size=100&id=pE97I4t7Il9M&format=png&color=000000" alt="meet" className='w-14 h-14 object'/>
          <h1 className='font-semibold'>Join Meet</h1>
        </div>
        <div>
          <img src="https://img.icons8.com/?size=100&id=CcnMefzl28xf&format=png&color=000000" alt="scheduleMeet" className='w-14 h-14'/>
          <h1 className='font-semibold'>Schedule Meet</h1>
        </div>
        
      </div>

    </div>
  </div>
}

