import { CategoryDropdown } from "./categories-dropdown";
import type { Category } from "@/payload-types";


interface CategoriesProps {
    data: Category[];
}


export const Categories = ({ data }: CategoriesProps) => {
    return (
        <div className="flex items-center gap-2 overflow-x-auto py-2">
            {data.map((category) => (
                <CategoryDropdown key={category.id} category={category} />
            ))}
        </div>
    );
};
