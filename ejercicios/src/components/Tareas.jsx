import React from 'react'
import { useState } from 'react'
import { tareasIniciales} from '../TareasIniciales'

const Tareas = () => {
    const [nombreTarea, setNombreTarea] = useState("") /* Estado de la tarea */
    const [listaTareas, setListaTareas]= useState(tareasIniciales) // Estado del array de tareas //   
    
    const enviarFormulario = (e) => {
        e.preventDefault() // Evita que se recargue la página //
        setListaTareas([...listaTareas, {nombre: nombreTarea, completada:false}])
    }

    const capturaInput = (e) => { // Captura el valor del input //
        setNombreTarea(e.target.value) // Guarda el valor en el estado //
    }

    const completarTarea = (tarea) => {
        const nuevasTareas = [...listaTareas] // Copiamos las tareas anteriores
        const index = nuevasTareas.findIndex(el => el.nombre === tarea.nombre)
        nuevasTareas[index].completada = true
        setListaTareas(nuevasTareas)
    }

    const eliminarTarea = (tarea) => {
        const listaFiltrada = listaTareas.filter(el => el.nombre !==
        tarea.nombre)
        setListaTareas(listaFiltrada)
    }

  return (
    <>
    <div>
    <form onSubmit={enviarFormulario}>
        <input name="nombreTarea" onChange={capturaInput}/> 
        <button>Agregar Tarea</button>
    </form>

    <ul>
        {listaTareas.map(tarea => <li
        key={tarea.nombre}
        style={tarea.completada === true ? { textDecoration:
        'line-through' } : {}}>
        {tarea.nombre}
        {tarea.completada === false ? <button onClick={() =>
        completarTarea(tarea)}> Completar </button> : ''}
        <button onClick={() => eliminarTarea(tarea)}> Borrar
        </button>
        </li>)}
        </ul>
    </div>
    </>
  )
}

export default Tareas