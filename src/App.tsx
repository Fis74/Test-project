import './App.css';
import { useAppDispatch } from './redux/hook';
import { addNotification } from './redux/notificationSlice';

const App = () => {
  const dispatch = useAppDispatch()
  const simulateServer = () => {
    new Promise<void>((resolve, reject) => {
      if (Math.random() < 0.5) {
        return resolve();
      }
      const t: any = setTimeout(() => {
        reject();
        return clearTimeout(t);
      }, 1000);
    }).then(() => {
      dispatch(
        addNotification({
          label: "Успешно",
          text: "Изменения успешно сохранены",
          status: "success"
        })
      )
    }).catch(() => {
      dispatch(
        addNotification({
          label: "Изменения не сохранены",
          text: "Потеря интернет соединения",
          status: "error",
        })
      )
    })
    }
  return (
    <div className="App">
      <button onClick={simulateServer}>Click</button>
    </div>
  );
}

export default App;
