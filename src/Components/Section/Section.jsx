import React from "react";
import '../Section/Section.css'
import Home from '../Image/home.png'

function Section() {
    return(
        <div className="section">
            <div className="container">
            <div className="divs">
                <div className="div-one">
                    <p className="section-title">3 oyda Koreys tilida gapirishni boshlang</p>
                    <h1 className="section-text">Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati</h1>
                    <div className="course">
                        <p className="section-text2">5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p>
                        <p className="section-text3">Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati</p>
                    </div>
                    <button className="section-btn">BEPUL DARSGA YOZILISH</button>
                    <p className="section-money">Birinchi darsga bepul yoziling!</p>
                </div>
                <div className="div-two">
                    <img className="section-img" src={Home} alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Section