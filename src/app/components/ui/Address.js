import AddressTitle from "./AddressTitle";
import AddressText from "./AddressText";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Socials from "./Socials";

export default function Address({ address, phone, email, socials }) {
  const { t } = useTranslation("common");
  return (
    <div
      className="py-5 
      md:pt-[48px] md:flex md:pb-15
     justify-center xl:pt-9 xl:justify-between"
    >
      <div className="md:max-w-[282px] md:mr-auto
      xl:w-[32%] xl:max-w-none xl:m-0">
        <AddressTitle title={t`contacts.address`} />
        <AddressText text={address} />
      </div>
      <div
        className="pb-[19px]
        md:mr-6 md:pb-0
        xl:w-[32%] xl:m-0 xl:pl-[17%]"
      >
        <AddressTitle title={t`contacts.numbers`} />
        <div
          className="w-2/4 tracking-tight pb-5
        md:w-auto md:text-1xl md:pb-0"
        >
          <Link className="underline" href={`tel:${phone}`}>
            {phone}
          </Link>
          <br />
          <Link href={`mailto:${email}`}>{email}</Link>
        </div>
      </div>
      <div
        className="md:ml-auto md:self-end
      xl:w-[32%] xl:m-0"
      >
        <Socials variant="white" links={socials} />
      </div>
    </div>
  );
}
