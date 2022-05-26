import "./styles.css";

export function LandingPage({ setPage, landingLogo, landingImage }) {
  function handleAnotherRedirect() {
    setPage("main");
  }

  return (
    <div className="fullPage">
      <main className="bruh">
        <div className="intro">
          <img src={landingLogo} alt="logo"></img>
          <h1 className="text landingH1">
            Centralize o controle das suas finanças
          </h1>
          <p className="text landingP">de forma rápida e segura</p>
          <button onClick={handleAnotherRedirect} className="landingButton">
            Iniciar
          </button>
        </div>
        <div>
          <img src={landingImage} alt="" className="hugeImage" />
        </div>
      </main>
    </div>
  );
}
