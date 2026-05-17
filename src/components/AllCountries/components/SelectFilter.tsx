"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { SubregionSelectProps } from "@/src/types/types";

const SelectFilter = ({ onChange, options, value }: SubregionSelectProps) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <p className="text-muted-foreground text-sm">Subregion</p>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filtrar por Subregião" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              {options.map((subregion) => (
                <SelectItem key={subregion} value={subregion}>
                  {subregion}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default SelectFilter;
