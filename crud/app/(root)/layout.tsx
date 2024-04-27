// For Layout Components
import Navbar from "@/app/Layout/Navbar/Navbar";


const RootLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
export default RootLayout