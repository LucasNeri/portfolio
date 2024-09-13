import { useTranslations } from "next-intl";
import Project from "../project";
import { Label } from "../ui/label";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <div
      id="projects"
      className="flex flex-col gap-4 pt-16 lg:gap-14 "
    >
      <Label className="text-xl font-bold lg:text-4xl">{t("title")}</Label>
      <div className="flex flex-col gap-8">
        <Project
          title={t("projects.movyx.title")}
          description={t("projects.movyx.description")}
          stack={[
            "React Native",
            "Docker",
            "Expo",
            "Typescript",
            "Javascript",
            "HTML",
            "CSS",
            "Node.js",
          ]}
        />
      </div>
    </div>
  );
}
