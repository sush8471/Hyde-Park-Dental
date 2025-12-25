import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function HydeParkContactSection() {
	return (
		<section id="contact" className="py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<ContactCard
					title="Get in Touch"
					description="Have questions about our dental services? We're here to help. Fill out the form and we'll get back to you within 1 business day."
					contactInfo={[
						{
							icon: MailIcon,
							label: 'Email',
							value: 'hpdc@hydeparkdental.com.au',
						},
						{
							icon: PhoneIcon,
							label: 'Phone',
							value: '(08) 8272 4855',
						},
						{
							icon: MapPinIcon,
							label: 'Address',
							value: '84a King William Rd, Goodwood SA',
							className: 'col-span-2',
						}
					]}
				>
					<form 
						action="https://formsubmit.co/hpdc@hydeparkdental.com.au" 
						method="POST"
						className="w-full space-y-4"
					>
						{/* FormSubmit Configuration */}
						<input type="hidden" name="_subject" value="New Contact from Hyde Park Dental Website" />
						<input type="hidden" name="_captcha" value="false" />
						<input type="hidden" name="_template" value="table" />
						<input type="hidden" name="_next" value="https://hydeparkdental.vercel.app/#contact" />
						
						<div className="flex flex-col gap-2">
							<Label htmlFor="name">Name</Label>
							<Input type="text" id="name" name="name" placeholder="Your name" required />
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="email">Email</Label>
							<Input type="email" id="email" name="email" placeholder="your@email.com" required />
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="phone">Phone</Label>
							<Input type="tel" id="phone" name="phone" placeholder="(08) XXXX XXXX" />
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="message">Message</Label>
							<Textarea id="message" name="message" placeholder="Tell us how we can help..." required />
						</div>
						<Button className="w-full" type="submit">
							Send Message
						</Button>
					</form>
				</ContactCard>
			</div>
		</section>
	);
}
