import { IonButton, IonContent, IonHeader, IonIcon, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonTitle } from '@ionic/react';
import "./menuSlide.css"
import { documentsOutline, libraryOutline, trashOutline, bookmarkOutline, starOutline, bookOutline, mail, mailOutline, chevronBackOutline, personCircleOutline, homeOutline, home, book, timer, bookmark, star, documents, trash, library, flash } from "ionicons/icons"
import MenuItem from './menu-Item/menuItem';
import { useState } from 'react';

function MenuSlide() {
    const [isLogin, setIsLogin] = useState(true)

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
                        <MenuItem iconItem={homeOutline} iconItemFill={home} content='Halaman Utama' route='home' />
                        {isLogin && <MenuItem iconItem={starOutline} iconItemFill={star} content='Favorit' route='favorit' />}
                        <MenuItem iconItem={bookOutline} iconItemFill={book} content='Perpustakaan' route='PerpustakaanSaya' />
                        {isLogin && <MenuItem iconItem={bookmarkOutline} iconItemFill={bookmark} content='Baru Saja Dibaca' route='baruSajaDibaca' />}
                        {isLogin && <MenuItem iconItem={documentsOutline} iconItemFill={documents} content='Publikasi Saya' route='publikasiSaya' />}
                        {isLogin && <MenuItem iconItem={libraryOutline} iconItemFill={library} content='Baca Nanti' route='bacananti' />}
                        {isLogin && <MenuItem iconItem={mailOutline} iconItemFill={mail} content='Pemberitahuan' route='pemberitahuan' />}
                        {isLogin && <MenuItem iconItem={trashOutline} iconItemFill={trash} content='Sampah' route='sampah' />}
                    </IonList>
                </IonContent>
            </IonMenu >
        </>
    );
};

export default MenuSlide;
