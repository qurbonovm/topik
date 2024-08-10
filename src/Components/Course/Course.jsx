import React from "react";
import '../Course/Course.css'
import Home from '../Image/home.png'
import Home2 from '../Image/home2.png' 
import Home3 from '../Image/home3.png' 


function Course() {
    return (
        <div className="course">
            {/* <h2 className="course-title">O’zingizga mos kursga ro’yxatdan o’ting</h2> */}
            <div className="course-divs">
                <div className="course-one">
                    <img className="course-image" src={Home} alt="" />
                    <div className="course-time">
                        <h4 className="title">Intiensive</h4>
                        <button  className="course-btn">Davomiyligi 5oy</button>
                    </div>
                    <p className="course-text"><span className="orange">Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.</p>
                    <div className="course-money">
                        <button className="course-btn2">RO'YXATDAN O'TISH</button>
                        <p className="course-price">970.000 so’m /oy</p>
                    </div>
                </div>
                <div className="course-one">
                    <img className="course-image" src={Home2} alt="" />
                    <div className="course-time">
                        <h4 className="title">Odatiy</h4>
                        <button className="course-btn">Davomiyligi 5oy</button>
                    </div>
                    <p className="course-text2">Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.</p>
                    <div className="course-money">
                        <button className="course-btn3">RO'YXATDAN O'TISH</button>
                        <p className="course-price2">560.000 so’m /oy</p>
                    </div>
                </div>
                <div className="course-one">
                    <img className="course-image" src={Home3} alt="" />
                    <div className="course-time">
                        <h4 className="title">Individual</h4>
                        <button className="course-btn">Davomiyligi 5oy</button>
                    </div>
                    <p className="course-text3">O’qituvchidan individual dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar.
                         Moslashuvchan grafik va individual yondashuv.</p>
                    <div className="course-money">
                        <button className="course-btn4">RO'YXATDAN O'TISH</button>
                        <p className="course-price">1.800.000 so’m /oy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course