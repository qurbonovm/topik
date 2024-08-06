import React from "react";
import '../Section/Section.css'
import Home from '../Image/home.png'

function Section() {
    return(
        <div className="section">
            <div className="divs">
                <div className="div-one">
                    <p>3 oyda Koreys tilida gapirishni boshlang</p>
                    <h1>Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati</h1>
                    <p>5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p>
                    <p>Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati</p>
                    <button>BEPUL DARSGA YOZILISH</button>
                    <p>Birinchi darsga bepul yoziling!</p>
                </div>
                <div className="div-two">
                    <img src={Home} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section