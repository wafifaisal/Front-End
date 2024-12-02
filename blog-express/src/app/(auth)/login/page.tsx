import LoginForm from "@/components/login";
import Wrapper from "@/components/wrapper";

export default function LoginPage() {
  return (
    <Wrapper>
      <div className="w-full flex justify-center items-center min-h-screen">
        <LoginForm />
      </div>
    </Wrapper>
  );
}
