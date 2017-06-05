export const getTodos = () => (
    dispatch => (
        fetch('http://192.168.0.3:3000/todos', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(todos => dispatch({
            type: 'GET_TODO',
            payload: todos
        }))
    )
)

export const createTodo = (todo) => (
   dispatch => (
        fetch('http://192.168.0.3:3000/todos', {
           method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(todo => dispatch({
            type: 'CREATE_TODO',
            payload: todo
        }))
    )
)