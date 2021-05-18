import React from 'react';
import { RouterPage } from './pages/RouterPage';
import { UiProvider } from './context/UiContext';
import { SocketProvider } from './context/SocketContext';

export const TicketApp = () => {
    return (
        <SocketProvider>
            <UiProvider>
                <RouterPage />
            </UiProvider>
        </SocketProvider>
    )
}
