const AdminPage = () => {
    return (
      <div className="admin-container">
        <header>
          <h1>D.A.N.E.</h1>
          <button>Exit</button>
        </header>
        <main>
          <section className="add-pod">
            <h2>Aggiungi POD alla CER</h2>
            <input type="text" placeholder="Insert POD" />
            <button>Insert</button>
          </section>
          <section className="energy-stats">
            <h2>CER EMPOLI 1</h2>
            <div>
              <span>Energia immessa</span>
              <div className="bar blue"></div>
            </div>
            <div>
              <span>Energia consumata</span>
              <div className="bar red"></div>
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
  