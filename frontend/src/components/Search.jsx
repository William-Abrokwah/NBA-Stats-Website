function Search({ value, onChange, placeholder }) {
    return(
        <input 
            type="text" 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            className="bg-white text-black px-6 py-0.5 rounded-2xl w-96" 
            placeholder={placeholder}
        />
    );
}

export default Search