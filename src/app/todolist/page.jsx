'use client'
import { useState } from "react"
import extenso from "extenso"
import CurrencyInput from 'react-currency-input-field';

export default function ToDoList() {

    const [InputText, setInputText] = useState(0)
    const [ListItems, setListItems] = useState([
        {
            number: 2,
            xtenso: 'dois'
        }
    ])

    const xtenso = extenso(InputText, {mode: 'currency'})

    function HandleNewText(e) {
        setInputText(e.target.value)
    }

    function HandleNewValue(e) {
        setListItems([{ number, xtenso }, ...ListItems])
        console.log(xtenso)
        setInputText(0)
        console.log(ListItems)
    }

    return (
        <div>
            <h1>Converta números por extenso</h1>
            <form action={HandleNewValue}>
                <input
                    type="text"
                    placeholder="Digite algo"
                    onChange={HandleNewText}
                    className="pl-3 h-10 rounded text-zinc-900"
                />
                <button
                    className="h-10 px-4 bg-indigo-500 ml-2 rounded"
                >
                    Enviar
                </button>
            </form>
            <ul>
                {
                    ListItems.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="mt-2 uppercase"
                            >
                                {item.xtenso}
                            </li>
                        )
                    })
                }
            </ul>


        </div>
    )
}