




import btc from "@/assets/btc.mp4"
import CountUp from "react-countup";





const Home = () => {
       const flexBetween = 'flex items-center justify-between';
   
  return (
      <section
          id="home"
          className="gap-16 bg-zinc-800 py-10 md:h-full md:pb-0 "
      >
          <div className="app md:h-5/8 mb-10    " >
      <video autoPlay loop muted className="video-background">
        <source src={btc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content relative z-10 text-white container mx-auto">
                  <h1 className="pt-40 mb-10 text-4xl font-bold w-2/4 text-center uppercase leading-10">The new Era of blockchain protocols security</h1>
                  <a className="p-1 center block w-32 border-2 font-semibold rounded-lg text-center uppercase cursor-pointer border-white origin-center transition-transform">Start audit</a>
                    <ul className={`${flexBetween} ml-16 mt-32`}>
              <li className="flex flex-col items-center  justify-items-center align-middle uppercase font-semibold text-2xl"><span className="inline"><CountUp end={199}  duration={2.75} />+</span> <div className="block">Audits</div></li>
              <li className="flex flex-col items-center  justify-items-center align-middle uppercase font-semibold text-2xl"><CountUp end={14}  duration={2.75} /><div>Exploits</div></li>
              <li className="flex flex-col items-center  justify-items-center align-middle uppercase font-semibold text-2xl"><CountUp end={6}  duration={2.75} /><div>Valnarabilitys</div></li>
          </ul>
      </div>
          </div>
          <div className="video-background bg-black opacity-20 "></div>
        
      </section>
  )
}

export default Home