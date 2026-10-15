
const Main = () => {
  return (
    <main className="main" id="filmes">
      <div className="col col1">
        <h2>Seus Filmes</h2>

        <p>
          Aqui, você pode escolher o filme que deseja assistir.
          Caso queira escolher mais, clique no botão.
        </p>

        <button type="button">Mais</button>
      </div>

      <div className="col cards">
        <div className="card card1" aria-label="Afterlife"></div>
        <div className="card card2" aria-label="Transformers"></div>
        <div className="card card3" aria-label="Mowgli"></div>
        <div className="card card4" aria-label="Shift"></div>
        <div className="card card5" aria-label="Round 6"></div>
        <div className="card card6" aria-label="Harry Potter"></div>
      </div>
    </main>
  );
};

export default Main;
