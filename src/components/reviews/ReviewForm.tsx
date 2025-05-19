
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import StarRatingInput from "@/components/common/StarRatingInput";
import { addReview } from "@/data/mockData";
import { Review } from "@/types";
import { useToast } from "@/components/ui/use-toast"; // Corrected import path for Shadcn Toasts

interface ReviewFormProps {
	entityId: string;
	entityType: "product" | "farm";
	onReviewSubmitted: (newReview: Review) => void;
	className?: string;
}

const reviewFormSchema = z.object({
	rating: z.number().min(1, "Rating is required").max(5),
	comment: z.string().min(10, "Comment must be at least 10 characters long.").max(500, "Comment cannot exceed 500 characters."),
	userName: z.string().min(2, "Name is required.").max(50, "Name cannot exceed 50 characters.").optional(), // Making it optional for now
});

type ReviewFormValues = z.infer<typeof reviewFormSchema>;

export default function ReviewForm({ entityId, entityType, onReviewSubmitted, className = "" }: ReviewFormProps) {
	const { toast } = useToast(); // Shadcn Toasts

	const form = useForm<ReviewFormValues>({
		resolver: zodResolver(reviewFormSchema),
		defaultValues: {
			rating: 0,
			comment: "",
			userName: "Valued Customer" // Default mock user name
		},
	});

	function onSubmit(data: ReviewFormValues) {
		try {
			const newReview = addReview({
				entityId,
				entityType,
				rating: data.rating,
				comment: data.comment,
				userName: data.userName, // Pass userName
			});
			onReviewSubmitted(newReview);
			toast({
				title: "Review Submitted!",
				description: "Thank you for your feedback.",
			});
			form.reset(); // Reset form after successful submission
		} catch (error) {
			console.error("Failed to submit review:", error);
			toast({
				title: "Submission Failed",
				description: "Could not submit your review. Please try again.",
				variant: "destructive",
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
				<FormField
					control={form.control}
					name="rating"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your Rating</FormLabel>
							<FormControl>
								<StarRatingInput
									rating={field.value}
									onRatingChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="comment"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your Review</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell us about your experience..."
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full sm:w-auto bg-farm-green hover:bg-farm-green-dark">Submit Review</Button>
			</form>
		</Form>
	);
}
