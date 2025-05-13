export const openModal = (modalId: string): void => {
  document.querySelector<HTMLDialogElement>(`#${modalId}`)?.showModal();
};
