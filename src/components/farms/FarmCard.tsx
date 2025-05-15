import { Link } from "react-router-dom";
import { Farm } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

interface FarmCardProps {
    farm: Farm;
}

export default function FarmCard({ farm }: FarmCardProps) {
    return (
        <Link to={`/farms/${farm.id}`}>
            <Card className="farm-card h-full overflow-hidden hover:scale-[1.01] transition-transform">
                <div className="aspect-video w-full overflow-hidden">
                    <img
                        src={farm.imageUrl}
                        alt={farm.name}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                </div>
                <CardHeader className="p-4">
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{farm.name}</h3>
                        <div className="flex items-center gap-1 text-farm-yellow-dark">
                            <Star className="h-4 w-4 fill-farm-yellow stroke-farm-yellow-dark" />
                            <span className="text-sm font-medium">{farm.rating}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1 text-farm-earth" />
                        {farm.location} ({farm.distance})
                    </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2">{farm.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                    {farm.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-farm-gray-light text-farm-earth-dark border-farm-gray">
                            {tag}
                        </Badge>
                    ))}
                </CardFooter>
            </Card>
        </Link>
    );
}