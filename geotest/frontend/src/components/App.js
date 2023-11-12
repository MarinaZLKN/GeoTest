import React from 'react';
import Header from "./Header";
import '../../styles/App.css'
import Logo from "./Logo";
import Title from "./Title";

const App = () => {
  return(
      <div className="app">
          <header>
              <Header/>
          </header>
          <main>
              <div className="section-1">
                  <div className="title-pos">
                       <Title/>
                  </div>
                    <div className="logo-pos">
                        <Logo/>
                    </div>

              </div>

          </main>
          <footer></footer>
      </div>

  )

};

export default App;
