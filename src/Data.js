import React from "react";
import Keybs from "./Keybs";
import "./keybs.css";

const keybData = [
    {
        name:"Redragon K618 Horus Wireless RGB Mechanical Keyboard, Bluetooth/2.4Ghz/Wired Tri-Mode Ultra-Thin Low Profile Gaming Keyboard w/No-Lag Cordless Connection 🎮🥇",
        picname:
        "./keybs1.png"
    },
    {
        name:"Redragon K552-R KUMARA RAINBOW RGB Backlit Mechanical Gaming Keyboard 🎮🥇",
        picname:
        "./keybs4.png"
    },
    {
        name:"Redragon K617 FIZZ 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard 🎮🥇",
        picname:
        "./keybs3.png"
    },
    {
        name:"Redragon K561-R Mechanical Keyboard LED Backlit 87 Keys 🎮🥇",
        picname:
        "./keybs2.png"
    },
    {
        name:"Redragon K596 VISHNU TKL Wired RGB Mechanical Gaming Keyboard 🎮💯",
        picname:
        "./keybs5.png"
    },
    {
        name:"Redragon K617 FIZZ 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard w/ White & Grey Mixed-Colored Keycaps, Linear Red Switch, Pro Driver Support 🎮💯",
        picname:
        "./keybs6.png"
    },
    {
        name:"Redragon K619 Horus RGB Mechanical Keyboard, Ultra-Thin Designed Wired Gaming Keyboard w/Low Profile Keycaps, Dedicated Media Control & Linear Red Switch, Pro Software Supported 🎮💯",
        picname:
        "./keybs7.png"
    },
    {
        name:"Redragon Deimos K599 2.4G+Wired  Mechanical keyboard 🎮💯",
        picname:
        "./keybs8.png"
    }
];

export default function Data() {
    const keybs = keybData;
    const numKeyb = keybs.length;

    const rows = [];
    const itemsPerRow = 4;

    for (let i = 0; i < numKeyb; i += itemsPerRow) {
        const rowKeybs = keybs.slice(i, i + itemsPerRow);
        const row = (
            <div className="keyb-row" key={`row_${i}`}>
                {rowKeybs.map((keyb) => (
                    <Keybs keybsObj={keyb} key={keyb.name} />
                ))}
            </div>
        );
        rows.push(row);
    }

    return (
        <main className="data">
            {numKeyb > 0 ? (
                <>
                    {rows}
                </>
            ) : (
                <p>Keyboards are out of stock 😔</p>
            )}
        </main>
    )
}