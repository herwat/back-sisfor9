import { IonButton, IonContent, IonHeader, IonIcon, IonList, IonMenu, IonMenuToggle, IonTitle } from '@ionic/react';
import "./menuSlideGuest.css"
import { bookOutline, chevronBackOutline, homeOutline, home, book } from "ionicons/icons"
import MenuItem from './menu-Item/menuItem';
import Buttons from '../button/buttons';

function MenuSlideGuest() {

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
                        <MenuItem iconItem={homeOutline} iconItemFill={home} content='Halaman Utama' route='halamantamu' />
                        <MenuItem iconItem={bookOutline} iconItemFill={book} content='Perpustakaan' route='Perpustakaan' />
                        
                    </IonList>
                    <div className="Login">
                    <Buttons style={{width:"168%"}}
                         buttonName="login Member" 
                         fillType= "solid" 
                         shape= "round" 
                         path= "formMember"
                         />
                    </div>
                </IonContent>
            </IonMenu >
        </>
    );
};

export default MenuSlideGuest;




