const Spinner = () => {
    return (
        <>

        <div className="flex items-center justify-center h-[259px]">
            
            <div className="animate-spin w-10 h-10 border-[3px] border-current border-t-transparent text-blue-400 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>


        {/* <div className="flex absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] items-center justify-center h-screen">
            
            <div className="animate-spin w-10 h-10 border-[3px] border-current border-t-transparent text-blue-500 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
            
        </div> */}


        </>
    );
};

export default Spinner;