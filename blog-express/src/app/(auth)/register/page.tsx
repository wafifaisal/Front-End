import FormRegister from "@/components/register";
import Wrapper from "@/components/wrapper";

export default function RegisterPage() {
  return (
    <Wrapper>
      <div className="w-full flex justify-center items-center min-h-screen">
        <FormRegister />
      </div>
    </Wrapper>
  );
}
