//Ariane a ajouté fichier Title.js
import React, { Component } from 'react'; 

class Title extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color}} >  
                <h1 className="text-center">
                    Hello {this.props.studentName} 
                </h1>
                <p>{this.props.age} ans</p>
                 
            </div>
        );
    }
}
//"Hello" est une variable, il faut un code pour accèder à la variable. "this" represente le nom de la class Title, "props" est un objet, une propriété de la class
// Pas de tiret dans l'attribut, il y a de camelName.

export default Title;