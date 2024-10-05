import { ArrowRight } from 'lucide-react';

import { GitHubLogoIcon, HeartFilledIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

import consolePlaceholder from '~/components/assets/console-placeholder.svg';
import ellipse from '~/components/assets/ellipse.svg';
import shieldIcon from '~/components/assets/shield.svg';
import Typography from '~/components/atoms/typography';
import Logo from '~/components/icons/logo';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

const HomePage = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute -z-10 aspect-auto w-full flex justify-center xl:-top-40 antialiased">
                <img src={ellipse} alt="ellipse" className="w-full" />
            </div>
            <main className="container text-center">
                <section className="flex flex-col w-full items-center justify-center py-16 lg:py-36 gap-10">
                    <a
                        href="https://x.com/shield_auth"
                        target="_blank"
                        className="flex bg-primary/20 p-1 rounded-full gap-1 items-center text-primary-foreground no-underline"
                        rel="noreferrer"
                    >
                        <span className={cn(buttonVariants({ size: 'xs' }), 'rounded-full')}>Update</span>
                        <span className="text-sm">See what&apos;s new from Shield</span>
                        <ArrowRight className="w-4 h-4 mr-1" />
                    </a>
                    <div className="max-w-sm">
                        <Logo />
                    </div>
                    <Typography variant="h1" className="font-roboto-slab">
                        <span className="text-primary">Ultimate Security</span> with <br />
                        <span className="text-primary">Feature-Rich</span> IAM/CIAM Solution
                    </Typography>
                    <Typography variant="p" className="-mt-4">
                        Shield delivers a comprehensive solution for Identity and Access Management for modern applications. Built with the fastest and
                        safest programming language to ensure unparalleled security and performance.
                    </Typography>

                    <span className={cn(buttonVariants(), 'animate-pulse mt-4')}>Coming Soon...</span>
                </section>
                <section className="flex flex-1 justify-center w-full relative">
                    <img src={shieldIcon} alt="shield logo" className="absolute aspect-square -z-10 max-w-sm animate-pulse opacity-35 -top-40 -right-16" />
                    <img src={consolePlaceholder} alt="shield console placeholder" className="aspect-auto object-cover" />
                </section>
            </main>
            <footer className="flex flex-col items-center gap-2 py-20">
                <div className="flex gap-4 items-center mb-4">
                    <a href="https://x.com/shield_auth" target="_blank" rel="noreferrer">
                        <TwitterLogoIcon className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/company/shield-auth" target="_blank" rel="noreferrer">
                        <LinkedInLogoIcon className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/shield-auth" target="_blank" rel="noreferrer">
                        <GitHubLogoIcon className="w-6 h-6" />
                    </a>
                </div>
                <Typography variant="tiny" className="text-center space-y-2">
                    &copy; 2023 Shield. All rights reserved.
                    <br />
                </Typography>
                <Typography variant="tiny" className="inline-flex items-center gap-1">
                    Made with <HeartFilledIcon className="w-4 h-4 text-primary" /> by{' '}
                    <a href="https://linkedin.com/in/ca-mksingh" target="_blank" rel="noreferrer">
                        Mukesh Singh
                    </a>
                </Typography>
            </footer>
        </div>
    );
};

export default HomePage;
