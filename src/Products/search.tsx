import { memo } from "react";

type SearchProps = {
    handleInputChange: (text: string) => void;
}

const HandleSearch = ({ handleInputChange} : SearchProps) => {

    console.log('Search Component Rendered');
    
  return (
    <input 
        type="text" 
        placeholder="Search Product"
        onChange={(e) => handleInputChange(e.target.value)}
        className="border p-2 rounded-md w-full"
    />
  )
}

export default memo(HandleSearch);