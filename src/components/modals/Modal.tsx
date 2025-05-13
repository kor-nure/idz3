export interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ id, title, children, className }: ModalProps) {
  return (
    <dialog id={id} className={`modal ${className}`}>
      <div className="modal-box max-h-[600px] max-w-[800px]">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-base">
            ✕
          </button>
        </form>

        <h3 className="font-bold text-lg mb-4">{title}</h3>

        {children}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
