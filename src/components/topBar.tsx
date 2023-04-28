import React from 'react';

const TopBar = () => {
    return (
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between fixed w-full h-12">

            <div className="cursor-pointer">
                <img className="h-10 inline" src="https://pngimg.com/d/pokeball_PNG8.png" />
                <span className="text-xl align-middle ml-1">
                    Pokedex
                </span>
            </div>
            <div>
                <form className="">
                    <input
                        type="text"
                        className="bg-emerald-300 text-gray-800 placeholder-gray-700 rounded px-2 py-1"
                        placeholder="Deseo econtrar un..."
                    />
                    <button
                        className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold ml-2 rounded px-2 py-1 mr-2"
                        type="submit"
                    >
                        Buscar
                    </button>
                    <button className=" bg-red-500 hover:bg-red-700 text-white font-bold rounded px-2 py-1">
                        Filtrar
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default TopBar;
