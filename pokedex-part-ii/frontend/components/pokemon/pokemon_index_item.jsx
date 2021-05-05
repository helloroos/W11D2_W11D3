import React from 'react';

// export const PokemonIndexItem = () => {
//     const { pokemon } = this.props;
//     console.log(this.props);
//     return 
//     <li key={pokemon.id} className="pokemon-index-item">
//         <span>{pokemon.id}</span>
//         <img src={pokemon.imageUrl} />
//         <span>{pokemon.name}</span>
//     </li>;
// };

class PokemonIndexItem extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
    }
    render() {
        const { pokemon } = this.props;
        return (
            <li key={pokemon.id} className="pokemon-index-item">
                <span>{pokemon.id}</span>
                <img src={pokemon.imageUrl} />
                <span>{pokemon.name}</span>
            </li>
        );
    };
};

export default PokemonIndexItem;