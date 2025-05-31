import { Route, Routes } from 'react-router-dom'
import Form from '../Pages/Form'
import View from '../Pages/view'
import Edit from '../Pages/edit'
function Rout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Form></Form>}></Route>
                <Route path='/View' element={<View></View>}></Route>
                <Route path='/edit/:id' element={<Edit></Edit>}></Route>
            </Routes>
        </>
    )
}
export default Rout