import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-4 py-8">
      <Separator />

      <div className="flex w-full items-center justify-between">
        <h3 className="text-muted-foreground text-xs">&copy; Nuvende shop</h3>
      </div>
    </footer>
  );
}
