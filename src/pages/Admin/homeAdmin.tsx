import React from 'react';
import { IonContent, IonHeader, IonPage, IonCardContent, IonCard, IonGrid, IonRow, IonCol, IonText, IonIcon } from '@ionic/react';
import { notificationsOutline, peopleOutline, newspaperOutline } from 'ionicons/icons';
import './homeAdmin.css';
import ToolbarAdmin from '../../components/toolbar/toolbarAdmin';
import MenuSlideAdmin from '../../components/menu-Slide/menuSlideAdmin';

const HomeAdmin: React.FC = () => {
  return (
    <>
      <MenuSlideAdmin />
      <IonPage id='main-content'>
        <IonHeader>
          <ToolbarAdmin pageName='Admin' imageLink='https://www.pngmart.com/files/21/Admin-Profile-PNG-Photo.png' />
        </IonHeader>
        
        <IonContent fullscreen className="contentadmin">
          <h2 className="text01">Dashboard</h2>
          <h4 className="sapaan">Hi, Mentari</h4>
            <IonGrid fixed>
              <IonRow>
                <IonCol>
                  <IonCard className="publicationCard">
                    <IonCardContent>
                      <IonIcon icon={newspaperOutline} size="large" />
                      <IonText>
                      <h3 className="text1" style={{fontSize: "20px"}}>Jumlah Publikasi</h3>
                      <p className="text11" style={{fontSize: "20px"}}>14</p>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard className="notificationCard">
                    <IonCardContent>
                      <IonIcon icon={notificationsOutline} size="large" />
                      <IonText>
                        <h3 className="text2" style={{fontSize: "20px"}}>Jumlah Pemberitahuan</h3>
                        <p className="text22" style={{fontSize: "20px"}}>10</p>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard className="studentOnlineCard">
                    <IonCardContent>
                      <IonIcon icon={peopleOutline} size="large" />
                      <IonText>
                        <h3 className="text3" style={{fontSize: "20px"}}>Jumlah Mahasiswa Online</h3>
                        <p className="text33" style={{fontSize: "20px"}}>27</p>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard className="informationCard">
                    <IonCardContent>
                      <IonText>
                        <h3 className="text4" style={{fontSize: "25px"}}>Informasi</h3>
                        <ol>
                          <li style={{fontSize: "22px"}}>Dikarenakan sistem informasi ini masih dalam proses pengembangan maka kami memohon maaf jika terdapat kekurangan nyaman anda.</li>
                          <li style={{fontSize: "22px"}}>Diharapkan Setiap Mahasiswa/Dosen MemPublish Jurnal/Penelitian nya.</li>
                        </ol>
                      </IonText>
                      <img className="grafik" alt="grafik" src="grafik.jpg" />
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default HomeAdmin;