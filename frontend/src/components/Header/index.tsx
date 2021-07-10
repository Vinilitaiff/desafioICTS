import { FiPlusSquare } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Container } from "./styles";

interface HeaderProps {
  openModal: () => void;
}

const Header = ({ openModal }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <header>         
        <nav>
        <Link to="/">   
          <a>Produto</a>
        </Link>  
        <Link to="/purchase">   
          <a>Compra</a>
        </Link>  
          <div>
            <button type="button" onClick={openModal}>
              <div className="text">Novo</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
