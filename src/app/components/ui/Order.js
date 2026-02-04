import PillowLink from './PillowLink';
import Modal from './Modal';
import { FormOrder } from '../Forms/FormOrder';

export default function Order({
  variantSvg,
  modalIsOpen,
  handleCloseModal,
  handleOpenModal,
  data,
}) {
  return (
    <div className="hidden md:flex items-center min-w-fit">
      <a
        href={`tel:${data.PhoneLink}`}
        className="p-2.5 mr-9 tracking-tight  hover:text-suva-grey
        lg:mr-13"
      >
        {data.Phone}
      </a>
      <div onClick={handleOpenModal}>
        <PillowLink
          text="Отправить заявку"
          variant="white"
          variantSvg={variantSvg}
          linkPosition="header"
        />
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <FormOrder onSubmitForm={handleCloseModal} />
      </Modal>
    </div>
  );
}
