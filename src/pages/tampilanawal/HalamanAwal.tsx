import React, { useState } from 'react'; 
import { IonCard,  IonCardHeader, IonCardSubtitle, IonPage } from '@ionic/react';
import './HalamanAwal.css';
import Buttons from '../../components/Button/buttons';

function pagefirst() {
  const [showCard2, setShowCard2] = useState({ card1: true, card2: false }); 

  const handleNext = () => { 
    setShowCard2({ card1: false, card2: true }); 
  };

  return (
    <IonPage className="pagefirst">
    <div className="container">
      {showCard2.card1 && ( 
        <IonCard className="pembuka">
          <img className="logoUH" alt="Logo_UH" src="Logo_UH.png" />
          <IonCardHeader>
            <IonCardSubtitle className="intro">Selamat Datang di Pusat Layanan Informasi Penelitian dan Publikasi Departemen Teknik Informatika</IonCardSubtitle>
            <Buttons
              className="Button1"
              buttonName="next"
              maxWidth="60px"
              fillType="solid"
              shape="round"
              color="light"
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                margin: 'auto' 
              }}
              onClick={handleNext} 
            />
          </IonCardHeader>
        </IonCard>
      )}

      {showCard2.card2 && ( 
        <IonCard className="card2">
          <img className="pict2" alt="pictInfor" src="pictInfor.png" />
          <IonCardHeader>
            <IonCardSubtitle className="intro2">Silakan login untuk mengakses segala kemudahan dan keuntungan yang kami berikan</IonCardSubtitle>
            <Buttons
              className="Button2"
              buttonName="next"
              maxWidth="60px"
              fillType="solid"
              shape="round"
              path="halamantamu"
              color="light"
              style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  margin: 'auto',
                  textDecoration: 'none',
              }}
            />
          </IonCardHeader>
        </IonCard>
      )}
    </div>
    </IonPage>
  );
}
export default pagefirst;
