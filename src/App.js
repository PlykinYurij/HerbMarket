import './App.scss';
import logoMarket from "./images/LOGO MARKET.png"
import vc2 from "./images/vc2.png"
import vc2min from "./images/vitaminC2.png"
import traced1 from "./images/traced1.png"
import omega3 from "./images/omega3.png"
import omega3Min from "./images/omega800Min.png"
import omega800 from "./images/omega800.png"
import omega800Full from "./images/omega800Full.png"

function App() {
  return (
    <div className="App">

      <div className="containerBanner">
        <div className="logoMarket">
          <img src={logoMarket} alt="img" />
        </div>
      </div>

      <div className="containerBannerHerbMarket">
        <div className="HerbMarketContainer">
          <div className="HerbMarketText">Herb<br />Market</div>
          <div className="containerImg">
            <img className="ImgContentMax" src={vc2} alt="img" />
            <img className="ImgContentMin" src={vc2min} alt="img" />
          </div>
        </div>
        <div className="tracedContainer">
          <img className="traced1" src={traced1} alt="img" />
        </div>
      </div>

      <div className="containerBannerVitamins">
        <div className="Omega3VitaminsContainer">
          <div className="vitaminsText">Витамины<br />со всего <br /> света</div>
          <div className="containerImg">
            <img className="ImgContentMax" src={omega3} alt="img" />
            <img className="ImgContentMin" src={omega3Min} alt="img" />
          </div>
          <div className="tracedContainer">
            <img className="traced1" src={traced1} alt="img" />
          </div>
        </div>
      </div>

      <div className="containerBannerOmega800">
        <div className="wrapperOmega800Descriptions">
          <div className="Omega800ContainerText">
            <div className="container0">
              0+
            </div>
            <div className="containerContentOmega800">
              <div className="containerTextHerbMarket">*Herb Market = Хёрб Маркет</div>
              <div className="containerDiscriptionOmega800">БАД. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВЕННЫМ СРЕДСТВОМ.</div>
            </div>
          </div>
          <div className="containerImg">
            <img className="omega800Img" src={omega800} alt="img" />
          </div>
          <div className="tracedContainerOmega800">
            <img className="traced1" src={traced1} alt="img" />
          </div>
        </div>
      </div>

      <div className="containerBannerStatic">
        <div className="logoMarketStatic">
          <img className="logoMarketStaticImg" src={logoMarket} alt="img" />
        </div>
        <div className="HerbMarketTextStatic">Herb<br />Market</div>
        <div className="containerImgStatic">
          <div className="tracedContainerStatic">
            <img className="tracedImgStatic" src={traced1} alt="img" />
          </div>
          <div className="omega800FullStaticContainer">
            <img className="omega800FullStaticContainerImg" src={omega800Full} alt="img" />
          </div>
        </div>
        <div className="Omega800ContainerTextStatic">
          <div className="containerContentOmega800Static">
            <div className="container0Static">
              0+
            </div>
            <div className="containerTextHerbMarketStatic">*Herb Market = Хёрб Маркет</div>
            <div className="containerDiscriptionOmega800Static">БАД. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВЕННЫМ СРЕДСТВОМ.</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
