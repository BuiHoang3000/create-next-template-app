'use client';
import styled from 'styled-components';
import Image from "next/image";
import { Avatar, Tag } from 'antd';
import { CommentOutlined, HeartOutlined, ThunderboltOutlined } from '@ant-design/icons';

import './thumbnail.scss';
import { useEffect, useState } from "react";
import { IThumbnail, IThumbnailCard } from "@/types/thumbnail";

const VerticalChatContentThumbnail = styled.div`
  height: 170px;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`

const SquareChatContentThumbnail = styled.div`
  max-height: 66px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const data: IThumbnail = {
	numberOfSharedPrompts: 1000,
	response: [
		{
			sharedPromptId: 1,
			nickname: "Jayce",
			numberOfLikes: 200,
			numberOfComments: 30,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["#Tag 1"],
			category: "L",
			postPinSize: 'V',
			languageCategory: {
				finalAnswer: "This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case.",
				systemPrompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
		{
			sharedPromptId: 2,
			nickname: "Sunday",
			numberOfLikes: 699,
			numberOfComments: 43,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["#Tag 2"],
			category: "L",
			postPinSize: 'S',
			languageCategory: {
				finalAnswer: "This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case.",
				systemPrompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
		{
			sharedPromptId: 3,
			nickname: "Friday",
			numberOfLikes: 999,
			numberOfComments: 15,
			model: "Realistic Vision V5.1",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["#Tag 3"],
			category: "I",
			postPinSize: 'V',
			imageCategory: {
				imageData: "https://as1.ftcdn.net/v2/jpg/05/62/07/38/1000_F_562073881_Mi03fL64vnVkHeNKYXhJ40Pn3jJF3v8h.jpg",
				prompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
		{
			sharedPromptId: 4,
			nickname: "Monday",
			numberOfLikes: 88,
			numberOfComments: 21,
			model: "Realistic Vision V5.1",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["#Tag 4"],
			category: "I",
			postPinSize: 'S',
			imageCategory: {
				imageData: "https://as2.ftcdn.net/v2/jpg/05/62/07/39/1000_F_562073900_V7TaRndzttVWsfuc1QVAYSdHbFjVAt7y.jpg",
				prompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
		{
			sharedPromptId: 5,
			nickname: "Tuesday",
			numberOfLikes: 123,
			numberOfComments: 45,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["#Tag 5"],
			category: "C",
			postPinSize: 'S',
			codeCategory: {
				codeShared: "@Controller <br/>\n" +
					"\t\t\t\t\t\t\t\t\t\tpublic class TestController {}",
				instruction: "@Controller <br/>\n" +
					"\t\t\t\t\t\t\t\t\t\tpublic class TestController {}"
			},
		},
		{
			sharedPromptId: 6,
			nickname: "Wednesday",
			numberOfLikes: 345,
			numberOfComments: 75,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["#Tag 6"],
			category: "C",
			postPinSize: 'S',
			codeCategory: {
				codeShared: "@Controller <br/>\n" +
					"\t\t\t\t\t\t\t\t\t\tpublic class TestController {}",
				instruction: "@Controller <br/>\n" +
					"\t\t\t\t\t\t\t\t\t\tpublic class TestController {}"
			},
		},
		{
			sharedPromptId: 7,
			nickname: "Saturday",
			numberOfLikes: 732,
			numberOfComments: 29,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["#Tag 7"],
			category: "C",
			postPinSize: 'V',
			codeCategory: {
				codeShared: "@Controller <br/>\n" +
					"\t\t\t\t\t\t\t\t\t\tpublic class TestController {}",
				instruction: "@Controller <br/>\n" +
					"\t\t\t\t\t\t\t\t\t\tpublic class TestController {}"
			},
		},
		{
			sharedPromptId: 8,
			nickname: "Potter",
			numberOfLikes: 200,
			numberOfComments: 30,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["#Tag 8"],
			category: "L",
			postPinSize: 'V',
			languageCategory: {
				finalAnswer: "This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case.",
				systemPrompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
		{
			sharedPromptId: 9,
			nickname: "Harry",
			numberOfLikes: 699,
			numberOfComments: 43,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["#Tag 9"],
			category: "L",
			postPinSize: 'S',
			languageCategory: {
				finalAnswer: "This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case.",
				systemPrompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
	]
}

export default function Thumbnail() {
	const bgColorsOutlined = 'bg-chat-6';
	const colNumbers = 3;
	const [col1, setCol1] = useState<IThumbnailCard[]>([]);
	const [col2, setCol2] = useState<IThumbnailCard[]>([]);
	const [col3, setCol3] = useState<IThumbnailCard[]>([]);

	useEffect(() => {
		const column1: IThumbnailCard[] = [];
		const column2: IThumbnailCard[] = [];
		const column3: IThumbnailCard[] = [];
		data.response.forEach((item, index) => {
			if (index % colNumbers === 0) {
				column1.push(item);
			}
			if (index % colNumbers === 1) {
				column2.push(item);
			}
			if (index % colNumbers === 2) {
				column3.push(item);
			}
		})
		setCol1(column1);
		setCol2(column2);
		setCol3(column3);
	}, []);

	return (
		<div className='w-screen bg-white text-black p-5'>
			<div className='flex gap-2 flex-wrap'>
				<div className='flex flex-col gap-2'>
					{/*SQUARE*/}
					<div className='relative w-[340px] h-[340px] bg-[#cde1ff] rounded-2xl'>
						<div className='card flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] bg-[#cde1ff] rounded-2xl'>
							<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
								{/*Avatar and Icon*/}
								<div className='flex justify-between items-center self-stretch'>
									<Avatar className='avatar'>U</Avatar>
									<div className='flex items-start gap-2'>
										<Tag icon={<HeartOutlined/>} color="default" className='custom-chat-tag'>
											999
										</Tag>
										<Tag icon={<CommentOutlined/>} color="default" className='custom-chat-tag'>
											999
										</Tag>
									</div>
								</div>
								{/*Content*/}
								<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
									<div className='flex py-1 px-[10px] items-start gap-1.5 rounded bg-white'>Answer</div>
									<SquareChatContentThumbnail
										className='flex-1 self-stretch overflow-hidden text-[#2c3137] text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
										This is the description about content of thumbnail. Maybe it is have multi lines. So this text for
										test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So
										this text for test this case.
									</SquareChatContentThumbnail>
								</div>
							</div>
							<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
								<Tag icon={<ThunderboltOutlined/>} color="default" className='custom-chat-tag'>
									GPT-3.5-turbo
								</Tag>
								<div
									className='h-6 self-stretch overflow-hidden text-black text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
									This is the post title. The post title is exposed up to two lines. If there are more than two lines,
									this is done.
								</div>
								<div className='flex items-start gap-[5px] w-full overflow-hidden'>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 1
									</Tag>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 2
									</Tag>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 3
									</Tag>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 4
									</Tag>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 5
									</Tag>
								</div>
							</div>
						</div>
						{/*HOVER*/}
						<div className='card-hover absolute top-0 w-[340px] h-[340px] bg-[#cde1ff] rounded-2xl z-10'>
							<div
								className='flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] bg-black/[.6] rounded-2xl text-white'>
								<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
									{/*Avatar and Icon*/}
									<div className='flex gap-2 items-center self-stretch'>
										<Avatar className='avatar'>U</Avatar>
										Jayce
									</div>
									{/*Content*/}
									<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
										<div className='flex py-1 px-[10px] items-start gap-1.5 rounded text-white bg-black/[.6]'>Answer
										</div>
										<SquareChatContentThumbnail
											className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
											This is the description about content of thumbnail. Maybe it is have multi lines. So this text for
											test
											this case. This is the description about content of thumbnail. Maybe it is have multi lines. So
											this
											text
											for test this case.
										</SquareChatContentThumbnail>
									</div>
								</div>
								<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
									<div
										className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
										This is the post title. The post title is exposed up to two lines. If there are more than two lines,
										this
										is
										done.
									</div>
									<div className='flex items-start gap-[5px] w-full overflow-hidden'>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 1
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 2
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 3
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 4
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 5
										</Tag>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*VERTICAL*/}
					<div className={`relative w-[340px] h-[460px] ${bgColorsOutlined} rounded-2xl`}>
						<div className='card flex flex-col justify-between flex-shrink-0 w-[340px] h-[460px]'>
							<div
								className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch max-h-[315px]'>
								{/*Avatar and Icon*/}
								<div className='flex justify-between items-center self-stretch'>
									<Avatar className='avatar'>U</Avatar>
									<div className='flex items-start gap-2'>
										<Tag icon={<HeartOutlined/>} color="default" className='custom-chat-tag'>
											999
										</Tag>
										<Tag icon={<CommentOutlined/>} color="default" className='custom-chat-tag'>
											999
										</Tag>
									</div>
								</div>
								{/*Content*/}
								<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
									<div className='flex py-1 px-[10px] items-start gap-1.5 rounded bg-white'>Answer</div>
									<VerticalChatContentThumbnail
										className='flex-1 self-stretch overflow-hidden text-[#2c3137] text-ellipsis text-[15px] font-normal leading-6 max-h-[170px]'>
										This is the description about content of thumbnail. Maybe it is have multi lines. So this text for
										test
										this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this
										text
										for test this case. This is the description about content of thumbnail. Maybe it is have multi
										lines.
										So
										this text for test this case.
									</VerticalChatContentThumbnail>
								</div>
							</div>
							<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
								<Tag icon={<ThunderboltOutlined/>} color="default" className='custom-chat-tag'>
									GPT-3.5-turbo
								</Tag>
								<div
									className='h-6 self-stretch overflow-hidden text-black text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
									This is the post title. The post title is exposed up to two lines. If there are more than two lines,
									this
									is
									done.
								</div>
								<div className='flex items-start gap-[5px] w-full overflow-hidden'>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 1
									</Tag>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 2
									</Tag>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 3
									</Tag>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 4
									</Tag>
									<Tag color="default" className='custom-chat-tag'>
										#Tag 5
									</Tag>
								</div>
							</div>
						</div>
						{/*HOVER*/}
						<div
							className={`card-hover absolute top-0 w-[340px] h-[460px] ${bgColorsOutlined} rounded-2xl z-10`}>
							<div
								className='flex flex-col justify-between flex-shrink-0 w-[340px] h-[460px] bg-black/[.6] rounded-2xl text-white'>
								<div
									className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch max-h-[315px]'>
									{/*Avatar and Icon*/}
									<div className='flex gap-2 items-center self-stretch'>
										<Avatar className='avatar'>U</Avatar>
										Jayce
									</div>
									{/*Content*/}
									<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
										<div className='flex py-1 px-[10px] items-start gap-1.5 rounded text-white bg-black/[.6]'>Answer
										</div>
										<VerticalChatContentThumbnail
											className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6 max-h-[170px]'>
											This is the description about content of thumbnail. Maybe it is have multi lines. So this text for
											test
											this case. This is the description about content of thumbnail. Maybe it is have multi lines. So
											this
											text
											for test this case. This is the description about content of thumbnail. Maybe it is have multi
											lines.
											So
											this text for test this case.
										</VerticalChatContentThumbnail>
									</div>
								</div>
								<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
									<div
										className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
										This is the post title. The post title is exposed up to two lines. If there are more than two lines,
										this
										is
										done.
									</div>
									<div className='flex items-start gap-[5px] w-full overflow-hidden'>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 1
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 2
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 3
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 4
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 5
										</Tag>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*IMAGE*/}
				<div className='flex flex-col gap-2'>
					{/*VERTICAL*/}
					<div className='relative'>
						<div className='card flex flex-col items-start flex-shrink-0 relative text-white'>
							<Image
								className='flex flex-col justify-center items-center flex-shrink-0 !w-[340px] !h-[460px] rounded-2xl align-middle z-0 object-cover'
								src="https://as1.ftcdn.net/v2/jpg/05/62/07/38/1000_F_562073881_Mi03fL64vnVkHeNKYXhJ40Pn3jJF3v8h.jpg"
								fill={true}
								alt={"Background Image"}/>
							<div className='flex flex-col items-start flex-shrink-0 w-[340px] h-[460px] z-10'>
								<div
									className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch max-h-[315px]'>
									{/*Avatar and Icon*/}
									<div className='flex justify-between items-center self-stretch'>
										<div className='flex items-center gap-2'>
											<div className='flex items-end w-8 h-8 bg-[#ff9c6e] rounded-full'>
												<div className='flex flex-1 justify-center items-center self-stretch text-white'>U</div>
											</div>
										</div>
										<div className='flex items-start gap-2'>
											<Tag icon={<HeartOutlined/>} color="default" className='custom-image-code-tag'>
												999
											</Tag>
											<Tag icon={<CommentOutlined/>} color="default" className='custom-image-code-tag'>
												999
											</Tag>
										</div>
									</div>
								</div>
								<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
									<Tag icon={<ThunderboltOutlined/>} color="default" className='custom-image-code-tag'>
										Realistic Vision V5.1
									</Tag>
									<div
										className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
										This is the post title. The post title is exposed up to two lines. If there are more than two lines,
										this is done.
									</div>
									<div className='flex items-start gap-[5px] w-full overflow-hidden'>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 1
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 2
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 3
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 4
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 5
										</Tag>
									</div>
								</div>
							</div>
						</div>
						{/*HOVER*/}
						<div className='card-hover absolute top-0 w-[340px] h-[460px] rounded-2xl z-20'>
							<Image
								className='flex flex-col justify-center items-center flex-shrink-0 !w-[340px] !h-[460px] rounded-2xl align-middle z-0 object-cover'
								src="https://as1.ftcdn.net/v2/jpg/05/62/07/38/1000_F_562073881_Mi03fL64vnVkHeNKYXhJ40Pn3jJF3v8h.jpg"
								fill={true}
								alt={"Background Image"}/>
							<div
								className='flex flex-col items-start flex-shrink-0 text-white bg-black/[.6] rounded-2xl z-30'>
								<div className='flex flex-col items-start flex-shrink-0 w-[340px] h-[460px] z-10'>
									<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
										{/*Avatar and Icon*/}
										<div className='flex gap-2 items-center self-stretch'>
											<Avatar className='avatar'>U</Avatar>
											Jayce
										</div>
										{/*Content*/}
										<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
											<div className='flex py-1 px-[10px] items-start gap-1.5 rounded text-white bg-black/[.6]'>Prompt
											</div>
											<VerticalChatContentThumbnail
												className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6'>
												This is the description about content of thumbnail. Maybe it is have multi lines. So this text
												for
												test
												this case. This is the description about content of thumbnail. Maybe it is have multi lines. So
												this
												text
												for test this case.
											</VerticalChatContentThumbnail>
										</div>
									</div>
									<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
										<div
											className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
											This is the post title. The post title is exposed up to two lines. If there are more than two
											lines,
											this is done.
										</div>
										<div className='flex items-start gap-[5px] w-full overflow-hidden'>
											<Tag color="default" className='custom-image-code-tag'>
												#Tag 1
											</Tag>
											<Tag color="default" className='custom-image-code-tag'>
												#Tag 2
											</Tag>
											<Tag color="default" className='custom-image-code-tag'>
												#Tag 3
											</Tag>
											<Tag color="default" className='custom-image-code-tag'>
												#Tag 4
											</Tag>
											<Tag color="default" className='custom-image-code-tag'>
												#Tag 5
											</Tag>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*SQUARE*/}
					<div className='relative'>
						<div className='card flex flex-col items-start flex-shrink-0 relative text-white'>
							<Image
								className='flex flex-col justify-center items-center flex-shrink-0 !w-[340px] !h-[340px] rounded-2xl align-middle z-0 object-cover'
								src="https://as2.ftcdn.net/v2/jpg/05/62/07/39/1000_F_562073900_V7TaRndzttVWsfuc1QVAYSdHbFjVAt7y.jpg"
								fill={true}
								alt={"Background Image"}/>
							<div className='flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] z-10'>
								<div
									className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch max-h-[315px]'>
									{/*Avatar and Icon*/}
									<div className='flex justify-between items-center self-stretch'>
										<div className='flex items-center gap-2'>
											<div className='flex items-end w-8 h-8 bg-[#ff9c6e] rounded-full'>
												<div className='flex flex-1 justify-center items-center self-stretch text-white'>U</div>
											</div>
										</div>
										<div className='flex items-start gap-2'>
											<Tag icon={<HeartOutlined/>} color="default" className='custom-image-code-tag'>
												999
											</Tag>
											<Tag icon={<CommentOutlined/>} color="default" className='custom-image-code-tag'>
												999
											</Tag>
										</div>
									</div>
								</div>
								<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
									<Tag icon={<ThunderboltOutlined/>} color="default" className='custom-image-code-tag'>
										Realistic Vision V5.1
									</Tag>
									<div
										className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
										This is the post title. The post title is exposed up to two lines. If there are more than two lines,
										this is done.
									</div>
									<div className='flex items-start gap-[5px] w-full overflow-hidden'>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 1
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 2
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 3
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 4
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 5
										</Tag>
									</div>
								</div>
							</div>
						</div>
						{/*HOVER*/}
						<div
							className='card-hover absolute top-0 flex flex-col items-start flex-shrink-0 text-white bg-black/[.6] rounded-2xl z-20'>
							<Image
								className='flex flex-col justify-center items-center flex-shrink-0 !w-[340px] !h-[340px] rounded-2xl align-middle z-0 object-cover'
								src="https://as2.ftcdn.net/v2/jpg/05/62/07/39/1000_F_562073900_V7TaRndzttVWsfuc1QVAYSdHbFjVAt7y.jpg"
								fill={true}
								alt={"Background Image"}/>
							<div
								className='flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] bg-black/[.6] rounded-2xl z-30'>
								<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
									{/*Avatar and Icon*/}
									<div className='flex gap-2 items-center self-stretch'>
										<Avatar className='avatar'>U</Avatar>
										Jayce
									</div>
									{/*Content*/}
									<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
										<div className='flex py-1 px-[10px] items-start gap-1.5 rounded text-white bg-black/[.6]'>Prompt
										</div>
										<SquareChatContentThumbnail
											className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
											This is the description about content of thumbnail. Maybe it is have multi lines. So this text for
											test
											this case. This is the description about content of thumbnail. Maybe it is have multi lines. So
											this
											text
											for test this case.
										</SquareChatContentThumbnail>
									</div>
								</div>
								<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
									<div
										className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
										This is the post title. The post title is exposed up to two lines. If there are more than two lines,
										this is done.
									</div>
									<div className='flex items-start gap-[5px] w-full overflow-hidden'>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 1
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 2
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 3
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 4
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 5
										</Tag>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*CODE*/}
				<div className='flex flex-col gap-2'>
					{/*SQUARE*/}
					<div className='relative'>
						<div
							className='card flex flex-col items-start flex-shrink-0 w-[340px] h-[340px] bg-[#632e5e] rounded-2xl text-white'>
							<div className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch'>
								{/*Avatar and Icon*/}
								<div className='flex justify-between items-center self-stretch'>
									<Avatar className='avatar'>U</Avatar>
									<div className='flex items-start gap-2'>
										<Tag icon={<HeartOutlined/>} color="default" className='custom-image-code-tag'>
											999
										</Tag>
										<Tag icon={<CommentOutlined/>} color="default" className='custom-image-code-tag'>
											999
										</Tag>
									</div>
								</div>
								{/*Content*/}
								<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
									<SquareChatContentThumbnail
										className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
										@Controller <br/>
										public class TestController {}
									</SquareChatContentThumbnail>
								</div>
							</div>
							<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
								<Tag icon={<ThunderboltOutlined/>} color="default" className='custom-image-code-tag'>
									GPT-3.5-turbo
								</Tag>
								<div
									className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
									This is the post title. The post title is exposed up to two lines. If there are more than two lines,
									this
									is
									done.
								</div>
								<div className='flex items-start gap-[5px] w-full overflow-hidden'>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 1
									</Tag>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 2
									</Tag>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 3
									</Tag>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 4
									</Tag>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 5
									</Tag>
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
										<Avatar className='avatar'>U</Avatar>
										Jayce
									</div>
									{/*Content*/}
									<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
										<div
											className='flex py-1 px-[10px] items-start gap-1.5 rounded text-white bg-black/[.6]'>INSTRUCTION
										</div>
										<SquareChatContentThumbnail
											className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
											@Controller <br/>
											public class TestController {}
										</SquareChatContentThumbnail>
									</div>
								</div>
								<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
									<div
										className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
										This is the post title. The post title is exposed up to two lines. If there are more than two lines,
										this
										is
										done.
									</div>
									<div className='flex items-start gap-[5px] w-full overflow-hidden'>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 1
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 2
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 3
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 4
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 5
										</Tag>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*VERTICAL*/}
					<div className='relative'>
						<div
							className='card flex flex-col items-start flex-shrink-0 w-[340px] h-[460px] bg-[#47397d] rounded-2xl text-white'>
							<div
								className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch max-h-[315px]'>
								{/*Avatar and Icon*/}
								<div className='flex justify-between items-center self-stretch'>
									<Avatar className='avatar'>U</Avatar>
									<div className='flex items-start gap-2'>
										<Tag icon={<HeartOutlined/>} color="default" className='custom-image-code-tag'>
											999
										</Tag>
										<Tag icon={<CommentOutlined/>} color="default" className='custom-image-code-tag'>
											999
										</Tag>
									</div>
								</div>
								{/*Content*/}
								<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
									<VerticalChatContentThumbnail
										className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6 max-h-[170px]'>
										@Controller <br/>
										public class TestController {}
									</VerticalChatContentThumbnail>
								</div>
							</div>
							<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
								<Tag icon={<ThunderboltOutlined/>} color="default" className='custom-image-code-tag'>
									GPT-3.5-turbo
								</Tag>
								<div
									className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
									This is the post title. The post title is exposed up to two lines. If there are more than two lines,
									this
									is
									done.
								</div>
								<div className='flex items-start gap-[5px] w-full overflow-hidden'>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 1
									</Tag>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 2
									</Tag>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 3
									</Tag>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 4
									</Tag>
									<Tag color="default" className='custom-image-code-tag'>
										#Tag 5
									</Tag>
								</div>
							</div>
						</div>
						{/*HOVER*/}
						<div className='card-hover absolute top-0 w-[340px] h-[460px] bg-[#47397d] rounded-2xl z-10'>
							<div
								className='flex flex-col justify-between flex-shrink-0 w-[340px] h-[460px] bg-black/[.6] rounded-2xl text-white'>
								<div
									className='flex flex-col items-start px-[25px] pt-[25px] gap-[25px] flex-1 self-stretch max-h-[315px]'>
									{/*Avatar and Icon*/}
									<div className='flex gap-2 items-center self-stretch'>
										<Avatar className='avatar'>U</Avatar>
										Jayce
									</div>
									{/*Content*/}
									<div className='flex flex-col items-start gap-1.5 flex-1 self-stretch'>
										<div
											className='flex py-1 px-[10px] items-start gap-1.5 rounded text-white bg-black/[.6]'>INSTRUCTION
										</div>
										<VerticalChatContentThumbnail
											className='flex-1 self-stretch overflow-hidden text-white text-ellipsis text-[15px] font-normal leading-6 max-h-[79px]'>
											@Controller <br/>
											public class TestController {}
										</VerticalChatContentThumbnail>
									</div>
								</div>
								<div className='flex flex-col items-start gap-2 self-stretch px-[25px] pt-[30px] pb-[25px]'>
									<div
										className='h-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-[#17px] font-medium leading-6'>
										This is the post title. The post title is exposed up to two lines. If there are more than two lines,
										this
										is
										done.
									</div>
									<div className='flex items-start gap-[5px] w-full overflow-hidden'>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 1
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 2
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 3
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 4
										</Tag>
										<Tag color="default" className='custom-image-code-tag'>
											#Tag 5
										</Tag>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
