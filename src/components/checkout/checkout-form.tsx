/** biome-ignore-all lint/style/useNamingConvention: Variables */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NuvendeLogo } from "@/components/icons/app-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Constantes para validação
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;
const MIN_PHONE_LENGTH = 10;
const MAX_PHONE_LENGTH = 15;
const MIN_CITY_LENGTH = 2;
const MAX_CITY_LENGTH = 100;
const MIN_ADDRESS_LENGTH = 5;
const MAX_ADDRESS_LENGTH = 200;

// Schema de validação com zod
const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(MIN_NAME_LENGTH, "Nome deve ter pelo menos 2 caracteres")
    .max(MAX_NAME_LENGTH, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),

  phone: z
    .string()
    .min(MIN_PHONE_LENGTH, "Telefone deve ter pelo menos 10 dígitos")
    .max(MAX_PHONE_LENGTH, "Telefone deve ter no máximo 15 dígitos")
    .regex(/^[\d\s()+-]+$/, "Formato de telefone inválido"),

  city: z
    .string()
    .min(MIN_CITY_LENGTH, "Cidade deve ter pelo menos 2 caracteres")
    .max(MAX_CITY_LENGTH, "Cidade deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Cidade deve conter apenas letras e espaços"),

  address: z
    .string()
    .min(MIN_ADDRESS_LENGTH, "Endereço deve ter pelo menos 5 caracteres")
    .max(MAX_ADDRESS_LENGTH, "Endereço deve ter no máximo 200 caracteres"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

type CheckoutFormProps = {
  defaultName?: string;
};

export function CheckoutForm({ defaultName }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    mode: "onBlur", // Valida quando o campo perde o foco
    defaultValues: {
      fullName: defaultName || "",
    },
  });

  const onSubmit = async (_: CheckoutFormData) => {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center py-8 md:bg-emerald-900 md:px-0 md:py-0">
      <NuvendeLogo
        color="white"
        props={{ className: "hidden md:flex size-16 md:size-24" }}
      />

      <div className="mb-4 w-full border-b pb-3 md:mb-6 md:max-w-[320px] md:border-white/10 md:pb-4">
        <h2 className="font-semibold text-xl md:text-2xl md:text-white">
          Entrega
        </h2>
      </div>

      <form
        className="flex w-full flex-col gap-3 md:max-w-[320px] md:gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid w-full gap-2">
          <Label className="md:text-muted">Nome completo</Label>
          <Input
            {...register("fullName")}
            className={`md:bg-emerald-950 md:text-white md:placeholder:text-muted/60 ${
              errors.fullName ? "border-red-500" : ""
            }`}
            placeholder="Digite seu nome completo"
          />
          {errors.fullName && (
            <span className="text-red-400 text-xs">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className="grid w-full gap-2">
          <Label className="md:text-muted">Número de telefone</Label>
          <Input
            {...register("phone")}
            className={`md:bg-emerald-950 md:text-white md:placeholder:text-muted/60 ${
              errors.phone ? "border-red-500" : ""
            }`}
            placeholder="Digite seu número de telefone"
            type="tel"
          />
          {errors.phone && (
            <span className="text-red-400 text-xs">{errors.phone.message}</span>
          )}
        </div>

        <div className="grid w-full gap-2">
          <Label className="md:text-muted">Cidade</Label>
          <Input
            {...register("city")}
            className={`md:bg-emerald-950 md:text-white md:placeholder:text-muted/60 ${
              errors.city ? "border-red-500" : ""
            }`}
            placeholder="Digite sua cidade"
          />
          {errors.city && (
            <span className="text-red-400 text-xs">{errors.city.message}</span>
          )}
        </div>

        <div className="grid w-full gap-2">
          <Label className="md:text-muted">Endereço</Label>
          <Input
            {...register("address")}
            className={`md:bg-emerald-950 md:text-white md:placeholder:text-muted/60 ${
              errors.address ? "border-red-500" : ""
            }`}
            placeholder="Digite seu endereço"
          />
          {errors.address && (
            <span className="text-red-400 text-xs">
              {errors.address.message}
            </span>
          )}
        </div>

        <div className="mt-4 flex w-full items-center justify-center border-white/10 border-t pt-4">
          <Button
            className="w-full cursor-pointer bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Processando..." : "Finalizar compra"}
          </Button>
        </div>
      </form>
    </div>
  );
}
