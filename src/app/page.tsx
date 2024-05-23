import FAQComponent from "@/components/FAQ/FAQComponent";
import Home from "@/components/Home/Home";
import Services from "@/components/Services/Services";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between         pb-[500px]">
      <Home/>
      <Services/>
      <FAQComponent/>

      
    </main>
  );
}
