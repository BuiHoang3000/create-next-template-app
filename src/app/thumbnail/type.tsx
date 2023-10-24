'use client';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Chip from '@mui/material/Chip';
import styled from 'styled-components';

const VerticalContentThumbnail = styled.div`
  max-height: 170px;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`

const SquareContentThumbnail = styled.div`
  max-height: 66px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export default function Type() {
	return (
		<div className='w-screen bg-white text-black p-5'>
			<div className='flex gap-2 flex-wrap'>
				{/*CHAT*/}
				<div className='flex flex-col items-start flex-shrink-0 w-[340px] h-[460px] bg-[#e6d4fe] rounded-2xl'>
					<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch max-h-[315px]'>
						{/*Avatar and Icon*/}
						<div className='flex justify-between items-center self-stretch'>
							<div className='flex items-center gap-2'>
								<div className='flex items-end w-8 h-8 bg-[#ff9c6e] rounded-full'>
									<div className='flex flex-1 justify-center items-center self-stretch text-white'>U</div>
								</div>
							</div>
							<div className='flex items-start gap-2'>
								<Chip icon={<FavoriteBorderIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
								<Chip icon={<ChatIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
							</div>
						</div>
						{/*Content*/}
						<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
							<div className='flex py-1 px-[10px] items-start gap-1.5 rounded bg-white'>Answer</div>
							<VerticalContentThumbnail
								className='flex-1 self-stretch overflow-hidden text-[#2c3137] text-ellipsis text-[15px] font-normal leading-6 max-h-[170px]'>
								This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test
								this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this
								text
								for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So
								this text for test this case.
							</VerticalContentThumbnail>
						</div>
					</div>
					<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
						<Chip icon={<ElectricBoltIcon sx={{fontSize: 14}}/>} label="GPT-3.5-turbo" variant="outlined"
						      className="bg-white" sx={{border: 0}}/>
						<div
							className='h-6 self-stretch overflow-hidden text-black text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
							This is the post title. The post title is exposed up to two lines. If there are more than two lines, this
							is
							done.
						</div>
						<div className='flex items-start gap-[5px] w-full overflow-hidden'>
							<Chip label="#Tag 1" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 2" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 3" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 4" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 5" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] bg-[#cde1ff] rounded-2xl'>
					<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
						{/*Avatar and Icon*/}
						<div className='flex justify-between items-center self-stretch'>
							<div className='flex items-center gap-2'>
								<div className='flex items-end w-8 h-8 bg-[#ff9c6e] rounded-full'>
									<div className='flex flex-1 justify-center items-center self-stretch text-white'>U</div>
								</div>
							</div>
							<div className='flex items-start gap-2'>
								<Chip icon={<FavoriteBorderIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
								<Chip icon={<ChatIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
							</div>
						</div>
						{/*Content*/}
						<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
							<div className='flex py-1 px-[10px] items-start gap-1.5 rounded bg-white'>Answer</div>
							<SquareContentThumbnail
								className='flex-1 self-stretch overflow-hidden text-[#2c3137] text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
								This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test
								this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this
								text
								for test this case.
							</SquareContentThumbnail>
						</div>
					</div>
					<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
						<Chip
							icon={<ElectricBoltIcon sx={{fontSize: 14, height: '26px', padding: '3px 0'}}/>}
							label="GPT-3.5-turbo"
							variant="outlined"
							className="bg-white"
							sx={{border: 0}}
						/>
						<div
							className='h-6 self-stretch overflow-hidden text-black text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
							This is the post title. The post title is exposed up to two lines. If there are more than two lines, this
							is
							done.
						</div>
						<div className='flex items-start gap-[5px] w-full overflow-hidden'>
							<Chip label="#Tag 1" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 2" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 3" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 4" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 5" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
						</div>
					</div>
				</div>
				{/*IMAGE*/}
				<div className='flex flex-col items-start flex-shrink-0 w-[340px] h-[460px] bg-[#e6d4fe] rounded-2xl'>
					<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch max-h-[315px]'>
						{/*Avatar and Icon*/}
						<div className='flex justify-between items-center self-stretch'>
							<div className='flex items-center gap-2'>
								<div className='flex items-end w-8 h-8 bg-[#ff9c6e] rounded-full'>
									<div className='flex flex-1 justify-center items-center self-stretch text-white'>U</div>
								</div>
							</div>
							<div className='flex items-start gap-2'>
								<Chip icon={<FavoriteBorderIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
								<Chip icon={<ChatIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
							</div>
						</div>
						{/*Content*/}
						<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
							<div className='flex py-1 px-[10px] items-start gap-1.5 rounded bg-white'>Answer</div>
							<VerticalContentThumbnail
								className='flex-1 self-stretch overflow-hidden text-[#2c3137] text-ellipsis text-[15px] font-normal leading-6 max-h-[170px]'>
								This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test
								this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this
								text
								for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So
								this text for test this case.
							</VerticalContentThumbnail>
						</div>
					</div>
					<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
						<Chip icon={<ElectricBoltIcon sx={{fontSize: 14}}/>} label="GPT-3.5-turbo" variant="outlined"
						      className="bg-white" sx={{border: 0}}/>
						<div
							className='h-6 self-stretch overflow-hidden text-black text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
							This is the post title. The post title is exposed up to two lines. If there are more than two lines, this
							is
							done.
						</div>
						<div className='flex items-start gap-[5px] w-full overflow-hidden'>
							<Chip label="#Tag 1" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 2" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 3" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 4" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 5" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] bg-[#cde1ff] rounded-2xl'>
					<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
						{/*Avatar and Icon*/}
						<div className='flex justify-between items-center self-stretch'>
							<div className='flex items-center gap-2'>
								<div className='flex items-end w-8 h-8 bg-[#ff9c6e] rounded-full'>
									<div className='flex flex-1 justify-center items-center self-stretch text-white'>U</div>
								</div>
							</div>
							<div className='flex items-start gap-2'>
								<Chip icon={<FavoriteBorderIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
								<Chip icon={<ChatIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
							</div>
						</div>
						{/*Content*/}
						<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
							<div className='flex py-1 px-[10px] items-start gap-1.5 rounded bg-white'>Answer</div>
							<SquareContentThumbnail
								className='flex-1 self-stretch overflow-hidden text-[#2c3137] text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
								This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test
								this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this
								text
								for test this case.
							</SquareContentThumbnail>
						</div>
					</div>
					<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
						<Chip
							icon={<ElectricBoltIcon sx={{fontSize: 14, height: '26px', padding: '3px 0'}}/>}
							label="GPT-3.5-turbo"
							variant="outlined"
							className="bg-white"
							sx={{border: 0}}
						/>
						<div
							className='h-6 self-stretch overflow-hidden text-black text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
							This is the post title. The post title is exposed up to two lines. If there are more than two lines, this
							is
							done.
						</div>
						<div className='flex items-start gap-[5px] w-full overflow-hidden'>
							<Chip label="#Tag 1" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 2" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 3" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 4" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 5" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
						</div>
					</div>
				</div>
				{/*CODE*/}
				<div className='flex flex-col items-start flex-shrink-0 w-[340px] h-[460px] bg-[#e6d4fe] rounded-2xl'>
					<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch max-h-[315px]'>
						{/*Avatar and Icon*/}
						<div className='flex justify-between items-center self-stretch'>
							<div className='flex items-center gap-2'>
								<div className='flex items-end w-8 h-8 bg-[#ff9c6e] rounded-full'>
									<div className='flex flex-1 justify-center items-center self-stretch text-white'>U</div>
								</div>
							</div>
							<div className='flex items-start gap-2'>
								<Chip icon={<FavoriteBorderIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
								<Chip icon={<ChatIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
							</div>
						</div>
						{/*Content*/}
						<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
							<div className='flex py-1 px-[10px] items-start gap-1.5 rounded bg-white'>Answer</div>
							<VerticalContentThumbnail
								className='flex-1 self-stretch overflow-hidden text-[#2c3137] text-ellipsis text-[15px] font-normal leading-6 max-h-[170px]'>
								This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test
								this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this
								text
								for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So
								this text for test this case.
							</VerticalContentThumbnail>
						</div>
					</div>
					<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
						<Chip icon={<ElectricBoltIcon sx={{fontSize: 14}}/>} label="GPT-3.5-turbo" variant="outlined"
						      className="bg-white" sx={{border: 0}}/>
						<div
							className='h-6 self-stretch overflow-hidden text-black text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
							This is the post title. The post title is exposed up to two lines. If there are more than two lines, this
							is
							done.
						</div>
						<div className='flex items-start gap-[5px] w-full overflow-hidden'>
							<Chip label="#Tag 1" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 2" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 3" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 4" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 5" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] bg-[#cde1ff] rounded-2xl'>
					<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
						{/*Avatar and Icon*/}
						<div className='flex justify-between items-center self-stretch'>
							<div className='flex items-center gap-2'>
								<div className='flex items-end w-8 h-8 bg-[#ff9c6e] rounded-full'>
									<div className='flex flex-1 justify-center items-center self-stretch text-white'>U</div>
								</div>
							</div>
							<div className='flex items-start gap-2'>
								<Chip icon={<FavoriteBorderIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
								<Chip icon={<ChatIcon sx={{fontSize: 24}}/>} label="999" variant="outlined"
								      className="bg-white" sx={{border: 0}}/>
							</div>
						</div>
						{/*Content*/}
						<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
							<div className='flex py-1 px-[10px] items-start gap-1.5 rounded bg-white'>Answer</div>
							<SquareContentThumbnail
								className='flex-1 self-stretch overflow-hidden text-[#2c3137] text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
								This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test
								this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this
								text
								for test this case.
							</SquareContentThumbnail>
						</div>
					</div>
					<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
						<Chip
							icon={<ElectricBoltIcon sx={{fontSize: 14, height: '26px', padding: '3px 0'}}/>}
							label="GPT-3.5-turbo"
							variant="outlined"
							className="bg-white"
							sx={{border: 0}}
						/>
						<div
							className='h-6 self-stretch overflow-hidden text-black text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
							This is the post title. The post title is exposed up to two lines. If there are more than two lines, this
							is
							done.
						</div>
						<div className='flex items-start gap-[5px] w-full overflow-hidden'>
							<Chip label="#Tag 1" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 2" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 3" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 4" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
							<Chip label="#Tag 5" variant="outlined" className="bg-white"
							      sx={{height: '26px', padding: '3px 0', border: 0}}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
