import unaLogo from "@/public/education/logo-una.svg";
import ufmgLogo from "@/public/education/logo-ufmg.jpeg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export default function Education() {
  const t = useTranslations("Education");
  return (
    <div id="education" className="flex flex-col gap-4 pt-16 lg:gap-14 ">
      <Label className="text-xl font-bold lg:text-4xl">{t("title")}</Label>
      <Card className="p-4">
        <div className="flex gap-4">
          <div className="flex min-w-1/12">
            <Image src={ufmgLogo} alt="alt"
              width={90}
              style={{ objectFit: "contain" }}
            />
          </div>
          <CardHeader className="px-0 ">
            <CardTitle className="lg:text-2xl">
              {t("educations.ufmg.degree")}
            </CardTitle>
            <CardDescription>
              <p className="lg:text-lg">Universidade Federal de Minas Gerais</p>
              <p className="lg:text-lg">{t("educations.ufmg.country")}</p>
              <p className="lg:text-lg">2019-2023</p>
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
      <Card className="p-4">
        <div className="flex gap-4">
          <div className="flex min-w-1/12">
            <Image src={unaLogo} alt="alt" />
          </div>
          <CardHeader className="px-0 ">
            <CardTitle className="lg:text-2xl">
              {t("educations.una.degree")}
            </CardTitle>
            <CardDescription>
              <p className="lg:text-lg">UNA</p>
              <p className="lg:text-lg">{t("educations.una.country")}</p>
              <p className="lg:text-lg">2019-2023</p>
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
    </div>
  );
}
