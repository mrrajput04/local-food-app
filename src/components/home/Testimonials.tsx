
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

export default function Testimonials() {
    const { language } = useLanguage();

    return (
        <section className="py-16 bg-farm-green-dark text-white">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-farm-gray-light"></div>
                            <div className="ml-3">
                                <div className="font-medium">Sarah M.</div>
                                <div className="text-xs text-white/70">Boulder, CO</div>
                            </div>
                        </div>
                        <p className="text-white/90">
                            "I love getting my weekly vegetable box. Everything is so fresh and the quality is amazing. Supporting local farms feels great!"
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-farm-gray-light"></div>
                            <div className="ml-3">
                                <div className="font-medium">Mark T.</div>
                                <div className="text-xs text-white/70">Lafayette, CO</div>
                            </div>
                        </div>
                        <p className="text-white/90">
                            "The pickup scheduling system is so convenient. I can grab my farm-fresh goods on my way home from work with no hassle."
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-farm-gray-light"></div>
                            <div className="ml-3">
                                <div className="font-medium">Jessica L.</div>
                                <div className="text-xs text-white/70">Longmont, CO</div>
                            </div>
                        </div>
                        <p className="text-white/90">
                            "Since using Local Food Connector, I've discovered so many amazing small farms in my area. The produce is fresher and tastes better than anything at the grocery store."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}