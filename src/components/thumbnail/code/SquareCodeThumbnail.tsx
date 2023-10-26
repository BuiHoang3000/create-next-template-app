import { Avatar, Tag } from "antd";
import { CommentOutlined, HeartOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { SquareChatContentThumbnail } from "../styles";
import { IThumbnailCard } from "@/types/thumbnail";

import '../../../app/thumbnail/thumbnail.scss';

interface SquareCodeThumbnailProps {
	data: IThumbnailCard;
}

export function SquareCodeThumbnail(props: SquareCodeThumbnailProps) {
	const {data} = props;

	return (
		<div className='relative'>
			<div
				className='card flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] bg-[#632e5e] rounded-2xl text-white'>
				<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
					{/*Avatar and Icon*/}
					<div className='flex justify-between items-center self-stretch'>
						<Avatar className='avatar'>{data.nickname[0]}</Avatar>
						<div className='flex items-start gap-2'>
							<Tag icon={<HeartOutlined/>} color="default" className='custom-image-code-tag'>
								{data.numberOfLikes}
							</Tag>
							<Tag icon={<CommentOutlined/>} color="default" className='custom-image-code-tag'>
								{data.numberOfComments}
							</Tag>
						</div>
					</div>
					{/*Content*/}
					<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
						<SquareChatContentThumbnail
							className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
							{data.codeCategory?.codeShared}
						</SquareChatContentThumbnail>
					</div>
				</div>
				<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
					<Tag icon={<ThunderboltOutlined/>} color="default" className='custom-image-code-tag'>
						{data.model}
					</Tag>
					<div
						className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
						{data.postTitle}
					</div>
					<div className='flex items-start gap-[5px] w-full overflow-hidden'>
						{data.hashTag.map((item) => (
							<Tag key={item} color="default" className='custom-chat-tag'>
								#{item}
							</Tag>
						))}
					</div>
				</div>
			</div>
			{/*HOVER*/}
			<div className='card-hover absolute top-0 w-[340px] h-[340px] bg-[#632e5e] rounded-2xl z-10'>
				<div
					className='flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] bg-black/[.6] rounded-2xl text-white'>
					<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
						{/*Avatar and Icon*/}
						<div className='flex gap-2 items-center self-stretch'>
							<Avatar className='avatar'>{data.nickname[0]}</Avatar>
							{data.nickname}
						</div>
						{/*Content*/}
						<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
							<div
								className='flex py-1 px-[10px] items-start gap-1.5 rounded text-white bg-black/[.6]'>INSTRUCTION
							</div>
							<SquareChatContentThumbnail
								className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
								{data.codeCategory?.instruction}
							</SquareChatContentThumbnail>
						</div>
					</div>
					<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
						<div
							className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
							{data.postTitle}
						</div>
						<div className='flex items-start gap-[5px] w-full overflow-hidden'>
							{data.hashTag.map((item) => (
								<Tag key={item} color="default" className='custom-chat-tag'>
									#{item}
								</Tag>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
