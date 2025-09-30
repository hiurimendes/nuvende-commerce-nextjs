import { signIn } from "@/auth";
import GoogleIcon from "../icons/google";
import { Button } from "../ui/button";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button
        className="cursor-pointer bg-emerald-950 hover:bg-emerald-900"
        type="submit"
      >
        <GoogleIcon className="mr-1 size-4" />
        Entrar
      </Button>
    </form>
  );
}
