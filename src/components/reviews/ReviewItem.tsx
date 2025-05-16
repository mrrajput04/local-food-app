
import { Review } from "@/types";
import StarRatingDisplay from "@/components/common/StarRatingDisplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

interface ReviewItemProps {
	review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
	const getInitials = (name: string) => {
		const names = name.split(' ');
		if (names.length === 1) return names[0][0]?.toUpperCase() || '';
		return (names[0][0]?.toUpperCase() || '') + (names[names.length - 1][0]?.toUpperCase() || '');
	};

	return (
		<div className="py-4 border-b border-gray-200 last:border-b-0">
			<div className="flex items-start space-x-3">
				<Avatar className="h-10 w-10">
					{/* In a real app, user.imageUrl would be used */}
					<AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.userName}`} alt={review.userName} />
					<AvatarFallback>{getInitials(review.userName)}</AvatarFallback>
				</Avatar>
				<div className="flex-1">
					<div className="flex items-center justify-between">
						<h4 className="text-sm font-semibold">{review.userName}</h4>
						<StarRatingDisplay rating={review.rating} size={14} />
					</div>
					<p className="text-xs text-muted-foreground mt-0.5">
						{format(new Date(review.createdAt), "MMMM d, yyyy")}
					</p>
					<p className="text-sm text-gray-700 mt-2">{review.comment}</p>
				</div>
			</div>
		</div>
	);
}
