import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';
import './homeButton.scss';

export const HomeButton: React.FC = () => (
  <button>
    <IonIcon slot='icon-only' icon={home} className="home-button"/>
  </button>
);
