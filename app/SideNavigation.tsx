'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { HiHome } from 'react-icons/hi';
import { TfiYoutube } from 'react-icons/tfi';
import { usePathname, useRouter } from 'next/navigation';
import { BsCollectionPlay } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BiPlayCircle } from 'react-icons/bi';

interface MenuItem {
	icon: IconType;
	text: string;
	pathname: string;
}

const MenuItems: Array<MenuItem> = [
	{
		icon: HiHome,
		text: 'Home',
		pathname: '/',
	},
	{
		icon: TfiYoutube,
		text: 'Shorts',
		pathname: '/shorts',
	},
	{
		icon: BsCollectionPlay,
		text: 'Subscriptions',
		pathname: '/subscriptions',
	},
	{
		icon: AiOutlineYoutube,
		text: 'Originals',
		pathname: '/originals',
	},
	{
		icon: BiPlayCircle,
		text: 'YouTube Music',
		pathname: '/music',
	},
];

const SideNavigation = () => {
	const pathname = usePathname();
	const router = useRouter();
	const handleItemClick = (item: MenuItem) => {
		router.push(item.pathname);
	};
	return (
		<div className='p-[4px] lg:px-3 lg:w-[260px]'>
			{MenuItems.map((item) => (
				<div
					className={`flex flex-col lg:flex-row lg:text-base lg:gap-6 gap-1 p-4 lg:py-2 items-center hover:bg-zinc-700 ${
						item.pathname === pathname && 'bg-zinc-700 hover:bg-zinc-600'
					} rounded-lg cursor-pointer`}
					onClick={() => handleItemClick(item)}
				>
					<item.icon size={30} />
					<span className='text-xs'>{item.text}</span>
				</div>
			))}
		</div>
	);
};

export default SideNavigation;
