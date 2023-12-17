import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import "./menuSlideAdmin.css"
import { bookOutline, mail, mailOutline, chevronBackOutline, homeOutline, home, book, manOutline, man, school, schoolOutline, peopleOutline, people } from "ionicons/icons"
import MenuItem from './menu-Item/menuItem';
import Buttons from '../button/buttons';

function MenuSlideAdmin() {
    


    return (
        <>
            <IonMenu contentId='main-content' className='menu-slide'>
            <IonHeader id='menu-slide-header'>
            <IonMenuToggle>
                        <IonButton fill='clear' id='toogle-button'>
                            <IonIcon id='toggle-button-icon' icon={chevronBackOutline} />
                        </IonButton>
                    </IonMenuToggle>
                    <IonTitle id='menu-slide-title'>MENU PDD</IonTitle>
                </IonHeader>
                <IonContent >
                    <IonList>     
                         <MenuItem iconItem={homeOutline} iconItemFill={home} content='Halaman Utama' route='/admin' />
                         <MenuItem iconItem={bookOutline} iconItemFill={book} content='Publikasi' route='publikasiadmin' />
                         <MenuItem iconItem={manOutline} iconItemFill={man} content='Dosen' route='daftardosen' />
                         <MenuItem iconItem={schoolOutline} iconItemFill={school} content='Mahasiswa' route='daftarmahasiswa' />
                         <MenuItem iconItem={peopleOutline} iconItemFill={people} content='Guest' route='daftarguest' />
                         <MenuItem iconItem={mailOutline} iconItemFill={mail} content='Pemberitahuan' route='infopemberitahuan' />
                       
                    </IonList> 
                    <div className="Log">
                    <Buttons style={{width:"200%"}}
                         buttonName="log out" 
                         fillType= "solid" 
                         shape= "round" 
                         path= "formAdmin"
                         />
                    </div> 
                </IonContent>
            </IonMenu >
        </>
    );
};

export default MenuSlideAdmin;



