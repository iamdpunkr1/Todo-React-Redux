import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import Todos from './components/Todos'


function App() {


  return (
    <Provider store={store}>
      <div className="flex flex-col justify-center items-center h-screen max-w-[740px] mx-auto">
        <Todos />
      </div>
    </Provider>
  )
}

export default App
