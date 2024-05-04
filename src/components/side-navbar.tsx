import { CornersIcon, ShadowInnerIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyH2 } from "./ui/typography-h2";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { TypographySmall } from "./ui/typography-small";

export default function SideNavbar() {
  return (
    <aside className="flex flex-col w-full md:w-[500px] h-[calc(100vh-2rem)] p-4 round shadow bg-card text-card-foreground transition-all ease-in-out space-y-8">
      {/* Logo */}
      <div className="space-y-2">
        <TypographyH2>Roundedges</TypographyH2>
        <TypographyH1 className="text-sm font-normal lg:text-md">
          Round your images quickly, make them look clean!
        </TypographyH1>
      </div>

      {/* Upload */}
      <div>
        <Button className="w-full">Upload Image</Button>
      </div>

      {/* Features */}
      <div>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full">
            <TooltipProvider delayDuration={0}>
              <TabsTrigger value="border">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CornersIcon />
                  </TooltipTrigger>
                  <TooltipContent className="TooltipContent" sideOffset={10}>
                    <TypographySmall>Rounded edges</TypographySmall>
                  </TooltipContent>
                </Tooltip>
              </TabsTrigger>
              <TabsTrigger value="shadow">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ShadowInnerIcon />
                  </TooltipTrigger>
                  <TooltipContent className="TooltipContent" sideOffset={10}>
                    <TypographySmall>Shadows</TypographySmall>
                  </TooltipContent>
                </Tooltip>
              </TabsTrigger>
            </TooltipProvider>
          </TabsList>
          <TabsContent
            value="border"
            className="w-full p-4 rounded-md bg-secondary"
          >
            Edit your borders here
          </TabsContent>
          <TabsContent
            value="shadow"
            className="w-full p-4 rounded-md bg-secondary"
          >
            Edit your shadows here
          </TabsContent>
        </Tabs>
      </div>

      {/* Download */}
      <div>
        <Button className="w-full">Download</Button>
      </div>
    </aside>
  );
}
