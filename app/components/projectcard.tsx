// import { cn } from "@/library/utils";
import Link from "next/link";
// import { buttonVariants } from "@/components-ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components-ui/card";
import FramerWrapper from "./animation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  // eslint-disable-next-line
  value: any;
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper
      className={"max-w-[32%] min-h-[345px] max-lg:max-w-full"}
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card
        className="w-full h-full border border-gray-300 rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
      >
        <div className="relative w-full h-[400px] flex items-center justify-center">
          <Image
            src={value.image}
            alt={value.title}
            height={400}
            width={400}
            className="rounded-t-lg object-contain"
          />
        </div>

        <CardHeader className="flex flex-col items-center justify-center text-center">
          <CardTitle className="transition-colors hover:text-gray-700">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-4 py-2 text-center">
          <p className="text-base font-poppins">{value.description}</p>
          <div className="w-full h-fit flex mt-2 justify-center flex-wrap gap-2 overflow-hidden">
            <div className="max-w-full overflow-auto flex gap-2 flex-wrap">
              {value.tags.map((itm: string, indx: number) => {
                return (
                  <span
                    className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                      itm === "Nextjs"
                        ? "bg-teal-100 text-teal-800"
                        : itm === "Freelancing"
                        ? "bg-yellow-100 text-yellow-800"
                        : itm === "Shadcn Ui"
                        ? "bg-blue-100 text-blue-800"
                        : itm === "Typescript"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    } transition-all transform hover:scale-105`}
                    key={indx}
                  >
                    {itm}
                  </span>
                );
              })}
            </div>
          </div>
        </CardContent>

        <CardFooter className="items-center justify-center flex mt-4 px-4">
          <Link
            href={value.link}
            target="blank"
            className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-transform transform"
          >
            Github Repository <ArrowUpRight className="h-5 w-5 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
