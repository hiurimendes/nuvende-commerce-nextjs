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

  const onSubmit = (data: CheckoutFormData) => {
    // Aqui você implementaria a lógica para processar o pedido
    // Por exemplo: enviar para uma API, processar pagamento, etc.
    // Dados do formulário estão disponíveis em 'data'

    // Exemplo de como os dados seriam processados:
    // await processOrder(data);
    // await sendToAPI(data);

    // Por enquanto, apenas validamos que os dados estão corretos
    const isValidData =
      data.fullName && data.phone && data.city && data.address;
    if (isValidData) {
      // Redirecionar para página de sucesso ou processar pagamento
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-emerald-900">
      <NuvendeLogo color="white" props={{ className: "size-24" }} />

      <div className="mb-6 w-full max-w-[320px] border-white/10 border-b pb-4">
        <h2 className="font-semibold text-2xl text-white">Entrega</h2>
      </div>

      <form
        className="flex w-full max-w-[320px] flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid w-full gap-2">
          <Label className="text-muted">Nome completo</Label>
          <Input
            {...register("fullName")}
            className={`bg-emerald-950 text-white placeholder:text-muted/60 ${
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
          <Label className="text-muted">Número de telefone</Label>
          <Input
            {...register("phone")}
            className={`bg-emerald-950 text-white placeholder:text-muted/60 ${
              errors.phone ? "border-red-500" : ""
            }`}
            placeholder="Digite seu número de telefone"
            type="tel"
          />
          {errors.phone && (
            <span className="text-red-400 text-xs">{errors.phone.message}</span>
          )}
        </div>

        <div className="grid w-full max-w-[320px] gap-2">
          <Label className="text-muted">Cidade</Label>
          <Input
            {...register("city")}
            className={`bg-emerald-950 text-white placeholder:text-muted/60 ${
              errors.city ? "border-red-500" : ""
            }`}
            placeholder="Digite sua cidade"
          />
          {errors.city && (
            <span className="text-red-400 text-xs">{errors.city.message}</span>
          )}
        </div>

        <div className="grid w-full max-w-[320px] gap-2">
          <Label className="text-muted">Endereço</Label>
          <Input
            {...register("address")}
            className={`bg-emerald-950 text-white placeholder:text-muted/60 ${
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

        <div className="mt-4 flex w-full max-w-[320px] items-center justify-center border-white/10 border-t pt-4">
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
