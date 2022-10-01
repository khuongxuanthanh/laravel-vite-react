import React from 'react'
import { Routes, Route} from 'react-router-dom'

import InProduct from '../Components/Home/FeatProd/FeatProd'
import NotFound from '@/Components/NotFound'
import FeatProd from '../Components/Home/FeatProd/FeatProd'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/featprod' element={ <FeatProd /> }/>;
        <Route path='/' element={ <InProduct /> }/>;
        <Route path='/product/new' element={ <NotFound /> }/>;
      </Routes>
    </div>
  )
}

export default Router