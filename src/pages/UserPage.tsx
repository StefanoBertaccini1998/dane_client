import Navbar from '../components/NavBar';
import ProgressBar from '../components/ProgressBarProps';

const UserPage = () => {

  const energiaImmesa = 75;
  const energiaConsumata = 50;
  const maxEnergia = 100;

    return (
      <div className="user-container">
        <Navbar />
        <header>
          
          <h1>D.A.N.E.</h1>
          <button>Exit</button>
        </header>
        <main>
        <>
      
      <div className="user-page-container">
        <h1>La tua Energia</h1>
        <ProgressBar value={energiaImmesa} max={maxEnergia} color="blue" label="Energia immessa" />
        <ProgressBar value={energiaConsumata} max={maxEnergia} color="red" label="Energia consumata" />
        <p>Il tuo contributo all'autoconsumo: {((energiaConsumata / maxEnergia) * 100).toFixed(2)}%</p>
      </div>
    </>
          <section className="notarizations">
            <h3>Notarizzazioni</h3>
            <ul>
              {/* Add dynamic notarization links here */}
              <li><a href="#">67pt5wwkgh...</a></li>
            </ul>
          </section>
        </main>
      </div>
    );
  };
  
  export default UserPage;
  