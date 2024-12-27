const ConfirmationModal = ({
  heading,
  subHeading,
  handleConfirm,
  handleCancel,
}) => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{heading}</h3>
          <p className="py-4">{subHeading}</p>
          <div className="flex items-center gap-4 justify-end">
            <button className="btn" onClick={handleCancel}>
              No
            </button>
            <button className="btn" onClick={handleConfirm}>
              Yes
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ConfirmationModal;
