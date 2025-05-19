
import { Star } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface StarRatingInputProps {
	rating: number;
	onRatingChange: (rating: number) => void;
	totalStars?: number;
	size?: number;
	className?: string;
	starColorClassName?: string;
	hoverColorClassName?: string;
	disabled?: boolean;
}

export default function StarRatingInput({
	rating,
	onRatingChange,
	totalStars = 5,
	size = 24,
	className = "",
	starColorClassName = "text-yellow-400",
	hoverColorClassName = "text-yellow-500",
	disabled = false,
}: StarRatingInputProps) {
	const [hoverRating, setHoverRating] = useState(0);

	const handleStarClick = (starValue: number) => {
		if (disabled) return;
		onRatingChange(starValue);
	};

	const handleStarHover = (starValue: number) => {
		if (disabled) return;
		setHoverRating(starValue);
	};

	const handleMouseLeave = () => {
		if (disabled) return;
		setHoverRating(0);
	};

	const stars = [];
	for (let i = 1; i <= totalStars; i++) {
		const isFilled = i <= (hoverRating || rating);
		stars.push(
			<button
				type="button"
				key={`star-input-${i}`}
				onClick={() => handleStarClick(i)}
				onMouseEnter={() => handleStarHover(i)}
				onMouseLeave={handleMouseLeave}
				className={cn(
					"p-0 bg-transparent border-none",
					isFilled ? hoverColorClassName : "text-gray-300",
					{ "cursor-not-allowed": disabled, "cursor-pointer": !disabled }
				)}
				disabled={disabled}
				aria-label={`Rate ${i} out of ${totalStars} stars`}
			>
				<Star
					fill={isFilled ? "currentColor" : "none"}
					className={cn(starColorClassName, { "opacity-50": disabled })}
					size={size}
					strokeWidth={1.5}
				/>
			</button>
		);
	}

	return (
		<div className={`flex items-center gap-px ${className}`} role="radiogroup">
			{stars}
		</div>
	);
}