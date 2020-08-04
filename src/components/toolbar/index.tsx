import React from 'react';
import { IonToolbar, IonTitle } from '@ionic/react';
import { SearchBox } from '../searchBox';

export const Toolbar: React.FC = () => {
  return (
    <IonToolbar>
      <IonTitle>The Toolbar</IonTitle>
      <SearchBox />
    </IonToolbar>
  );
};
