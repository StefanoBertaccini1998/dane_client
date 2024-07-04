import Navbar from '../components/NavBar';
import ProgressBar from '../components/ProgressBarProps';

const AdminPage = () => {
  const energiaImmesa = 75;
  const energiaConsumata = 50;
  const maxEnergia = 100;

    return (
      <div className="admin-container">
          <Navbar />
        <main>
          <section className="add-pod">
            <h2>Aggiungi POD alla CER</h2>
            <input type="text" placeholder="Insert POD" />
            <button>Insert</button>
          </section>
          <section className="energy-stats">
            <h2>CER EMPOLI 1</h2>
            <div>
              <ProgressBar value={energiaImmesa} max={maxEnergia} color="#00ccff" label="Energia immessa" />    
              </div>
            <div>
              <ProgressBar value={energiaConsumata} max={maxEnergia} color="#ff66b2" label="Energia consumata" />
              </div>
          </section>
          <section className="contribution">
            <h2>Contributo Autoconsumo</h2>
            <table>
              <thead>
                <tr>
                  <th>POD</th>
                  <th>Contributo</th>
                </tr>
              </thead>
              <tbody>
                {/* Add dynamic contribution data here */}
                <tr>
                  <td>48693578490</td>
                  <td>12%</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="notarizations">
            <h2>Notarizzazioni</h2>
            <ul>
              {/* Add dynamic notarization links here */}
              <li><a href="#">67pt5wwkgh...</a></li>
            </ul>
          </section>
        </main>
      </div>
    );
  };
  
  export default AdminPage;
  