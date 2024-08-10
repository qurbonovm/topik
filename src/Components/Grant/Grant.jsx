import React from "react";
import '../Grant/Grant.css'
import school from '../Image/grant.png'

function Grant() {
    return (
        <div className="grant">
            <h2 className="grant-title">Koreya Universitetlariga 100% gacha grant yutish imkoniyati</h2>
            <div className="grant-divs">
                <div className="grant-one">
                    <img className="grant-image" src={school} alt="" />
                </div>
                <div className="grant-two">
                    <h4 className="grant-title2">GKS (Global Korean Scholarship) <span>$70.000</span> lik Grant</h4>
                    <p className="grant-text">Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro 
                        talim boyicha milliy instituti tomonidan <span>xorijiy</span> talabalarning Koreyada 
                        bakalavr va magistratura bosqichida <span>100% gacha to’liq grant</span>
                        va oylik <span>stipendiya</span> olish imkoniyatingiz bor
                    </p>
                    <h4 className="grant-title3">GKS granti sizga nima beradi</h4>
                    <p className="grant-text2">Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.</p>
                    <p className="grant-text3">Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. 
                        Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).</p>
                    <p className="grant-text4">Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... <span>ko’proq</span></p>
                </div>
            </div>
            <div className="grant-vedio">
                {/* <iframe id="youtabe-iframe-753288478-1570567677556" width="100%" height="100%"           
                src="https://youtu.be/iXAHO8EUtk0?si=kKvN0xTxWtOesEdC" allowFullScreen allow="autoplay">
                </iframe> */}
            </div>
        </div>
    )
}

export default Grant