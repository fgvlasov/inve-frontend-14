'use client';

import classNames from 'classnames';
import { useRef, useState } from 'react';

function AccordionItemText({ text, show }) {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className={classNames('duration-300 overflow-hidden bg-white')}
      style={{
        maxHeight: show ? ref.current.scrollHeight : 0,
      }}
    >
      <p className="whitespace-pre-wrap m-4 px-3">
        {text}
      </p>
    </div>
  );
}

export default function Accordion({ items }) {
  const [openedItem, setOpenedItem] = useState(-1);

  const handleToggleItem = (itemIndex) => {
    if (itemIndex === openedItem) {
      setOpenedItem(-1);
    } else {
      setOpenedItem(itemIndex);
    }
  };

  return (
    //overflow-hidden
    <ul className="rounded-2xl border-none overflow-hidden">
      {items.map(
        (item, itemIndex) =>
          item.title != null && (
            <li className="block border-none" key={itemIndex}>
              <div className="bg-white flex px-7 py-[27px] justify-between border-b-1 border-light-grey">
                <h3 className="font-arial text-xl leading-7 font-normal text-[#222930]">
                  {item.title}
                </h3>
                <img
                  src={
                    itemIndex === openedItem
                      ? '/image/minus.svg'
                      : '/image/plus.svg'
                  }
                  alt="click"
                  className="cursor-pointer"
                  onClick={() => handleToggleItem(itemIndex)}
                />
              </div>
              <AccordionItemText
                text={item.text}
                show={itemIndex === openedItem}
              />
            </li>
          )
      )}
    </ul>
  );
}
