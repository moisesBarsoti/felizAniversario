import fotoLaryssa from "../../assets/fotoLaryssa.jpg";
import ConfetesIMg from '../../assets/Confetes.png'
import "../Animacoes/Animacoes.css";
import "./Fotografia.css";

export const Fotografia = () => {
  return (
    <div className="imagens">
      <img src={ConfetesIMg} alt="" className="confetes" />
      <img src={fotoLaryssa} alt="" id="fotografia"/>
      <img src={ConfetesIMg} alt="" className="confetes" />
    </div>
  );
};
