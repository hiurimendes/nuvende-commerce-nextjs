import { signIn } from "@/auth";
import { cn } from "@/lib/utils";
import GoogleIcon from "../icons/google";
import { Button } from "../ui/button";

type SignInProps = {
  isFullWidth?: boolean;
  className?: string;
};

export default function SignIn({ isFullWidth, className }: SignInProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
      className={cn(className)}
    >
      <Button
        className={cn("cursor-pointer hover:bg-emerald-950 hover:text-white", {
          "w-full": isFullWidth,
        })}
        type="submit"
        variant="outline"
      >
        <GoogleIcon className="mr-1 size-4" />
        Entrar
      </Button>
    </form>
  );
}
