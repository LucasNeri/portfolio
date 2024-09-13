import awsIcon from "@/public/skills/aws.svg";
import azureIcon from "@/public/skills/azure.svg";
import gcpIcon from "@/public/skills/gcp.svg";
import githubActionsIcon from "@/public/skills/github-actions.svg";
import htmlIcon from "@/public/skills/html.svg";
import cssIcon from "@/public/skills/css.svg";
import vueIcon from "@/public/skills/vue.svg";
import viteIcon from "@/public/skills/vite.svg";
import expoIcon from "@/public/skills/expo.svg";
import reactNativeIcon from "@/public/skills/react-native.svg";
import golangIcon from "@/public/skills/golang.svg";
import javascriptIcon from "@/public/skills/javascript.svg";
import jenkinsIcon from "@/public/skills/jenkins.svg";
import mongoIcon from "@/public/skills/mongodb.svg";
import mysqlIcon from "@/public/skills/mysql.svg";
import nestIcon from "@/public/skills/nestjs.svg";
import nextIcon from "@/public/skills/nextjs.svg";
import nodeIcon from "@/public/skills/nodejs.svg";
import oracleIcon from "@/public/skills/oracle.svg";
import postgresIcon from "@/public/skills/postgresql.svg";
import pythonIcon from "@/public/skills/python.svg";
import reactIcon from "@/public/skills/react.svg";
import gitlabIcon from "@/public/skills/gitlab.svg";
import typescriptIcon from "@/public/skills/typescript.svg";
import { useTranslations } from "next-intl";
import Logo from "../logo";
import { Label } from "../ui/label";

export default function Skills() {
  const t = useTranslations("Skills");
  return (
    <div
      id="skills"
      className="flex flex-col justify-evenly gap-4 pt-16 lg:items-center lg:gap-14"
    >
      <h2 className="text-xl font-bold lg:text-4xl">{t("title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">{t("languages")}</Label>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Logo
              label="Typescript"
              skill={typescriptIcon}
            />
            <Logo
              label="Javascript"
              skill={javascriptIcon}
            />
            <Logo
              label="Golang"
              skill={golangIcon}
            />
            <Logo
              label="Python"
              skill={pythonIcon}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">Front-end</Label>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Logo
              label="React"
              skill={reactIcon}
            />
            <Logo
              label="Vue"
              skill={vueIcon}
            />
            <Logo
              label="NextJS"
              skill={nextIcon}
            />

            <Logo
              label="Vite"
              skill={viteIcon}
            />
            <Logo
              label="Native"
              skill={reactNativeIcon}
            />
            <Logo
              label="Expo"
              skill={expoIcon}
            />
            <Logo
              label="HTML"
              skill={htmlIcon}
            />
            <Logo
              label="CSS"
              skill={cssIcon}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">Back-end</Label>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Logo
              label="NodeJS"
              skill={nodeIcon}
            />
            <Logo
              label="NestJS"
              skill={nestIcon}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">{t("databases")}</Label>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Logo
              label="MongoDB"
              skill={mongoIcon}
            />
            <Logo
              label="MySQL"
              skill={mysqlIcon}
            />
            <Logo
              label="PostgreSQL"
              skill={postgresIcon}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">{t("cloud-providers")}</Label>
          <div className="flex flex-wrap gap-4 items-end justify-center ">
            <Logo
              label="AWS"
              skill={awsIcon}
            />
            <Logo
              label="Azure"
              skill={azureIcon}
            />
            <Logo
              label="GCP"
              skill={gcpIcon}
            />
            <Logo
              label="Oracle"
              skill={oracleIcon}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Label className="text-base font-bold">CI/CD</Label>
          <div className="flex flex-wrap gap-4 items-end justify-center">
            <Logo
              label="Jenkins"
              skill={jenkinsIcon}
            />
            <Logo
              label="Actions"
              skill={githubActionsIcon}
            />
            <Logo
              label="Azure"
              skill={azureIcon}
            />
            <Logo
              label="Gitlab"
              skill={gitlabIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
