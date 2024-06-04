import SidebarPortal from "@/components/SidebarPortal/Sidebar";
import HomePortal from "@/components/HomePortal/HomePortal";

export default function App() {
  return (
    <section className="flex justify-center items-center">
      <SidebarPortal/>
      <HomePortal/>
      
    </section>
  );
}
