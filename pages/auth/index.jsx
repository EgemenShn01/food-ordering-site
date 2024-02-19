import Input from '@/components/form/input';
import Title from '@/components/ui/Titles';
import { Formik,useFormik } from 'formik';
import Link from 'next/link';

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
  
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
    }
  ];
  return (
    <div className="container mx-auto ">
      <form className="flex items-center flex-col my-16  border shadow-2xl rounded-md lg:w-[800px]
       lg:ml-40 md:w-[350px] sm:w-[300px] sm:ml-20 " onSubmit={handleSubmit} >
        <Title addClass={"text-[56px] mb-12"}>Login</Title>
        <div className="flex flex-col gap-5 lg:w-[524px] md:w-[250]"  >
          {inputs.map((input) =>(
              <Input key={input.id} {...input} onChange={handleChange}/>  ,
          <Input key={input.id} {...input} onChange={handleChange}/>  
          ))}
          <span>
          <Link href="/auth/register" className="hover:text-primary underline transition-all">I do not have an account</Link>

          </span>
          <button className="btn-primary font-semibold hover:font-extrabold active:text-black ">LOGIN</button>
        </div>
        <div className="flex mt-10 text-[60px] gap-x-5">
               <Link className="hover:text-primary" href="https://accounts.google.com/v3/signin/identifier
               ?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Daccount
               -marketing-page%26utm_medium%3Dgo-to-account-button%26pli%3D1&ec=GAlAwAE&hl=tr&service=accountsetting
               s&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S185191353%3A1692859758302310"><i class="fa-brands fa-google"></i></Link>
               <Link className="hover:text-primary" href="https://twitter.com/i/flow/login"><i class="fa-brands fa-twitter"></i></Link>
               <Link className="hover:text-primary" href="https://tr-tr.facebook.com/login/device-based/regular/login/?login_attempt=1"><i class="fa-brands fa-facebook"></i></Link>
        </div>
      </form>
    </div>
  )
}
export default Login