
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

export function SearchFeature() {
	const [searchVisible, setSearchVisible] = useState(false);
	const { language } = useLanguage();

	if (searchVisible) {
		return (
			<div className="relative w-full md:w-auto">
				<Input
					type="search"
					placeholder={getTranslation("searchPlaceholder", language)}
					className="w-full md:w-[200px] pr-8"
					autoFocus
					onBlur={() => setSearchVisible(false)}
				/>
				<Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" /> {/* Adjusted top positioning */}
			</div>
		);
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setSearchVisible(true)}
		>
			<Search className="h-5 w-5" />
			<span className="sr-only">{getTranslation("search", language)}</span>
		</Button>
	);
}
