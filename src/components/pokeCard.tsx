import { Props } from '../interfaces/pokeProps'

export default function PokemonCard({ pokemon }: Props) {
    return (
        <div className="p-4 max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <img src={pokemon.image} alt={pokemon.name} className="w-full" />
            <div className="px-6 py-4">
                <h1 className="text-lg font-bold mb-2">{pokemon.name}</h1>
                <p className="text-gray-700 text-base">{`#${pokemon.id}`}</p>
            </div>
        </div>
    );
}