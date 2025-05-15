
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Check } from "lucide-react";

const languageOptions: { value: Language; label: string; nativeLabel: string }[] = [
    { value: "english", label: "English", nativeLabel: "English" },
    { value: "hindi", label: "Hindi", nativeLabel: "हिन्दी" },
    { value: "tamil", label: "Tamil", nativeLabel: "தமிழ்" },
    { value: "bengali", label: "Bengali", nativeLabel: "বাংলা" },
    { value: "marathi", label: "Marathi", nativeLabel: "मराठी" },
    { value: "punjabi", label: "Punjabi", nativeLabel: "ਪੰਜਾਬੀ" }
];

export function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="w-full py-1 px-1">
            {languageOptions.map((option) => (
                <div
                    key={option.value}
                    className={`flex items-center justify-between px-2 py-2 text-sm rounded-md cursor-pointer ${language === option.value ? "bg-farm-green/10 text-farm-green" : "hover:bg-accent"
                        }`}
                    onClick={() => setLanguage(option.value)}
                >
                    <div className="flex items-center gap-2">
                        <span className="font-medium">{option.nativeLabel}</span>
                        {option.value !== "english" && (
                            <span className="text-muted-foreground text-xs">({option.label})</span>
                        )}
                    </div>
                    {language === option.value && <Check className="h-4 w-4 text-farm-green" />}
                </div>
            ))}
        </div>
    );
}

export default LanguageSelector;