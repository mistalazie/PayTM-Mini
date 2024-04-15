export function AppBar ({label, user}) {
    return <div className="h-14 flex justify-between shadow">
        <div className="flex flex-col justify-center mx-2 font-semibold text-xl">
            payTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 text-xl">
                Hello
            </div>
            <div className="rounded-full h-8 w-8 flex bg-slate-200 justify-center mt-3 mr-2">
                <div className="flex flex-col justify-center h-full text-center">
                    U
                </div>
            </div>
        </div>
    </div>
}