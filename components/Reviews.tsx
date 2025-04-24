'use client'
import React from 'react';
import {faqItems} from "@/store/QnaList";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

function Reviews() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger
                        className="text-left font-medium text-gray-800 py-4 hover:text-blue-600">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default Reviews;