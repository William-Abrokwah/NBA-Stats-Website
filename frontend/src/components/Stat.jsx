function Stat({ label, value}) {
    return (
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
            <span className="text-gray-800">{label}</span>
            <span className="font-semibold">{value}</span>
        </div>
    );
}

export default Stat