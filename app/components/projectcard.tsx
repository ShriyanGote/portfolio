import { cn } from "@/library/utils";
import Link from "next/link";
import { buttonVariants } from "@/components-ui/button";
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
      <Card className="w-full h-full">
        <div className="relative w-full h-[400px] flex items-center justify-center">
          <Image
            src={value.image}
            alt={value.title}
            height={400}
            width={400}
            className="rounded-t-lg object-contain"
          />
        </div>

        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
        </CardHeader>
        <CardContent>
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
                    }`}
                    key={indx}
                  >
                    {itm}
                  </span>
                );
              })}
            </div>
          </div>
        </CardContent>
        {/* Add margin to move the footer lower */}
        <CardFooter className="items-center justify-center flex mt-4">
          <Link
            href={value.link}
            target="blank"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "flex"
            )}
          >
            Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;