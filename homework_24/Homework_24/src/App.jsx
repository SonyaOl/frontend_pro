import './App.css'
import Modal from './Modal'
import Form from './Form'

function App() {

  return (
    <>
      <div className="container">
        <h1>ToDoList</h1>

       <Form/>

        <ul className="todos js--todos-wrapper"></ul>

        <p className="empty js--empty">Список порожній. Додайте перше завдання.</p>
    </div>

    <Modal/>
    </>
  )
}

export default App
