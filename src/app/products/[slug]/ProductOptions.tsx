import { Label } from "@/components/ui/label";
import { checkInStock, cn } from "@/lib/utils";
import { products } from "@wix/stores";

interface ProductOptionsProps {
  product: products.Product;
  selectedOptions: Record<string, string>; // Record<K, T> // {Color: 'Black'}
  setSelectedOptions: (options: Record<string, string>) => void;
}

export default function ProductOptions({
  product,
  selectedOptions,
  setSelectedOptions,
}: ProductOptionsProps) {
  return (
    <div className="space-y-2.5">
      {product.productOptions?.map((option) => (
        <fieldset key={option.name} className="space-y-1.5">
          <legend>
            <Label asChild>
              <span>{option.name}</span>
            </Label>
          </legend>
          <div className="flex flex-wrap items-center gap-1.5">
            {option.choices?.map((choice) => (
              <div key={choice.description}>
                <input
                  type="radio"
                  id={choice.description}
                  name={option.name}
                  value={choice.description}
                  // Check Color === Black is a pair of key and value
                  // If not it can be Size === Black
                  checked={
                    selectedOptions[option.name || ""] === choice.description
                  }
                  onChange={() =>
                    setSelectedOptions({
                      ...selectedOptions,
                      [option.name || ""]: choice.description || "",
                    })
                  }
                  className="peer hidden"
                />
                <Label
                  htmlFor={choice.description}
                  className={cn(
                    "flex items-center justify-center min-w-14 cursor-pointer border p-2 gap-1.5 peer-checked:border-primary",
                    !checkInStock(product, {
                      ...selectedOptions,
                      [option.name || ""]: choice.description || "",
                    }) && "opacity-30",
                  )}
                >
                  {option.optionType === products.OptionType.color && (
                    <span
                      className="size-4 rounded-full border"
                      style={{ backgroundColor: choice.value }}
                    />
                  )}
                  <span>{choice.description}</span>
                </Label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}
