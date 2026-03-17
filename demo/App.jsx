import { HandProvider, useHand, useHandSide, Fab } from "../src/index";
import { ManoDerecha, ManoIzquierda } from "./icons/Icons.jsx";
import "./main.css";

// Botón fijo de selección de mano debajo del título
function HandSelector() {
  const { hand, toggle } = useHand();
  const Icon = hand === "right" ? ManoIzquierda : ManoDerecha;

  return (
    <button className="toggle hand-start" onClick={toggle}>
      <Icon />
      <span>{hand === "right" ? "Cambiar a zurdo" : "Cambiar a diestro"}</span>
    </button>
  );
}

// Toggle flotante tipo "hamburguesa" **NO cambia la mano**
function FloatingToggle({ onClick }) {
  const { hand } = useHand(); // solo para mostrar D/Z
  return (
    <button className="toggle hand-end" onClick={onClick}>
      ☰<span>{hand === "right" ? "Menú D" : "Menú Z"}</span>
    </button>
  );
}

// Card que usa side para alinear botones
function Card({ title, description }) {
  const { side } = useHandSide(); // "start" | "end"

  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-body">
        <p>
          Esta interfaz adapta automáticamente la posición de los elementos
          interactivos dependiendo del lado preferido del usuario.
        </p>
      </div>
      <div className={`card-actions hand-flex-${side}`}>
        <button className="primary">Comprar</button>
        <button className="secondary">Más información</button>
      </div>
    </div>
  );
}

// Demo principal
function App() {
  const handleMenuClick = () => {
    console.log("Abrir menú flotante");
  };

  return (
    <HandProvider defaultHand="right">
      <div className="demo-container">
        <header className="demo-header">
          <h1>Handed UI - Demo</h1>
          <HandSelector /> {/* Botón azul que sí cambia la mano */}
        </header>
        <FloatingToggle onClick={handleMenuClick} /> {/* Solo menú */}
        <div className="cards">
          <Card
            title="Handed UI"
            description="Componentes adaptados para usuarios zurdos y diestros."
          />
          <Card
            title="Ejemplo de Card"
            description="Muestra cómo se posicionan los botones según la mano."
          />
        </div>
        <Fab>+</Fab> {/* Botón flotante */}
      </div>
    </HandProvider>
  );
}

export default App;
