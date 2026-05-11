import { Badge } from "@/components/ui/badge";

const Countries = () => {
  return (
    <>
      <div id="explore" className="bg-muted/50 border-t border-border h-96">
        <div className="flex flex-col items-start p-12">
          <Badge variant={"outline"}>Em destaque</Badge>
          <h1 className="font-semibold text-2xl">Explore alguns países</h1>
        </div>
      </div>
    </>
  );
};

export default Countries;
