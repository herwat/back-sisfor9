import React from 'react';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, IonIcon } from '@ionic/react';
import { starOutline, star } from 'ionicons/icons';

interface Item {
  id: number;
  label: string;
  isFavorite: boolean;
}

interface ItemListProps {
  items: Item[];
  handleReorder: (event: CustomEvent) => void;
  handleFavoriteToggle: (itemId: number) => void;
}

const ItemList: React.FC<ItemListProps> = (props) => {
  return (
    <IonList>
      <IonReorderGroup disabled={false} onIonItemReorder={props.handleReorder}>
        {props.items.map((item) => (
          <IonItem key={item.id}>
            <IonLabel>
              {item.isFavorite ? (
                <IonIcon icon={star} color="warning" onClick={() => props.handleFavoriteToggle(item.id)} />
              ) : (
                <IonIcon icon={starOutline} onClick={() => props.handleFavoriteToggle(item.id)} />
              )}
              {item.label}
            </IonLabel>
            <IonReorder slot="end">
              
            </IonReorder>
          </IonItem>
        ))}
      </IonReorderGroup>
    </IonList>
  );
};

export default ItemList;
