// Hook for modal management with URL hash support

import { useState, useEffect, useCallback } from 'react';

export type ModalType = 'decal' | 'collection' | 'contact';

interface ModalState {
  type: ModalType | null;
  data?: any;
}

export function useModal() {
  const [modalState, setModalState] = useState<ModalState>({ type: null });

  // Parse hash on mount and hash change
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.slice(1); // Remove #
      
      if (hash.startsWith('decal/')) {
        const decalId = hash.replace('decal/', '');
        setModalState({ type: 'decal', data: decalId });
      } else if (hash === 'collection') {
        setModalState({ type: 'collection' });
      } else if (hash === 'contact') {
        setModalState({ type: 'contact' });
      } else {
        setModalState({ type: null });
      }
    };

    parseHash();

    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const openModal = useCallback((type: ModalType, data?: any) => {
    if (type === 'decal' && data) {
      window.location.hash = `decal/${data}`;
    } else {
      window.location.hash = type;
    }
  }, []);

  const closeModal = useCallback(() => {
    // Remove hash without triggering scroll
    if (window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } else {
      window.location.hash = '';
    }
    setModalState({ type: null });
  }, []);

  return {
    modalType: modalState.type,
    modalData: modalState.data,
    openModal,
    closeModal,
    isOpen: modalState.type !== null,
  };
}

