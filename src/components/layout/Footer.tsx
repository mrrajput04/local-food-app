
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-farm-gray-light border-t">
            <div className="container py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-farm-green flex items-center justify-center">
                                <span className="text-white font-bold">FC</span>
                            </div>
                            <span className="font-bold text-xl text-farm-green-dark">Local Food Connector</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Connecting local farms with communities for fresher food and stronger local economies.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-farm-green hover:text-farm-green-dark">
                                <Facebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-farm-green hover:text-farm-green-dark">
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-farm-green hover:text-farm-green-dark">
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-semibold">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/farms" className="text-muted-foreground hover:text-farm-green">Local Farms</Link></li>
                            <li><Link to="/products" className="text-muted-foreground hover:text-farm-green">Fresh Products</Link></li>
                            <li><Link to="/subscriptions" className="text-muted-foreground hover:text-farm-green">Subscription Boxes</Link></li>
                            <li><Link to="/pickup" className="text-muted-foreground hover:text-farm-green">Pickup Locations</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-semibold">Information</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="text-muted-foreground hover:text-farm-green">About Us</Link></li>
                            <li><Link to="/how-it-works" className="text-muted-foreground hover:text-farm-green">How It Works</Link></li>
                            <li><Link to="/sustainability" className="text-muted-foreground hover:text-farm-green">Sustainability</Link></li>
                            <li><Link to="/faq" className="text-muted-foreground hover:text-farm-green">FAQs</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-semibold">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-muted-foreground">Email: contact@localfoodconnector.com</li>
                            <li className="text-muted-foreground">Phone: (555) 123-4567</li>
                            <li className="text-muted-foreground">Address: 1234 Farm Road, Boulder, CO 80301</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-10 pt-6 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Local Food Connector. All rights reserved.</p>
                    <div className="flex justify-center mt-2 space-x-4">
                        <Link to="/privacy" className="hover:text-farm-green">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-farm-green">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}