import React from 'react'; // 'react' module
// import React, {Component} from 'react'; 
import Title from './Title'; // On charge un module, un composant juste à côté.

//class App extends Component {} 
class App extends React.Component {
  render(){
    return (
      <div className="container-test"> 
        <Title studentName="Emad" age="28" color="grey"/>  
        <Title studentName="Dider" age="23" color="green"/>
        <Title studentName="Adeline" age="8" color="blue"/>
      </div>
    );
  }

}
// parent est App, l'enfant est Title
//attribut studentName est une variable

// Equivalent module.exports = App sous node.js; on l'export c'est pour que l'on peut le reutiliser. 
export default App;