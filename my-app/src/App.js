import css from './App.module.css';
//import NavBarSimple from './components/NavBarSimple';
import Sidebar from "./components/Sidebar";
import NavBarForm from './components/NavBarForm';
import ContentHooks from './components/ContentHooks';


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;