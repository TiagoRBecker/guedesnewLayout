import Signup from "@/components/Forms/signup";

const SignupPage = () => {
  return (
    <section className="w-full h-screen  grid grid-cols-2">
      <div className="w-[70%] mx-auto h-full flex items-center justify-center ">
        <Signup />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img src="/Assets/Logo/logo.svg" alt="Logo" className="w-full h-[150px]" />
      </div>
    </section>
  );
};

export default SignupPage;
