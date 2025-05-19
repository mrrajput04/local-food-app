
import { useState, useEffect } from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import { Review, Product, Farm } from "@/types";
import StarRatingDisplay from '../common/StarRatingDisplay';
import { products, farms } from '@/data/mockData';

interface ReviewsDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	entityId: string;
	entityType: "product" | "farm";
	entityName: string;
}

export default function ReviewsDialog({
	open,
	onOpenChange,
	entityId,
	entityType,
	entityName,
}: ReviewsDialogProps) {
	// State to force re-render of StarRatingDisplay and ReviewList after a new review
	const [refreshKey, setRefreshKey] = useState(0);
	const [currentEntity, setCurrentEntity] = useState<Product | Farm | null>(null);

	useEffect(() => {
		if (entityType === 'product') {
			setCurrentEntity(products.find(p => p.id === entityId) || null);
		} else {
			setCurrentEntity(farms.find(f => f.id === entityId) || null);
		}
	}, [entityId, entityType, refreshKey]); // Add refreshKey to dependencies

	const handleReviewSubmitted = (newReview: Review) => {
		// The addReview function in mockData already updates the products/farms array.
		// We just need to trigger a re-render of this dialog to show the new review/updated average.
		console.log("Review submitted in dialog, new review:", newReview);
		setRefreshKey(prevKey => prevKey + 1);
	};

	const averageRating = entityType === 'product'
		? (currentEntity as Product)?.averageRating
		: (currentEntity as Farm)?.rating;

	const reviewCount = currentEntity?.reviewCount;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col">
				<DialogHeader>
					<DialogTitle className="text-2xl">{entityName} Reviews</DialogTitle>
					{currentEntity && averageRating !== undefined && (
						<div className="flex items-center mt-1">
							<StarRatingDisplay rating={averageRating} reviewCount={reviewCount} size={20} />
						</div>
					)}
					<DialogDescription>
						See what others are saying and share your own experience.
					</DialogDescription>
				</DialogHeader>

				<div className="flex-grow overflow-y-auto pr-2 space-y-6">
					<div>
						<h3 className="text-lg font-semibold mb-2">Community Reviews</h3>
						<ReviewList key={`list-${refreshKey}`} entityId={entityId} entityType={entityType} />
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-3 pt-4 border-t">Write Your Review</h3>
						<ReviewForm
							key={`form-${refreshKey}`}
							entityId={entityId}
							entityType={entityType}
							onReviewSubmitted={handleReviewSubmitted}
						/>
					</div>
				</div>

				<DialogFooter className="mt-auto pt-4 border-t">
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
