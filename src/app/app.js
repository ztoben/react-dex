import React, {Component, Fragment} from 'react';
import '../style/app.scss';
import pokemon from '../../public/pokemon.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      selectedPokemon: pokemon[0]
    };
  }

  buildList = () => pokemon.map((poke, idx) => {
    return (
      <li
        className="poke-list-item"
        key={poke.id}
        onClick={
          () => this.setState({
            selectedIndex: idx,
            selectedPokemon: pokemon[idx]
          })
        }
      >
        {poke.name}
      </li>
    )
  });

  render() {
    return (
      <Fragment>
        <p className="page-header">react-dex</p>
        <div className="pokedex-container">
          <div className="left-screen">
            <div className="top-border">

            </div>
            <div className="hinge">
              <div className="top" />
              <div className="bottom" />
            </div>
            <div className="poke-display-container">
              <div className="poke-display">
                <h4>{this.state.selectedPokemon.name}</h4>
                <img width={100} src={require(`../../public/sprites/${this.state.selectedPokemon.id}.png`)} />
              </div>
            </div>
          </div>
          <div className="right-screen">
            <div className="poke-list-container">
              <input className="poke-search" placeholder="Search for a Pokémon..."/>
              <div className="poke-list">
                <ul>
                  {this.buildList()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
