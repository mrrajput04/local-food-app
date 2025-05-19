
import { Star, StarHalf, StarOff } from 'lucide-react';

interface StarRatingDisplayProps {
	rating: number;
	totalStars?: number;
	size?: number;
	className?: string;
	reviewCount?: number;
	starColorClassName?: string;
	reviewCountTextColorClassName?: string;
}

export default function StarRatingDisplay({
	rating = 0,
	totalStars = 5,
	size = 16,
	className = "",
	reviewCount,
	starColorClassName = "text-yellow-400", // Default to yellow
	reviewCountTextColorClassName = "text-muted-foreground",
}: StarRatingDisplayProps) {

	const stars = [];
	for (let i = 1; i <= totalStars; i++) {
		if (rating >= i) {
			// Full star
			stars.push(
				<Star
					key={`star-full-${i}`}
					fill="currentColor"
					className={starColorClassName}
					size={size}
					strokeWidth={0} // No border for filled stars
				/>
			);
		} else if (rating >= i - 0.75 && rating >= i - 0.5) { // A more standard way to show half star (e.g. 4.5 shows 4 full 1 half)
			// Half star: rating is between (i-1).5 and i. For example, for the 3rd star (i=3), if rating is 2.5, it's a half star.
			stars.push(
				<StarHalf
					key={`star-half-${i}`}
					fill="currentColor"
					className={starColorClassName}
					size={size}
					strokeWidth={0} // No border for half filled stars
				/>
			);
		} else {
			// Empty star (using StarOff or Star with different styling)
			stars.push(
				<StarOff
					key={`star-empty-${i}`}
					className={starColorClassName} // Use same color for consistency, stroke will show
					size={size}
					strokeWidth={1.5}
				/>
			);
		}
	}

	return (
		<div className={`flex items-center gap-px ${className}`}> {/* Reduced gap for tighter stars */}
			{stars}
			{reviewCount !== undefined && reviewCount > 0 && (
				<span className={`ml-1.5 text-xs ${reviewCountTextColorClassName}`}>
					({reviewCount})
				</span>
			)}
		</div>
	);
}
