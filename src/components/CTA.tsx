

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from '@mui/material/TextField';
import { ErrorMessage } from "./ErrorMessage";
import { BiSolidSend } from "react-icons/bi";
import { useState } from "react";
import { PersonFormContact } from "../Icons/PersonFormContact";
import api from "../lib/api";

interface FormData {
  name: string;
  email: string;
  phone: string;
  qtdEmployees: number;
  observation?: string;
}

const schema = z.object({
  name: z.string().min(1, "Nome da empresa é obrigatório"),
  email: z
    .string()
    .email("Por favor, insira um email válido")
    .min(1, "Email de contato é obrigatório"),
  phone: z
    .string()
    .min(1, "Telefone corporativo é obrigatório")
    .regex(/^\d{10,11}$/, "Por favor, insira um telefone com 10 ou 11 dígitos"),
  qtdEmployees: z
    .coerce
    .number()
    .min(1, "A quantidade de funcionários deve ser maior que 0")
    .int("A quantidade de funcionários deve ser um número inteiro"),
  observation: z.string().optional(),
});

export default function CTA() {

  const [finishForm, setFinishForm] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      qtdEmployees: 0,
      observation: "",
    }
  });

  const onSubmit = () => {

    api.post("/company", watch())
      .then((response: any) => {
        console.log(response);
        setFinishForm(true);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };


  return (
    <section className="bg-teal-600 text-white py-20" id="contact-form">


      {/* Nome da Empresa */}
      {!finishForm ? (
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-pulse">Pronto para revolucionar seu controle de ponto?</h2>
          <p className="text-xl mb-8">Nos conte mais sobre a sua empresa com o formulario abaixo</p>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
            {/* Nome da Empresa */}
            <div>
              <TextField
                fullWidth
                id="filled-search"
                label="Nome da Empresa"
                type="Nome da Empresa"
                color="success"
                variant="filled"
                {...register("name", { required: "Nome da empresa é obrigatório" })}
              />

              {errors.name && <ErrorMessage message={errors.name.message} />}
            </div>

            {/* Email */}
            <div>
              <TextField
                fullWidth
                id="filled-search"
                label="Email de Contato"
                type="Nome da Empresa"
                color="success"
                variant="filled"
                {...register("email", { required: "Email é obrigatório", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email inválido" } })}
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>

            {/* Telefone */}
            <div>
              <TextField
                fullWidth
                id="filled-search"
                label="Telefone de Contato"
                type="Telefone Corporativo"
                color="success"
                variant="filled"
                {...register("phone", { required: "Telefone é obrigatório" })}
              />

              {errors.phone && <ErrorMessage message={errors.phone.message} />}
            </div>

            {/* Quantidade de Funcionários */}
            <div>
              <label className="block text-sm font-medium text-gray-700"></label>
              <TextField
                fullWidth
                id="filled-search"
                label="Quantidade de Funcionários"
                type="number"
                color="success"
                variant="filled"
                {...register("qtdEmployees", { required: "A quantidade de funcionários é obrigatória", pattern: { value: /^[0-9]+$/, message: "A quantidade de funcionários deve ser um número" } })}
              />

              {errors.qtdEmployees && <ErrorMessage message={errors.qtdEmployees.message} />}
            </div>

            {/* Mais Informações */}
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Caso deseje contar mais sobre o controle de ponto da sua empresa hoje, fique a vontade."
                multiline
                {...register("observation")}
                rows={4}
                color="success"
                fullWidth
              />
            </div>

            {/* Botão de envio */}
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleSubmit(onSubmit)}
                variant="outline"
                className="text-2xl flex justify-center items-center gap-2 text-gray-600 hover:text-white bg-teal-300 hover:bg-teal-600 transform transition-all duration-300 ease-in-out hover:scale-x-95 w-full"
              >
                Enviar <BiSolidSend className="" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="max-w-xl mx-auto p-6 text-teal-white bg-teal-300 bg-opacity-50 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Obrigado por entrar em contato!</h2>
          <PersonFormContact />
          <p className="text-xl mb-8 text-center">Ficamos imensamente feliz em ter despertado o seu interesse com nosso sistema, em breve nossa equipe entrara em contato para entender mais o seu empreedimento.</p>
        </div>
      )}
    </section>
  )
}

