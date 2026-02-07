import Wrapper from "@/components/ui/Wrapper";
import IntroError from "@/components/ui/IntroError";

export default async function NotFound() {
  return (
    <Wrapper color='black' position='bottom'>
      <IntroError />
    </Wrapper>
  );
}
