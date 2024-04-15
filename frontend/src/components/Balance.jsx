export function Balance ({label}) {
    return <div className="flex shadow-md h-14">
        <div className="flex flex-col justify-center text-center text-lg font-semibold ml-6">
            Your Balance
        </div>
        <div className="flex flex-col justify-center text-center font-semibold text-lg ml-2">
            Rs {label}
        </div>
    </div>
}