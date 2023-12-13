import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonItem,
  IonLabel,
  IonList,
  IonImg,
  IonCard,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import './profile.css';
import userIcon from "../../Assets/man.png";
import Toolbar from '../../components/toolbar/toolbar';
import { useEffect, useState } from "react";


const Profile: React.FC = () => {
  const [text, setText] = useState('Edit');

  const handleClick = () => {
    if (text === 'Edit') {
      setText('Simpan');
    } else {
      setText('Edit');
    }
  }
  
  const [user, setUser] = useState<any>(null)
  
    useEffect(()=>{
      const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    },[])
  
    return (
      <IonPage>
      <IonHeader>
        <Toolbar pageName='Pengaturan Profile' imageLink='https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg' />
      </IonHeader>
      <IonContent className="isi">
          <IonGrid>
            <IonRow className="ContentWrapper">
              <IonCol className="profil" size="auto">
                <IonImg className="imgprofile" src={userIcon}></IonImg>
                <IonRow className="name">
                  <IonText>M. Thezar</IonText>
                </IonRow>
                <IonRow>
                  <IonText>Member</IonText>
                </IonRow>
              </IonCol>
              <IonCol className="wrap2">
                <IonCard>
                  <IonCardContent>
                      <IonItem className="ubah">
                        <IonLabel>Ubah Profile</IonLabel>
                      </IonItem>
                    <IonList>
                      <IonText className="text">Nama</IonText>
                      <IonItem className="item">
                        <IonLabel>Muhammad Thezar</IonLabel>
                      </IonItem>
                      <IonText className="text">Tanggal Lahir</IonText>
                      <IonItem className="item">
                        <IonLabel>04 Maret 1990</IonLabel>
                      </IonItem>
                      <IonText className="text">Email</IonText>
                      <IonItem className="item">
                        <IonLabel>thezar@gmail.com</IonLabel>
                      </IonItem>
                    </IonList>
                    <IonButton onClick={handleClick} className="Edit">{text}</IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      
        </IonPage>
  );
};
  
  export default Profile;