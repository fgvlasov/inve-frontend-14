import React, { createContext, useContext, useMemo, useState } from "react";
import { Toast } from "../Brief/Email/Toast";
import { GlobalContext } from "pages/_app";
export const ToastrContext = createContext({});

export const ToastrProvider = ({ children }) => {
  const {
    Confirmation_Form_Brief,
    Confirmation_Form_Phone,
    Confirmation_Form_Zayavka,
  } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(Confirmation_Form_Brief);
  const value = useMemo(
    () => ({
      open,
      setOpen,
      setMessage,
      setSuccess,
      Confirmation_Form_Brief,
      Confirmation_Form_Phone,
      Confirmation_Form_Zayavka,
    }),
    [
      open,
      Confirmation_Form_Brief,
      Confirmation_Form_Phone,
      Confirmation_Form_Zayavka,
    ]
  );

  return (
    <ToastrContext.Provider value={value}>
      {open && (
        <Toast
          success={success}
          close={() => {
            setOpen(false);
          }}
          message={message}
        />
      )}
      <>{children}</>
    </ToastrContext.Provider>
  );
};
