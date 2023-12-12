import HText from '@/shared/HText'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import { BenefitTypes, SelectedPage } from '@/shared/types'
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon  } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import search2 from '@/assets/search2.png'


const benefits : Array<BenefitTypes>= [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: 'State of the Art Facilities',
        description: "A gym is more than just a place to break a sweat its a vibrant microcosm of human ambition, determination, and transformation. It's a space where the echoes of clanking weights and rhythmic music merge with the rhythmic beats of heart-pounding workouts.",

    },
      {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: '100`s of Diverse Classes',
        description: "A gym is more than just a place to break a sweat its a vibrant microcosm of human ambition, determination, and transformation. It's a space where the echoes of clanking weights and rhythmic music merge with the rhythmic beats of heart-pounding workouts.",

    },
        {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: 'Expert and Pro Trainers',
        description: "A gym is more than just a place to break a sweat its a vibrant microcosm of human ambition, determination, and transformation. It's a space where the echoes of clanking weights and rhythmic music merge with the rhythmic beats of heart-pounding workouts.",

    }
]

// const container = {
//     hidden: {},
//     visible: {
//         transition : {staggerChildren: 0.2}
//     }
// }

type Props = {
   setSelectedPage: (value: SelectedPage) => void,
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
      <section id="benefits"
      className= ' bg-zinc-800  min-h-full w-6/6 py-20 '>
      <h2 className=' mb-16 uppercase text-center font-semibold text-white'>Our audit reports</h2>
      <div className=' container mx-auto border-8  border-gray-900 rounded-lg'><div className=' p-16 border-2 border-white rounded-lg'>
        <ul className=" mb-8 flex h-2 text-white align-middle gap-36 items-center 
       ">
        <li className='relative'><img className='inline ' width="50px" src={search2} alt="" /><input className='outline-offset-0 transparent absolute left-3  top-3 bg-transparent w-8 border-none' type="text" /></li>
          <li className='ml-2'>Adress:</li>
          <li>Balance:</li>
              <li>Hacks:</li>
        </ul>
        <div>   <ul className=" pl-4 flex h-18 p-4  align-middle gap-32 items-center text-white  hover:bg-gray-900
       ">
        <li >1.</li>
          <li className='ml-4'>BTC8656786$</li>
          <li className='ml-4'>{Math.floor(Math.random() * 100) + 1 }%</li>
          <li className='ml-12'>{(Math.floor(Math.random() * 21) + 10) / 10}</li>
          <li className='ml-auto p-2 bg-blue-800'  ><a  href="#">Read</a></li>
        </ul>
          
    
        </div>
         
         
        <div>  <ul className="h-18 p-4  pl-4 flex  align-middle gap-32 items-center text-white hover:bg-gray-900
       ">
        <li >2.</li>
          <li className='ml-4'>BTC8656786$</li>
          <li className='ml-4'>{Math.floor(Math.random() * 100) + 1 }%</li>
          <li className='ml-12'>{(Math.floor(Math.random() * 21) + 10) / 10}</li>
          <li className='ml-auto p-2 bg-blue-800' ><a  href="#">Read</a></li>
        </ul></div>
        <div>  <ul className="h-18 p-4  pl-4 flex  align-middle gap-32 items-center text-white hover:bg-gray-900
       ">
        <li >3.</li>
          <li className='ml-4'>BTC8656786$</li>
          <li className='ml-4'>{Math.floor(Math.random() * 100) + 1 }%</li>
          <li className='ml-12'>{(Math.floor(Math.random() * 21) + 10) / 10}</li>
          <li className='ml-auto p-2 bg-blue-800'><a href="#">Read</a></li>
        </ul></div>
        <div>  <ul className="h-18 p-4  pl-4 flex   align-middle gap-32 items-center text-white hover:bg-gray-900
       ">
        <li >4.</li>
          <li className='ml-4'>BTC8656786$</li>
          <li className='ml-4'>{Math.floor(Math.random() * 100) + 1 }%</li>
          <li className='ml-12'>{(Math.floor(Math.random() * 21) + 10) / 10}</li>
          <li className='ml-auto p-2 bg-blue-800'><a href="#">Read</a></li>
        </ul></div>
        <div>  <ul className="h-18 p-4  pl-4 flex  align-middle gap-32 items-center text-white hover:bg-gray-900
       ">
        <li >5.</li>
          <li className='ml-4'>BTC8656786$</li>
          <li className='ml-4'>{Math.floor(Math.random() * 100) + 1 }%</li>
          <li className='ml-12'>{(Math.floor(Math.random() * 21) + 10) / 10}</li>
          <li className='ml-auto p-2 bg-blue-800' ><a href="#">Read</a></li>
        </ul></div>


      </div></div>
      
         
      </section>
  )
}

export default Benefits