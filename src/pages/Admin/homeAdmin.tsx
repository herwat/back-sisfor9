import React from 'react';
import { IonContent, IonHeader, IonPage, IonCardContent, IonCard, IonGrid, IonRow, IonCol, IonText, IonIcon } from '@ionic/react';
import { notificationsOutline, peopleOutline, newspaperOutline } from 'ionicons/icons';
import './homeAdmin.css';
import ToolbarAdmin from '../../components/toolbar/toolbarAdmin';
import MenuSlideAdmin from '../../components/menu-Slide/menuSlideAdmin';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Label, LabelList } from 'recharts';


function HomeAdmin() {
  const data = [
    { "name": "Jan", "numPublications": 3 },
    { "name": "Feb", "numPublications": 7 },
    { "name": "Mar", "numPublications": 14 },
    { "name": "Apr", "numPublications": 9 },
    { "name": "May", "numPublications": 12 },
    { "name": "Jun", "numPublications": 15 },
    { "name": "Jul", "numPublications": 7 },
    { "name": "Aug", "numPublications": 11 },
    { "name": "Sep", "numPublications": 9 },
    { "name": "Oct", "numPublications": 2 },
    { "name": "Nov", "numPublications": 12 },
    { "name": "Dec", "numPublications": 16 }
  ];

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
                      <h3 className="text1" style={{ fontSize: "20px" }}>Jumlah Publikasi</h3>
                      <p className="text11" style={{ fontSize: "20px" }}>14</p>
                    </IonText>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="notificationCard">
                  <IonCardContent>
                    <IonIcon icon={notificationsOutline} size="large" />
                    <IonText>
                      <h3 className="text2" style={{ fontSize: "20px" }}>Jumlah Pemberitahuan</h3>
                      <p className="text22" style={{ fontSize: "20px" }}>10</p>
                    </IonText>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="studentOnlineCard">
                  <IonCardContent>
                    <IonIcon icon={peopleOutline} size="large" />
                    <IonText>
                      <h3 className="text3" style={{ fontSize: "20px" }}>Jumlah Mahasiswa Online</h3>
                      <p className="text33" style={{ fontSize: "20px" }}>27</p>
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
                      <h3 className="text4" style={{ fontSize: "25px" }}>Informasi</h3>
                      <ol>
                        <li style={{ fontSize: "22px"}}>Mohon dimaklumi, sistem informasi kami sedang dalam tahap peningkatan. Kami mohon maaf jika ada ketidaknyamanan yang dialami.</li>
                        <li style={{ fontSize: "22px" }}>Terima kasih kepada mahasiswa dan dosen yang berperan aktif dalam mempublikasikan jurnal atau penelitian. Kontribusi ini sangat berarti bagi pengembangan sistem informasi kami.</li>
                      </ol>
                    </IonText>
                    <IonCard style={{ width: 800, height: '100%' }}>
                      <BarChart
                        width={730}
                        height={250}
                        data={data}
                        margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name">
                          <Label value="Months of the Year" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis label={{ value: 'Total Publications', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                        <Bar dataKey="numPublications" fill="#8884d8">
                          <LabelList dataKey="numPublications" position="insideTop" />
                        </Bar>
                      </BarChart>
                    </IonCard>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
}

export default HomeAdmin;
