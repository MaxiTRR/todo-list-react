export function App(){
    return(
        <>
            <h1>Todo List (lista de tareas)</h1>
            <label htmlFor="">Inserte una tarea a realizar: </label>
            <input type="text" name="task" id="task" placeholder="Escriba una nueva tarea" />
            <section>
                <h2>Lista de tareas</h2>
                <ul>
                    <li>Tarea 1</li>
                    <li>Tarea 1</li>
                    <li>Tarea 1</li>
                    <li>Tarea 1</li>
                </ul>
            </section>
        </>
    )
}