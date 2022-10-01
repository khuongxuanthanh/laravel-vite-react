import React from "react";
import { useNavigate } from "react-router-dom";

const navList = [
    {
        name: "home",
        link: "/",
    },
    {
        name: "Pages",
        link: "/Pages",
    },
    {
        name: "Products",
        link: "/featprod",
    },
    {
        name: "Blog",
        link: "/Blog",
    },
    {
        name: "Shop",
        link: "/Shop",
    },
    {
        name: "Contact",
        link: "/Contact",
    },
];

const Navbar = () => {
    const navigate = useNavigate();
    const showProduct = () => {
        navigate("/featprod");
    };
    return (
        <header className="bg-white">
            <div className="flex items-center h-20 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
                <a className="block text-teal-600 font34-34" href="/">
                    <span className="sr-only">Home</span>
                    <h2>Hekto</h2>
                </a>
                <div className="flex items-center justify-end flex-1 md:justify-between">
                    <nav
                        className="hidden md:block"
                        aria-labelledby="header-navigation"
                    >
                        <h2 className="sr-only" id="header-navigation">
                            Header navigation
                        </h2>
                        <ul className="flex items-center gap-6">
                            {navList.map((e) => {
                                return (
                                    <li key={e.name}>
                                        <a
                                            className="nav-link transition"
                                            href={e.link}
                                            onClick={()=>showProduct()}
                                        >
                                            {e.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        <form className=" mb-0 lg:flex">
                            <div className="relative">
                                <input
                                    className="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10"
                                    placeholder="Search..."
                                    type="text"
                                />
                                <button
                                    className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
                                    type="submit"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
