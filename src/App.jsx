
import './App.css'

import About from './components/about'
import Service from './components/Service'
import PrototypeService from './components/prototype_service/Prototype_service'
import Proto_Client from './components/prototype_service/Proto_Client'
import Proto_WhoCome from './components/prototype_service/Proto_WhoCome'
import Proto_Grow from './components/prototype_service/Proto_Grow'
import Proto_linking from './components/prototype_service/Proto_linking'
import Proto_images from './components/prototype_service/Proto_images'
import Proto_experince from './components/prototype_service/Proto_experince'
import Proto_need from './components/prototype_service/Proto_need'
import Proto_Brain from './components/prototype_service/Proto_Brain'
import Proto_Discovery from './components/prototype_service/Proto_Discovery'
import Proto_table from './components/prototype_service/Proto_table'
import HomeFirst from "./components/Homepage/HomeFirst"

import Homeforth from './components/Homepage/Homeforth'
import HomeFifth from './components/Homepage/HomeFifth'
import HomeSix from './components/Homepage/HomeSix'
import HomeSeven from './components/Homepage/HomeSeven'
import HomeEight from './components/Homepage/HomeEight'
import HomeNine from './components/Homepage/HomeNine'
import Header from './components/Homepage/Header'
function App() {

  return (
    <>


      {/* <PrototypeService></PrototypeService> */}
      {/* <Proto_Client></Proto_Client> */}
      {/* <Proto_WhoCome></Proto_WhoCome> */}
      {/* <Proto_Grow></Proto_Grow> */}
      {/* <Proto_linking></Proto_linking> */}
      {/* <Proto_images></Proto_images> */}
      {/* <Proto_experince></Proto_experince>
      <Proto_need></Proto_need>
      <Proto_Brain></Proto_Brain>
      <Proto_Discovery></Proto_Discovery> */}


      <HomeFirst></HomeFirst>
      <Service  ></Service>
      <About></About>


      {/* <Homeforth></Homeforth>  panding */}
      <HomeFifth></HomeFifth>
      <HomeSix></HomeSix>
      <HomeSeven></HomeSeven>
      <HomeEight></HomeEight>
      <HomeNine></HomeNine>


    </>
  )
}

export default App
