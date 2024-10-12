import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
 constructor(props){
    super(props);
    this.state = {
      personne : {
        fullName: "Adon jonathan",
        bio: "Besoin d'un développeur freelance contactez-moi au numéro suivant: 07 87 60 67 08",
        imgSrc: "https://db0dce98.rocketcdn.me/wp-content/uploads/2024/02/developpeur-web-datascientest-1024x585.jpg",
        profession: "Développeur fullstack"
      },

      show: true,

      count: 0
    }
 }

 handleProfile = () => {
  this.setState({
    show: !this.state.show,
    count: 0
  })
 }

 componentDidMount() {
  this.timer = setInterval(() => {
    this.setState((prevState) => ({
      count: prevState.count+1
    }))
  }, 1000);
 }

 componentWillUnmount() {
  clearInterval(this.timer);
 }

 render() {
  const {fullName, bio, imgSrc, profession} = this.state.personne;

  return(
    <>
      <div>
        {this.state.show && (<div>
          <p>{fullName}</p>
          <p>{bio}</p>
          <img src={imgSrc}  alt='photo' />
          <p>{profession}</p>
        </div>)}

        <button onClick={this.handleProfile}> Changer </button>
      </div>

      <div>
        {!this.state.show && <h3>{this.state.count}</h3>}          
      </div>
    </>
  );
 }
}

export default App;
