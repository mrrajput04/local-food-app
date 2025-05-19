
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PickupLocationsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-4">Pickup Locations</h1>
        <p className="text-lg text-muted-foreground">
          Find convenient pickup locations near you. Content about pickup locations will go here.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PickupLocationsPage;