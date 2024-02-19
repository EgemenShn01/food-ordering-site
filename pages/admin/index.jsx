import Input from '@/components/form/input';
import Title from '@/components/ui/Titles';
import { Formik,useFormik } from 'formik';
import Link from 'next/link';

const AdminLogin = () => {
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
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name  ",
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
        <Title addClass={"text-[56px] mb-12"}>Admin Login</Title>
        <div className="flex flex-col gap-5 lg:w-[524px] md:w-[250]"  >
          {inputs.map((input) =>(
              <Input key={input.id} {...input} onChange={handleChange}/>  ,
          <Input key={input.id} {...input} onChange={handleChange}/>  
          ))}
          <span>
          <Link href="/home" className="hover:text-primary underline transition-all">Home Page</Link>

          </span>
          <button className="btn-primary font-semibold hover:font-extrabold active:text-black mb-11 ">LOGIN</button>
        </div>
      
      </form>
    </div>
  )
}
export default AdminLogin