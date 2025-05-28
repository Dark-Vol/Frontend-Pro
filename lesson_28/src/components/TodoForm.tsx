import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type TodoFormProps = {
  onAdd: (task: string) => void;
};

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const validationSchema = Yup.object({
    task: Yup.string().min(5, "Мінімум 5 символів").required("Це поле обов'язкове"),
  });

  return (
    <Formik
      initialValues={{ task: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onAdd(values.task);
        actions.resetForm();
      }}
    >
      <Form className="todo-form">
        <Field name="task" type="text" placeholder="Нова задача..." />
        <ErrorMessage name="task" component="div" className="error" />
        <button type="submit">Додати</button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
