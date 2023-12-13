import React from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './PageTamu.css';
import ToolbarTamu from '../../components/toolbar/toolbarGuest';
import MenuSlideGuest from '../../components/menu-Slide/menuSlideGuest';
import SearchBar from '../../components/searchBar/searchBar';

const guest: React.FC = () => {
  return (
    <>
      <MenuSlideGuest></MenuSlideGuest>
      <IonPage id='main-content'>
        <IonHeader>
          <ToolbarTamu pageName='Tamu' imageLink='https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg' />
        </IonHeader>
        <IonContent fullscreen>
          <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ margin: '0px', width: '400px', marginTop: '120px' }} alt="LogoPublikasi" src="LogoPublikasi.jpg" />
            <SearchBar />
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default guest;

