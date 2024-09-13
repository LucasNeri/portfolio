import { Label } from "./ui/label";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center justify-center h-14">
      <Label>Copyright © {year} Lucas Neri </Label>
    </div>
  );
}
