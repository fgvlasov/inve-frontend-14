import Logo from './ui/Logo';
import Burger from './ui/Burger';
import MobileMenu from './ui/MobileMenu';
import { useState } from 'react';
import Nav from './ui/Nav';
import Order from './ui/Order';
import useTranslation from 'next-translate/useTranslation';
import Line from './ui/Line';

export default function Header({ variant, variantSvg, menu, contactData }) {
  const i18n = useTranslation();
  const locale = i18n.lang;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const onCloseNav = () => {
    setIsNavOpen(false);
  };
  const onOpenNav = () => {
    setIsNavOpen(true);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const colorLine = variant === 'black' ? 'eclipse' : 'grey';
  const headerClass =
    variant === 'black'
      ? 'bg-black text-white'
      : 'bg-whisper text-black-russian';

  return (
    <header className={`${headerClass} relative text-inherit`}>
      <div
        className="container contPadding  flex justify-between items-center  
      pt-5 flex-wrap pb-5 md:py-[17px]
      lg:pb-10 lg:pt-[38px] lg:flex-nowrap"
      >
        {' '}
        <Logo color="inherit" />
        {/* <Language lang={locale} /> */}
        <Burger onClick={onOpenNav} color={variant} />
        {isNavOpen && (
          <MobileMenu
            isOpen={isNavOpen}
            menu={menu}
            onClose={onCloseNav}
            handleOpenModal={handleOpenModal}
          />
        )}
        <Nav menu={menu} />
        <Order
          variantSvg={variantSvg}
          modalIsOpen={modalIsOpen}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          data={contactData}
        />
      </div>
      <div className="container">
        <Line variantColor={colorLine} />
      </div>
    </header>
  );
}
