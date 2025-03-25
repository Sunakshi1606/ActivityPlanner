// ActivityCard.tsx
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { ActivityCardHeader } from './ActivitCardHeader';
import { ActivityDetails } from './ActivityDetail';

import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';


interface ActivityCardProps {
    activity: {
        image: string;
        activity: string;
        score: number;
        reason: string;
        dailyScores: any[];
    };
    forecast: any[];
}

const ActivityCard = ({ activity, forecast }: ActivityCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-xs">
                <ActivityCardHeader
                    activity={activity}
                    onClick={openModal}
                />
            </Card>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-2xl p-0">   
                <VisuallyHidden>
          <DialogTitle>This title is only visible to screen readers</DialogTitle>
        </VisuallyHidden>              
                    <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 z-10 bg-gray-900/40 p-1">
                        <X className="h-4 w-4 text-white" />
                        <span className="sr-only">Close</span>
                    </DialogClose>

                    <div>
                        <ActivityCardHeader
                            activity={activity}
                            className="h-64"
                        />
                        <ActivityDetails
                            activity={activity}
                            forecast={forecast}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ActivityCard;