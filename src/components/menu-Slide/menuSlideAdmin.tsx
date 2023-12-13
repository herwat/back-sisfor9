import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonList, IonMenu, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import "./menuSlideAdmin.css"
import { bookOutline, mail, mailOutline, chevronBackOutline, homeOutline, home, book, manOutline, man, school, schoolOutline, peopleOutline, people } from "ionicons/icons"
import MenuItem from './menu-Item/menuItem';
import Buttons from '../button/buttons';

function MenuSlideAdmin() {
    const history = useHistory();


    return (
        <>
            <IonMenu contentId='main-content' className='menu-slide'>
                <IonHeader>
                    <IonToolbar className='menu-toolbar' style={{ height: '64px' }}>
                        <IonIcon slot='start' icon={chevronBackOutline} />
                        <h3 className='custom-text'>PDD</h3>
                    </IonToolbar>
                </IonHeader>
                <IonContent >
                    <IonList>     
                         <MenuItem iconItem={homeOutline} iconItemFill={home} content='Halaman Utama' route='/admin' />
                         <MenuItem iconItem={bookOutline} iconItemFill={book} content='Publikasi' route='publikasiadmin' />
                         <MenuItem iconItem={manOutline} iconItemFill={man} content='Dosen' route='daftardosen' />
                         <MenuItem iconItem={schoolOutline} iconItemFill={school} content='Mahasiswa' route='daftarmahasiswa' />
                         <MenuItem iconItem={peopleOutline} iconItemFill={people} content='Guest' route='daftarguest' />
                         <MenuItem iconItem={mailOutline} iconItemFill={mail} content='Pemberitahuan' route='infopemberitahuan' />
                       
                          
                         <Buttons
                         className="Logout"
                         buttonName="log out" 
                         maxWidth="250px"
                         fillType= "solid" 
                         shape= "round" 
                         path= "formMember"
                         />
                    </IonList>
                </IonContent>
            </IonMenu >
        </>
    );
};

export default MenuSlideAdmin;



