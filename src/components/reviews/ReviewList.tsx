
import { Review } from "@/types";
import ReviewItem from "./ReviewItem";
import { reviews as allReviews } from "@/data/mockData"; // Import all reviews
import { useMemo } from "react";

interface ReviewListProps {
	entityId: string;
	entityType: "product" | "farm";
	className?: string;
}

export default function ReviewList({ entityId, entityType, className = "" }: ReviewListProps) {
	// Memoize filtered reviews to prevent re-filtering on every render
	// unless allReviews, entityId, or entityType changes.
	const filteredReviews = useMemo(() => {
		return allReviews.filter(
			(review) => review.entityId === entityId && review.entityType === entityType
		).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
	}, [entityId, entityType]); // allReviews is stable, so not strictly needed in deps if it never changes reference

	if (filteredReviews.length === 0) {
		return (
			<p className={`text-sm text-muted-foreground py-4 ${className}`}>
				No reviews yet. Be the first to share your thoughts!
			</p>
		);
	}

	return (
		<div className={`space-y-0 ${className}`}>
			{filteredReviews.map((review) => (
				<ReviewItem key={review.id} review={review} />
			))}
		</div>
	);
}
