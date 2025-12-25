import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-background border-border relative grid h-full w-full shadow-xl rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3',
				className,
			)}
			{...props}
		>
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 md:space-y-6 px-4 py-8 sm:px-6 sm:py-10 md:p-12">
					<h2 className="text-2xl font-bold font-display sm:text-3xl md:text-4xl lg:text-5xl text-text-primary">
						{title.split(' ').slice(0, -2).join(' ')}{' '}
						<span className="gradient-text">{title.split(' ').slice(-2).join(' ')}</span>
					</h2>
					<p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
						{description}
					</p>
					<div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 pt-2 md:pt-4">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'bg-gradient-to-br from-primary/5 to-primary/10 flex h-full w-full items-center border-t md:border-t-0 md:border-l border-border p-4 sm:p-6 md:p-8',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-start gap-3 py-2', className)} {...props}>
			<div className="bg-primary/10 rounded-xl p-2.5 sm:p-3 flex-shrink-0">
				<Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
			</div>
			<div className="space-y-0.5 min-w-0 flex-1">
				<p className="font-semibold text-text-primary text-xs sm:text-sm">{label}</p>
				<p className="text-muted-foreground text-xs sm:text-sm leading-relaxed break-words">{value}</p>
			</div>
		</div>
	);
}
