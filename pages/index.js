import About from './sections/About';
import MainHome from './sections/MainHome'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Contact from './sections/Contact';
import BuildQuality from './sections/BuildQuality';
import ElegantResortLiving from './sections/ElegantResortLiving';
import ReactFullpage from "@fullpage/react-fullpage";
import NavBar from '../components/NavBar';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import Image from 'next/image'
export default function Home() {
  return (
    <>
  
    <Head>
    <title>Home</title>
    <link rel='icon' href='/favicon.ico' />
  </Head>
  <div className="absolute z-10 p-2 lg:p-4 top-4 w-full flex justify-center"><Image
        src="/logo.png"
        alt="Picture of the author"
        width={120}
        height={40}
      /></div>
             <div className="absolute    p-2  lg:p-4 flex w-screen justify-between  z-20   " >
               <NavBar/><div className="flex text-3xl text-gray-200 "> <AiOutlineInstagram/>< AiOutlineFacebook/></div>
                </div>
  {/* <Navbar/> */}
   {/* <MainHome/>

   <About/>
    <Contact/>  */}

    {/* </div>  */}
    <ReactFullpage
              licenseKey="6E5201D5-E37447CD-AE1913F6-91AFE3AA"
              scrollSpeed={1000}
              navigation="true"
              scrollOverflow={true}
            
           
              render={({ state, fullpageApi }) => {
                return (
                           <div id="fullpage-wrapper">
                              <div className="section">  

    <BuildQuality/>
    </div>
    <div className="section">  
    <ElegantResortLiving/>
    </div>
    </div>
    ) }}/>
     
    
    {/* } */}
    </>
  )
}


