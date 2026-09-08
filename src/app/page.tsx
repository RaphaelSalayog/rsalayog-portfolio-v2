import Moon from "@/components/Moon";
import StarField from "@/components/StarField";

export default function Home() {
    return (
        <section className="relative min-h-dvh flex flex-col justify-center pt-36">
            <StarField />
            <Moon />
        </section>
    );
}
