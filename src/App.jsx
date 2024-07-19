import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { TbMoodEmpty } from "react-icons/tb";

function App() {

  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([])
  useEffect(() => {

    let todostring = localStorage.getItem("Todos")

    if (todostring) {

      let todos = JSON.parse(localStorage.getItem("Todos"))
      setTodos(todos)
    }






  }, [])


  const savetoSL = () => {
    localStorage.setItem("Todos", JSON.stringify(Todos))

  }


  const [isCompleted, setisCompleted] = useState(false)




  const HandleModify = (e, id) => {

    let ModifyTodo = Todos.filter(i => i.id === id)
    setTodo(ModifyTodo[0].Todo)

    let newtodos = Todos.filter(item => {
      return item.id !== id;

    })

    setTodos(newtodos)

    savetoSL()

  }
  const HandleDelete = (e, id) => {
    let newtodos = Todos.filter(item => {
      return item.id !== id
    })

    setTodos(newtodos)

    savetoSL()



  }
  const HandleAdd = () => {
    setTodos([...Todos, { id: uuidv4(), Todo, isCompleted: false }])
    setTodo("")

    console.log(Todos)

    savetoSL()

  }
  const HandleChange = (e) => {

    setTodo(e.target.value)

  }
  const HangleCheckboxChange = (e) => {
    let id = e.target.name;

    Todos.forEach(item => {
      if (item.id === id) {
        setisCompleted(item.isCompleted = !item.isCompleted)
      }
    })

    savetoSL()




  }



  return (
    <>
      <Navbar />

      <div className="maincantainer flex justify-center items-center bg-blue-100 w-full  p-4">

        <div className="bg-blue-400 h-[80vh] rounded-lg p-6 overflow-y-auto sm:w-[80vw] sm:h-[80vh]  ">

          <h1 className='text-2xl font-semibold'>Add Your Todo Here!</h1>

          <div className=" addingtodos flex items-center ">

            <input onChange={HandleChange} value={Todo} className='w-[70%] m-6 ' type="text" />
            <button onClick={HandleAdd} disabled={Todo.length <= 3} className='bg-blue-600 px-4 py-[1px] rounded-sm'><IoAddSharp /></button>

          </div>
          <h2 className="text-2xl font-semibold">
            Your Todos:
          </h2>

          {Todos.length === 0 && <h3 className='text-xl  font-semibold text-center animate-pulse'>    You haven't added any tasks yet. <p className='flex justify-center mt-4  '><TbMoodEmpty /></p> </h3>}


          {Todos.map(item => {



            return <div key={item.id} className="listingtodos  gap-4   flex">

              <div className="flex  sm:items-center gap-4">

                <input onChange={HangleCheckboxChange} value={item.isCompleted} type="checkbox" name={item.id} id="" />

                <div className={item.isCompleted ? "line-through" : ""}>

                  <div className="capitalize todoTExt w-[40vw] my-3 sm:w-[50vw] border border-blue-50 p-2 shadow-md cursor-pointer transition-all duration-500 hover:shadow-xl">

                    {item.Todo}

                  </div>

                </div>
              </div>

              <div className="flex gap-4 mx-2">
                <button onClick={(e) => HandleModify(e, item.id)} className='my-3 cursor-pointer border font-semibold border-white px-2 rounded-sm hover:shadow-inner hover:shadow-white'><CiEdit /></button>
                <button name={item.name} onClick={(e) => { HandleDelete(e, item.id) }} className='my-3 cursor-pointer border font-semibold border-white px-2 rounded-sm hover:shadow-inner hover:shadow-white'><MdDeleteSweep /></button>
              </div>

            </div>

          })}

        </div>

      </div>


    </>
  )
}

export default App
