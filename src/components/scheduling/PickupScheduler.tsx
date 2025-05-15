import { useState } from "react";
import { PickupLocation } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar as CalendarIcon, Clock } from "lucide-react";

interface PickupSchedulerProps {
    locations: PickupLocation[];
}

export default function PickupScheduler({ locations }: PickupSchedulerProps) {
    const [selectedLocation, setSelectedLocation] = useState<PickupLocation | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(undefined);

    // Get available days for the selected location
    const availableDays = selectedLocation?.availableDays || [];

    // Convert day names to Date objects for the next occurrence of each day
    const getNextDayOccurrence = (dayName: string): Date => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const todayIndex = today.getDay();
        const targetIndex = days.indexOf(dayName);
        const daysUntilNext = (targetIndex - todayIndex + 7) % 7;

        const nextOccurrence = new Date(today);
        nextOccurrence.setDate(today.getDate() + daysUntilNext);
        return nextOccurrence;
    };

    // Get available dates for the next 4 weeks
    const getAvailableDates = (): Date[] => {
        if (!selectedLocation) return [];

        const dates: Date[] = [];
        const today = new Date();

        // Add dates for the next 4 weeks
        for (let i = 0; i < 4; i++) {
            availableDays.forEach(day => {
                const nextDay = getNextDayOccurrence(day);
                nextDay.setDate(nextDay.getDate() + (i * 7));

                // Only include dates in the future
                if (nextDay > today) {
                    dates.push(new Date(nextDay));
                }
            });
        }

        return dates.sort((a, b) => a.getTime() - b.getTime());
    };

    // Get available time slots for the selected date
    const getAvailableTimeSlots = (): string[] => {
        if (!selectedLocation || !selectedDate) return [];

        const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
        const timeSlots = selectedLocation.availableTimeSlots.find(ts => ts.day === dayName);

        return timeSlots?.slots || [];
    };

    // Format the day name from a date
    const formatDayName = (date: Date): string => {
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    // Check if a date is an available pickup day
    const isDateAvailable = (date: Date): boolean => {
        const dayName = formatDayName(date);
        return availableDays.includes(dayName);
    };

    return (
        <div className="grid gap-6 md:grid-cols-5">
            <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Select Pickup Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {locations.map((location) => (
                                <div
                                    key={location.id}
                                    className={`p-4 border rounded-md cursor-pointer transition-colors ${selectedLocation?.id === location.id
                                        ? "border-farm-green bg-farm-green/5"
                                        : "border-border hover:border-farm-green/50"
                                        }`}
                                    onClick={() => {
                                        setSelectedLocation(location);
                                        setSelectedDate(undefined);
                                        setSelectedTimeSlot(undefined);
                                    }}
                                >
                                    <div className="font-medium">{location.name}</div>
                                    <div className="text-sm text-muted-foreground flex items-center mt-1">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {location.address}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-2">
                                        Available: {location.availableDays.join(", ")}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="md:col-span-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Schedule Your Pickup</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {!selectedLocation ? (
                            <div className="text-center py-8 text-muted-foreground">
                                Please select a pickup location first
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="font-medium flex items-center">
                                        <CalendarIcon className="h-4 w-4 mr-2 text-farm-green" />
                                        Select Date
                                    </div>
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={(date) => {
                                            setSelectedDate(date);
                                            setSelectedTimeSlot(undefined);
                                        }}
                                        disabled={(date) => {
                                            // Disable dates in the past and dates that aren't available pickup days
                                            const today = new Date();
                                            today.setHours(0, 0, 0, 0);
                                            return date < today || !isDateAvailable(date);
                                        }}
                                        className="rounded-md border pointer-events-auto"
                                    />
                                </div>

                                {selectedDate && (
                                    <div className="space-y-2">
                                        <div className="font-medium flex items-center">
                                            <Clock className="h-4 w-4 mr-2 text-farm-green" />
                                            Select Time Slot
                                        </div>
                                        <Select
                                            value={selectedTimeSlot}
                                            onValueChange={setSelectedTimeSlot}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select time" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {getAvailableTimeSlots().map((timeSlot) => (
                                                    <SelectItem key={timeSlot} value={timeSlot}>
                                                        {timeSlot}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}

                                {selectedDate && selectedTimeSlot && (
                                    <div className="pt-4">
                                        <Button className="w-full bg-farm-green hover:bg-farm-green-dark">
                                            Confirm Pickup
                                        </Button>
                                        <p className="text-xs text-center mt-2 text-muted-foreground">
                                            You can modify or cancel your pickup up to 24 hours before the scheduled time
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
