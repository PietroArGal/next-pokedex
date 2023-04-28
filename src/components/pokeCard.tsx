import React from 'react';
import styles from '../styles/PokeColor.module.css'

type PokemonCardProps = {
    name: string;
    imageUrl: string;
    types: string[];
};

const PokemonCard = ({ name, imageUrl, types }: PokemonCardProps) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">

            <img src={imageUrl} alt={name} className="h-54 w-full object-cover" />
            <div className="px-4 py-2">
                <h2 className="text-xl font-bold mb-2 capitalize">{name}</h2>
                <div className="flex flex-wrap">
                    {types.map((type) => (
                        <span key={type}
                            className={`${styles[`type-${type.toLowerCase()}`]} inline-block rounded-lg px-2 py-1 text-xs font-bold mr-2 capitalize text-white`}
                        >
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
