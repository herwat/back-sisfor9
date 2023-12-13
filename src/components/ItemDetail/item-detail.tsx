import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonLabel, IonTitle } from "@ionic/react";

interface ItemDetailProps {
    judul: string;
    author: string;
    abstrak: string;
    kataKunci?: string;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ judul, author, abstrak, kataKunci }) => {
    return (
        <>
            <IonCard>
                <IonCardTitle>{judul}</IonCardTitle>
                <IonCardContent>{author}</IonCardContent>
                <IonCardSubtitle>Abstrak</IonCardSubtitle>
                <IonCardContent> {abstrak} </IonCardContent>
                <IonCardSubtitle>Kata Kunci</IonCardSubtitle>
                <IonCardContent> {kataKunci} </IonCardContent>
            </IonCard>
        </>
    );
}

export default ItemDetail;