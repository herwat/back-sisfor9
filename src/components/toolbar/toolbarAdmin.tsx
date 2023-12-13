import React, { useState } from 'react';
import './toolbarGuest.css';
import { IonAvatar, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon, IonMenuButton, IonPopover, IonTitle, IonToolbar } from '@ionic/react';
import { close } from 'ionicons/icons';

interface ToolbarAdminProps {
    pageName: string;
    imageLink?: string;
}

interface PopoverProps {
    handleClick: () => void;
    image?: string;
}

const Popover: React.FC<PopoverProps> = ({ handleClick, image }) => {
    return (
        <>
            <div id='popover-overlay' onClick={handleClick}></div>
            <div id='popover-container'>
                <IonCard id='popover-card'>
                    <div onClick={handleClick} style={{ position: 'absolute', right: '4px', top: '4px' }}>
                        <IonIcon className='popover-icons' icon={close}></IonIcon>
                    </div>
                    <div id='popover-data-container' >
                        <img alt="Silhouette of mountains" src={image} style={{ borderRadius: '50%', height: 'auto', width: '65%' }} />
                        <IonCardHeader>
                            <IonCardTitle className='popover-text-style'>Card Title</IonCardTitle>
                            <IonCardSubtitle className='popover-text-style'>Card Subtitle</IonCardSubtitle>
                        </IonCardHeader>
                        <IonButton className='popover-button-edit'>Edit</IonButton>
                        <IonButton className='popover-button-keluar'>Keluar</IonButton>
                    </div>
                </IonCard>
            </div >
        </>
    )
}

const ToolbarAdmin: React.FC<ToolbarAdminProps> = (props) => {
    const [isOpen, setISOpen] = useState(false);

    const handleClick = () => {
        setISOpen(!isOpen);
    }

    return (
        <IonHeader>
            <IonToolbar id='toolbar-properties'>
                <IonButtons slot='start'>
                    <IonMenuButton id='menu-button-toolbar'></IonMenuButton>
                </IonButtons>
                <IonTitle id='toolbar-title' slot='start'>{props.pageName}</IonTitle>
                <IonAvatar id='toolbar-avatar' slot='end'>
                    <img onClick={handleClick} style={{ marginTop: '3px' }} src={props.imageLink} alt="Profile Picture" />
                </IonAvatar>
            </IonToolbar>
            {isOpen && <Popover handleClick={handleClick} image={props.imageLink} />}
        </IonHeader>
    );
};

export default ToolbarAdmin;
