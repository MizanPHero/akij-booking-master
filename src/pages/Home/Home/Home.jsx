import Discounts from "../Discounts/Discounts";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";

const Home = () => {
    

    return (
        <>
            <Hero/>
            <div className="-mt-[350px]">
                <Search/>
            </div>
            <Features/>
            <Discounts/>
        </>
    );
};

export default Home;