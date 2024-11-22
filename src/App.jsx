import { Fotografia } from './components/fotografia/Fotografia';
import { TextoDeParadens } from './components/textoDeParabens/TextoDeParadens';
import './app.css';

export const App = () => {
  return (
    <div className="container">
        <Fotografia />
        <TextoDeParadens />
    </div>
  )
}