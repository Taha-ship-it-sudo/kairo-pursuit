import Image from "next/image";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "default", className = "", priority = false }: LogoProps) {
  const src =
    variant === "light" ? "/brand/kairo-logo-light.png" : "/brand/kairo-logo.png";

  return (
    <Image
      src={src}
      alt="Kairo"
      width={140}
      height={40}
      priority={priority}
      className={`h-8 w-auto sm:h-9 ${className}`}
    />
  );
}
