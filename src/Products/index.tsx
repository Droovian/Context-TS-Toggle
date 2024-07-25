import { useCallback, useState, useMemo } from "react";
import HandleSearch from './search';
import Button from "../components/Button";

type Product = {
    id: number;
    name: string;
    price: number;
}

const ProductsList = [
    { id: 1, name: 'iPhone', price: 100 },
    { id: 2, name: 'Macbook', price: 200 },
    { id: 3, name: 'Airpods', price: 300 },
    { id: 4, name: 'Airtag', price: 400 },
    { id: 5, name: 'iMac', price: 500 },
];

const Products = () => {
    const [product, setProduct] = useState<Product[]>(ProductsList);

    const handleSearch = useCallback((text: string) => {
        
        const filteredProduct = ProductsList.filter((product) => 
            product?.name.toLowerCase().includes(text.toLowerCase())
        );

        setProduct(filteredProduct);
    }, []);

    const shuffleProducts = () => {
        const shuffled = [...product].sort(() => Math.random() - 0.5);
        setProduct(shuffled);
    };

    const calculationResults = useMemo(() => {
        console.log('Calculating expensive result...');
        return product.filter((prod) => prod.price > 300);
    }, [product]);

    const handleCalculationClick = () => {
        console.log('Memoized Calculation Result:');
        console.log(calculationResults);
    };

  return (
    <>
        <h1 className="text-2xl font-bold text-center">useCallback</h1>
       
        <div className="w-3/4 mx-auto mb-10">
            <div className="flex gap-3 m-3 w-full">
                <Button onClick={shuffleProducts}>Shift</Button>
                <HandleSearch handleInputChange={handleSearch}/>
                <Button onClick={handleCalculationClick}>Memoized Calculation</Button>
            </div>
            {
                product.map((prod) => (
                    <div key={prod.id} className="flex items-center justify-between p-3 border-b">
                        <span>{prod.name}</span>
                    </div>
                ))
            }
        </div>
    
    </>
  )
}

export default Products