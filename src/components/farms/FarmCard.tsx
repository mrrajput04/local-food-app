
import { useState } from "react"; // Added useState
import { Link } from "react-router-dom";
import { Farm } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, MessageSquareText } from "lucide-react"; // Added MessageSquareText
import StarRatingDisplay from "@/components/common/StarRatingDisplay";
import ReviewsDialog from "@/components/reviews/ReviewsDialog"; // New import
import { Button } from "@/components/ui/button"; // Added Button

interface FarmCardProps {
	farm: Farm;
}

export default function FarmCard({ farm }: FarmCardProps) {
	const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

	// Use a key for StarRatingDisplay that changes when reviewCount changes
	const starRatingKey = `farm-${farm.id}-stars-${farm.reviewCount}-${farm.rating}`;

	return (
		<>
			<div className="block h-full"> {/* Link wrapper removed to allow button clicks inside card before navigation */}
				<Card className="farm-card h-full overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
					<Link to={`/farms/${farm.id}`} className="block">
						<div className="aspect-video w-full overflow-hidden">
							<img
								src={farm.imageUrl}
								alt={farm.name}
								className="h-full w-full object-cover transition-transform group-hover:scale-105" // group-hover needs a group parent, consider Card as group
							/>
						</div>
					</Link>
					<CardHeader className="p-4">
						<div className="flex justify-between items-start">
							<Link to={`/farms/${farm.id}`} className="block">
								<h3 className="font-semibold text-lg hover:underline">{farm.name}</h3>
							</Link>
							{/* StarRatingDisplay will be part of the main flow */}
						</div>
						<div className="flex items-center gap-2 mt-1">
							<StarRatingDisplay
								key={starRatingKey}
								rating={farm.rating}
								reviewCount={farm.reviewCount}
								size={16}
								starColorClassName="text-farm-yellow"
								reviewCountTextColorClassName="text-sm font-medium text-farm-yellow-dark"
							/>
							<Button
								variant="outline"
								size="xs"
								className="h-6 px-1.5 py-0.5 text-xs"
								onClick={() => setIsReviewDialogOpen(true)}
								aria-label={`Reviews and ratings for ${farm.name}`}
							>
								<MessageSquareText className="h-3 w-3 mr-1" /> Reviews
							</Button>
						</div>
						<Link to={`/farms/${farm.id}`} className="block">
							<div className="flex items-center text-sm text-muted-foreground mt-1 hover:text-primary">
								<MapPin className="h-4 w-4 mr-1 text-farm-earth" />
								{farm.location} ({farm.distance})
							</div>
						</Link>
					</CardHeader>
					<CardContent className="p-4 pt-0 flex-grow">
						<Link to={`/farms/${farm.id}`} className="block">
							<p className="text-sm text-muted-foreground line-clamp-2 h-[40px] hover:text-foreground">
								{farm.description}
							</p>
						</Link>
					</CardContent>
					<CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
						{farm.tags.map((tag, i) => (
							<Badge key={i} variant="outline" className="bg-farm-gray-light text-farm-earth-dark border-farm-gray">
								{tag}
							</Badge>
						))}
					</CardFooter>
				</Card>
			</div>

			{isReviewDialogOpen && (
				<ReviewsDialog
					open={isReviewDialogOpen}
					onOpenChange={setIsReviewDialogOpen}
					entityId={farm.id}
					entityType="farm"
					entityName={farm.name}
				/>
			)}
		</>
	);
}
