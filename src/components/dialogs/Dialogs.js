import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/formsControls/formsControls";
import DialogItem from "./dialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./message/Message";

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));
  

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  if (!props.isAuth) return <Redirect to="/login" />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements} </div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.fieldArea}>
        <Field
          name="newMessageBody"
          placeholder="Введите ваше сообщение"
          component={Textarea}
          validate={[required, maxLength50]}
        />
      </div>
      <div className={s.blockButton}> 
        <button className={s.button}>Отправить</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
