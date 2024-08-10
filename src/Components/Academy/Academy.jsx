import React from "react";
import '../Academy/Academy.css'
import Ellips from '../Image/ellipse.png'
import Aylana from '../Image/aylana.png'
import Uq from '../Image/kamon.png'
import Key from '../Image/key.png'
import Money from '../Image/money.png'
import Raketa from '../Image/raketa.png'
import Travel from '../Image/travel.png'

function Academy(){
    return (
        <div className="academy">
            <h2 className="academy-title">TOPIK academy aniq siz uchun agar siz:</h2>
                <div className="divs-academy">
                    <div className="academy-one">
                        <div className="circle">
                            <img className="academy-ellipse" src={Ellips} alt="" />
                            <img className="academy-image" src={Aylana} alt="" />
                            <p className="circle-text"><span>Qisqa</span> muddat ichida Koreys tilida gapirishni istaysiz</p>
                        </div>
                        <div className="suitcase">
                            <img className="academy-ellipse" src={Ellips} alt="" />
                            <img className="academy-image" src={Travel} alt="" />
                            <p className="suitcase-text">Janubiy Koreya davlatida <span>o’qish</span> va <span>ishlash</span> uchun ketmoqchisiz</p>
                        </div>
                    </div>
                    <div className="academy-two">
                            <div className="rocket">
                                <img className="academy-ellipse" src={Ellips} alt="" />
                                <img className="academy-image" src={Raketa} alt="" />
                                <p className="rocket-text">Koreys tili o’rganib o’z <span>karyerangizni</span> qurmoqchisiz</p>
                            </div>
                            <div className="arrow">
                                <img className="academy-ellipse" src={Ellips} alt="" />
                                <img className="academy-image" src={Uq} alt="" />
                                <p className="arrow-text">Koreys tilini o’rta darajda bilasiz va darajangizni <span>oshirmoqchisiz</span></p>
                            </div>
                    </div>
                    <div className="academy-three">
                            <div className="money">
                                <img className="academy-ellipse" src={Ellips} alt="" />
                                <img className="academy-image" src={Money} alt="" />
                                <p className="money-text">Topik sertifikatini olib Koreyaning nufuzli universitetlariga <span>GRANT</span> yutmoqchisiz</p>
                            </div>
                            <div className="key">
                                <img className="academy-ellipse" src={Ellips} alt="" />
                                <img className="academy-image" src={Key} alt="" />
                                <p className="key-text">Ko’p yillardan buyon o’qib ham <span>natijaga</span> chiqa olmayapsiz</p>
                            </div>
                    </div>
                </div>
            <button className="academy-btn">HA, BU MEN</button>
        </div>
    )
}

export default Academy