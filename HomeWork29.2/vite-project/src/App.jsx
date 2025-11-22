import { useFormik } from 'formik'
import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK } from './store/actions';

function App() {



        const dispatch = useDispatch();
        const tasks = useSelector(state => state.tasks)



        const validate = values => {
                const errors = {};
                if (!values.tasks) {
                        errors.tasks = 'Required'
                } else if (values.tasks.length < 5) {
                        errors.tasks = "Введіть не менше 5 символів"
                }
                return errors;
        }




        const formik = useFormik({
                initialValues: {
                        tasks: ''
                },
                validate,
                onSubmit: values => {
                        dispatch({ type: ADD_TASK, payload: values.tasks })

                        formik.resetForm();
                }
        });
        return (
                <div>
                        <form onSubmit={formik.handleSubmit}>
                                <div>
                                        {formik.errors.tasks ? <div style={{ color: "red" }}>{formik.errors.tasks}</div> : null}
                                        <input type="text" name="tasks" value={formik.values.tasks} placeholder="Enter your task" onChange={formik.handleChange} />
                                </div>
                                <button type="submit">Add</button>
                        </form>
                        <div>
                                {tasks.map((t, i) => (
                                        <p key={i}>{t}</p>
                                ))}
                        </div>


                        <footer>Total tasks: {tasks.length}</footer>

                </div>
        )

}

export default App
