import Example from "@/components/Example/Example";
import FAQComponent from "@/components/FAQ/FAQComponent";
import Home from "@/components/Home/Home";
import Price from "@/components/Price/Price";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Home/>
      <Example/>
      <FAQComponent/>
      <Price/>
    </main>
  );
}
