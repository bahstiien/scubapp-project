import React, { ReactNode } from 'react';
import { SafeUser } from '../../types';

interface AdminLayoutProps {
    currentUser?: SafeUser | null
    children: ReactNode;
  }
  

export default function AdminLayout({ currentUser, children }: AdminLayoutProps) {
    return (
      <div>
            {currentUser && currentUser.role === 'USER' ? (       
       <div>
            <h1>Bienvenue sur le site</h1>
            {children}
          </div>
        ) : (
          <div>
            <h1>Bienvenue sur le site</h1>
            <p>Veuillez vous connecter pour accéder au contenu.</p>
          </div>
        )}
      </div>
    );
  }