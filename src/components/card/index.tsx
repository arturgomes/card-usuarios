import './styles.css'
interface User {
  id: string;
  nome: string;
  profissao: string;
  likes: number;
  messages: number;
  shares: number;
  telefone: string;
  nascimento: string;
  cidade: string;
  estado: string;
  altura: string;
  imc: string;
  iniciais: string;
  peso: number;
}

interface Props {
  user: User
}
export default function Card({ user }: Props) {
  return (
    <div className='profile-card'>
      <div className="image">
        <div className="profile-img">
          <span className="initials">{user.iniciais}</span>
        </div>
      </div>
      <div className="text-data">
        <span className="name">{user.nome}</span>
        <span className="job">{user.profissao}</span>
      </div>
      <div className="text-data">
        <span className="cidade">{user.cidade}/{user.estado}</span>
        <span className="aniversario">Aniversário: {user.nascimento}</span>
      </div>
      <div className="media-buttons">
        <a href="#" style={{ background: '#4267b2' }} className="link">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" style={{ background: '#1da1f2' }} className="link">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#" style={{ background: '#e1306c' }} className="link">
          <i className="bx bxl-instagram"></i>
        </a>

        <a href="#" style={{ background: '#ff0000' }} className="link">
          <i className="bx bxl-youtube"></i>
        </a>
      </div>
      <div className="buttons">
        <button className="button">Altura {user.altura}</button>
        <button className="button">Peso {user.peso}kg</button>
        <button className="button">IMC {user.imc}</button>
      </div>
      <div className="analytics">
        <div className="data">
          <i className="bx bx-heart"></i>
          <span className="nu">{user.likes}k</span>
        </div>
        <div className="data">
          <i className="bx bx-message-rounded"></i>
          <span className="nu">{user.messages}k</span>
        </div>
        <div className="data">
          <i className="bx bx-share"></i>
          <span className="nu">{user.shares}k</span>
        </div>
      </div>
    </div>
  )
}
