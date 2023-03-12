'use client';

import React, { useState } from 'react';
import { BsMicFill, BsBell, BsCameraVideo } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import youtube from '../public/yt_logo_rgb_dark.png';
import { AiOutlineSearch } from 'react-icons/ai';

const TopNavigation = () => {
	const [search, setSearch] = useState('');

	return (
		<div className='flex justify-between p-4'>
			<div className='flex items-center gap-4'>
				<RxHamburgerMenu size={26} className='cursor-pointer' />
				<div className='flex items-center gap-2'>
					<Image
						src={youtube}
						alt='youtube'
						width='100'
						height='100'
						className='cursor-pointer'
					/>
				</div>
			</div>
			<div className='hidden md:flex gap-2 min-w-[300px] lg:w-[620px]'>
				<div className='flex w-full'>
					<input
						placeholder='Search'
						value={search}
						onChange={(event) => setSearch(event.target.value)}
						className='w-full px-4 py-2 border-[1px] text-zinc-200 border-zinc-700 bg-zinc-900 placeholder:text-zinc-400 focus:bg-black focus:outline-none focus:ring-[1px] focus:ring-sky-500 rounded-l-full'
					/>
					<div className='flex items-center bg-zinc-700 px-5 py-3 rounded-r-full cursor-pointer'>
						<AiOutlineSearch size={22} />
					</div>
				</div>
				<div className='flex items-center bg-zinc-800 p-4 rounded-full hover:bg-zinc-700 cursor-pointer'>
					<BsMicFill />
				</div>
			</div>
			<div className='flex gap-3 items-center'>
				<div className='flex items-center p-2 rounded-full hover:bg-zinc-700 cursor-pointer'>
					<BsCameraVideo size={22} />
				</div>
				<div className='flex items-center p-2 rounded-full hover:bg-zinc-700 cursor-pointer'>
					<BsBell size={22} />
				</div>
				<div className='cursor-pointer'>
					<Image
						src='https://cdn.discordapp.com/avatars/551956038459457539/943d6c9d60c052884d158d8d8faac6eb.png?size=240'
						height={40}
						width={40}
						alt='user image'
						className='rounded-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default TopNavigation;
