import React from 'react';
import styles from '../styles/PokeColor.module.css'

type PokemonCardProps = {
    name: string;
    id: number;
    imageUrl: string;
    types: string[];
};

const PokemonCard = ({ name, id, imageUrl, types }: PokemonCardProps) => {
    return (
        <div className="bg-amber-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg">

            <img src={imageUrl} alt={name} className="px-2 py-2 h-53 w-full object-cover" />
            <div className="px-4 py-2">
                <h2 className="text-xl font-bold mb-2 capitalize">{name}</h2>
                <div className="flex flex-wrap">
                    {types.map((type) => (
                        <span key={type}
                            className={`${styles[`type-${type.toLowerCase()}`]} inline-block rounded-lg px-2 py-2 text-sm font-bold mr-2 capitalize text-white`}
                        >
                            {type}
                        </span>
                    ))}
                    <span className=" text-gray-600 text-xs py-2" >{`ID: ${id}`}</span>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
