const Moon = () => {
    return (
        <div className="relative h-96 w-full -mt-32 -z-10 overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#1a237e,transparent_80%)] before:opacity-60">
            <div className="absolute top-1/2 -left-1/2 w-[200%] h-[200%] z-10 rounded-[100%] animate-gradient border-t-4 border-t-[#d0e8ff] bg-[#0a0a0a] shadow-[inset_0_2px_20px_#d0e8ff,0_-10px_50px_1px_#d0e8ffb3] xs:h-[300%] sm:h-[400%] md:h-[500%] lg:h-[600%] xl:h-[800%] 2xl:xl:h-[1000%]" />
        </div>
    );
};

export default Moon;
