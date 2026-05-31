import React from 'react';
import { Textarea } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='mt-24 w-full flex justify-center items-center gap-4'>
        {/* Content */}
        <div className='max-w-3xl md:max-w-5xl w-full text-center space-y-4'>
            <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold'>Hey, I'm your personal <span className='text-primary'>Trip Planner!</span></h1>
            <p className='text-lg text-muted-foreground'>
                Tell me what you want, and I'll handle the rest! Flights, hotels, trip planner - all in seconds.
            </p>
        </div>

        {/* Input Box */}
        <div>
        </div>

        {/* Suggestion List */}

        {/* Video Section */}
    </div>
  )
}

export default Hero;