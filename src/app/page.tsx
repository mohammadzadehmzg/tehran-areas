import Image from 'next/image'

"use client"
import {useState, useEffect} from 'react';

async function getData(param) {
    const res = await fetch(`http://localhost:3000/api?query=${param}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default function Home() {

    const [changeIcon, setChangeIcon] = useState(false);
    const [areas, setAreas] = useState([]);
    const [placeHolderText, setPlaceHolderText] = useState("جستجو در شهر تهران");

    const setFocusToTextBox = () => {
        setChangeIcon(!changeIcon);
    }

    const handelChange = async e => {
        let param = e.target.value;
        const data = await getData(param)
        console.log(data)
        setAreas(data);
    }

    return (
        <>
            <header className="shadow-md">
                <div className="container p-2 mx-auto">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            dir="rtl"
                            className="font-sans text-right m-0 min-w-0 flex-auto rounded rounded-s-none bg-gray-100 bg-clip-padding px-3 py-[0.25rem] text-base leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none dark:placeholder:text-neutral-500"
                            placeholder={placeHolderText}
                            aria-label="Search"
                            onFocus={() => {
                                setFocusToTextBox()
                                setPlaceHolderText("جستجو");
                            }}
                            onBlur={() => {
                                setFocusToTextBox()
                                setPlaceHolderText("جستجو در شهر تهران")
                            }}
                            onChange={handelChange}
                            aria-describedby="button-addon2"/>

                        <div className="absolute text-right w-full end-2 top-16 max-h-screen p-4 overflow-auto">
                            {
                                areas.map((val, key) => (
                                    <div key={key}
                                         className="flex items-center font-sans justify-between mb-4 pb-3 border-b">
                                        <input id={`default-radio-${key}`} type="radio" value="" name="default-radio"
                                               className="w-4 h-4 bg-gray-100 dark:text-neutral-500 text-right"/>
                                        <label htmlFor={`default-radio-${key}`}
                                               className="ml-2 text-sm text-neutral-500 w-full">{val.name}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>

                        <span
                            className="input-group-text flex items-center bg-gray-100 whitespace-nowrap rounded-e px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-500"
                            id="basic-addon2">

                            {
                                changeIcon ?
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                                        <title/>
                                        <g data-name="Layer 2" id="Layer_2">
                                            <path
                                                d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"/>
                                        </g>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="h-5 w-5">
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clip-rule="evenodd"/>
                                    </svg>
                            }

                        </span>
                    </div>
                </div>

            </header>
            <main className="">

            </main>
        </>
    )
}
