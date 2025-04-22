import './css/Equip.css'
import { Navegacio } from '../header/Navegacio.jsx'
import { Peu } from '../footer/Peu.jsx'
import equip from '../assets/equip.mp4'
import money from '../assets/money.mp4'
import safe from '../assets/safe.mp4'
import { useState } from 'react'
import { AddIcon } from '../Icones.jsx'

export default function Equip() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    const [moreMoney, setMoreMoney] = useState(false)

    const fn_moreMoney = () => {
        setMoreMoney(!moreMoney)
    }

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_equip' src={equip} autoPlay loop muted></video>
                </section>
                <section className='cn-info-equip'>
                    <div className='cn-div-video-equip'>
                        {moreMoney
                            ? <video id='id_video_money' src={money} autoPlay loop muted></video>
                            : <video id='id_video_safe' src={safe} autoPlay loop muted></video>
                        }
                    </div>
                    <button
                        className='cn-bttn-more-money-equip'
                        id='id_bttn_more_money_equip'
                        name='moreMoney'
                        onClick={fn_moreMoney}
                    >
                        <AddIcon />
                    </button>
                </section>
            </main>
            <Peu />
        </>
    )   
}