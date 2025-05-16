
import { Link } from "react-router-dom";
import { Farm } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react"; // Star import removed as StarRatingDisplay handles it
import StarRatingDisplay from "@/components/common/StarRatingDisplay"; // New import

interface FarmCardProps {
	farm: Farm;
}

export default function FarmCard({ farm }: FarmCardProps) {
	return (
		<Link to={`/farms/${farm.id}`} className="block h-full"> {/* Ensure Link takes full height */}
			<Card className="farm-card h-full overflow-hidden hover:scale-[1.01] transition-transform flex flex-col"> {/* Added flex flex-col */}
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
						<StarRatingDisplay
							rating={farm.rating}
							reviewCount={farm.reviewCount}
							size={16}
							starColorClassName="text-farm-yellow" // Matching original fill color
							// For StarOff, the stroke will take this color.
							// For Star/StarHalf, fill will take this color.
							reviewCountTextColorClassName="text-sm font-medium text-farm-yellow-dark" // Matching original text style
						/>
					</div>
					<div className="flex items-center text-sm text-muted-foreground mt-1">
						<MapPin className="h-4 w-4 mr-1 text-farm-earth" />
						{farm.location} ({farm.distance})
					</div>
				</CardHeader>
				<CardContent className="p-4 pt-0 flex-grow"> {/* Added flex-grow */}
					<p className="text-sm text-muted-foreground line-clamp-2 h-[40px]">{farm.description}</p> {/* Added fixed height */}
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