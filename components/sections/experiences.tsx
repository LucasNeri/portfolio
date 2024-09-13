import { useTranslations } from "next-intl";
import Experience from "../experience";
import { Label } from "../ui/label";

export default function Experiences() {
  const t = useTranslations("Experiences");
  return (
    <div
      id="experiences"
      className="flex flex-col gap-4 pt-16 lg:gap-14 "
    >
      <Label className="text-xl font-bold lg:text-4xl">{t("title")}</Label>
      <div className="flex flex-col gap-8">
        <Experience
          title={t("experiences.globo.title")}
          description={t("experiences.globo.description")}
          stack={[
            "Javascript",
            "Typescript",
            "Golang",
            "React",
            "Vue",
            "React Native",
            "Next",
            "Vite",
            "Expo",
            "HTML",
            "CSS",
            "Gitlab",
            "Node.js",
          ]}
        />
        <Experience
          title={t("experiences.estrela.title")}
          description={t("experiences.estrela.description")}
          stack={[
            "Javascript",
            "Typescript",
            "Golang",
            "React",
            "Vue",
            "React Native",
            "Next",
            "Vite",
            "HTML",
            "CSS",
            "Docker",
            "MySQL",
            "MongoDB",
            "Node.js",
          ]}
        />
        <Experience
          title={t("experiences.sx.title")}
          description={t("experiences.sx.description")}
          stack={[
            "Javascript",
            "Typescript",
            "Golang",
            "React",
            "Vue",
            "React Native",
            "Next",
            "Vite",
            "Docker",
            "MySQL",
            "MongoDB",
            "Node.js",
          ]}
        />
        <Experience
          title={t("experiences.upflow.title")}
          description={t("experiences.upflow.description")}
          stack={["Javascript", "Typescript", "React", "React Native", "Next", "Node.js"]}
        />
        <Experience
          title={t("experiences.sagendra.title")}
          description={t("experiences.sagendra.description")}
          stack={[
            "Javascript",
            "Typescript",
            "HTML",
            "CSS",
            "React",
            "React Native",
            "MySQL",
            "MongoDB",
          ]}
        />
      </div>
    </div>
  );
}
