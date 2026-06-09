'use client';

import { Button } from "@/ui/components/Button";
import { Input } from "@/ui/components/Input";

export default function Home() {
  const loginEvent = () => {

  }

  return (
    <div className="grid grid-cols-[40%_1fr] h-screen">
      <section className="flex flex-col justify-center items-center h-full bg-black px-10">
        <div className="text-center mb-3.5">
          <h1 className="font-black text-5xl text-center text-white">Domina tu dinero</h1>
        </div>
        <div className="text-center">
          <span className="text-sm text-white">La herramienta definitiva para rastrear tus finanzas y alcanzar la libertad financiera, todo en un solo lugar.</span>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-8">
        <div className="mb-20 text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm">Ingresa para ver tu progreso</p>
        </div>
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <Input labelName="Email" type="email" placeholder="Email" />
          <Input labelName="Password" type="password" placeholder="Password" />
          <div>
            <Button onClick={loginEvent} type="submit">
              Login
            </Button>
          </div>
        </form>
        <div>
          <span>Or continue with</span>
        </div>
        <div>
          
        </div>
      </section>
    </div>
  );
}
