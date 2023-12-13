import React, { useRef, useState, useEffect } from 'react';
import { IonCard, IonHeader, IonCardContent, IonProgressBar, IonAlert, IonPage, IonButton } from '@ionic/react';
import MenuSlide from '../../components/menu-Slide/menuSlide';
import Toolbar from '../../components/toolbar/toolbar';
import './PublikasiFile.css';

const Publikasi: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [buffer, setBuffer] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showProgress, setShowProgress] = useState<boolean>(false);

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (fileInputRef.current?.files?.length) {
      const file = fileInputRef.current.files[0] as File;
      console.log(file);
      setProgress(0);
      setBuffer(10);
      setShowProgress(true);

      setTimeout(() => {
        setShowAlert(true);
        setProgress(0);
        setBuffer(0);
        setShowProgress(false);
      }, 20000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 0.05);
      setBuffer((prevBuffer) => prevBuffer + 0.05);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MenuSlide />
      <IonPage className="publish">

        <IonHeader>
          <Toolbar
            pageName="Publikasi Saya"
            imageLink="https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
          />
        </IonHeader>
        <IonCard className="publikasi">
          <IonCardContent className="bagian">
            <form onSubmit={handleUpload}>
              <div style={{ height: '42px' }}>
                <h1 style={{ width: '100%', textAlign: 'center', fontWeight: "500", margin: '0px' }}>UNGGAH DOKUMEN</h1>
              </div>
              <div className='input-container'>
                <p className='labels'>Author <span style={{ color: 'rgb(223, 66, 66)', fontSize: '12px !important' }}>*</span></p>
                <input className='input-box' type="text" placeholder="  Masukkan nama-nama penulis..." />
              </div>
              <div className='input-container'>
                <p className='labels'>Year <span style={{ color: 'rgb(223, 66, 66)', fontSize: '12px !important' }}>*</span></p>
                <input className='input-box' type="text" placeholder="  Masukkan tahun..." />
              </div>
              <div className='input-container'>
                <p className='labels'>Judul <span style={{ color: 'rgb(223, 66, 66)', fontSize: '12px !important' }}>*</span></p>
                <input className='input-box' type="text" placeholder="  Masukkan judul..." />
              </div>
              <div className='input-container'>
                <p className='labels'>Kata Kunci</p>
                <input className='input-box' type="text" placeholder="  Masukkan kata kunci untuk dokumen..." />
              </div>
              <div className='input-container'>
                <p className='labels'>File <span style={{ color: 'rgb(223, 66, 66)', fontSize: '12px !important' }}>*</span></p>
                <div id='file-box'>
                  <input type="file" ref={fileInputRef} />
                  <button id='upload-button' type="submit">
                    <p style={{ fontWeight: '500', fontSize: '12px', margin: '0px', color: 'white' }}>UPLOAD</p>
                  </button>
                </div>
                {showProgress && <IonProgressBar buffer={buffer} value={progress} />}
              </div>
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
              <IonButton id='submit-button'>KIRIM</IonButton>
            </div>
            <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => setShowAlert(false)}
              header={'Upload Complete'}
              message={'Your file has been successfully uploaded.'}
              buttons={['OK']}
            />
          </IonCardContent>
        </IonCard>
      </IonPage>
    </>
  );
};

export default Publikasi;