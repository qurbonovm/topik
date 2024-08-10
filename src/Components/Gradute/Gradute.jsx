import React from "react";
import '../Gradute/Gradute.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Gradute() {
    return(
        <div className="gradute">
            <h2  className="gradute-title">Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz</h2>
            <div className="gradute-divs">
                <div className="gradute-data">
                    <h3 className="gradute-text"><span>TOPIK academy consulting</span> jamoasi sizga universitet tanlash, 
                        visa olish va grant yutishingizda yaqindan ko’maklashadi
                    </h3>
                    <p className="gradute-text2">Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!</p>
                    <button className="gradute-btn">ARIZA QOLDIRING</button>
                </div>
                <div className="gradute-slider">
                {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper> */}
                </div>
            </div>
        </div>
    )
}

export default Gradute