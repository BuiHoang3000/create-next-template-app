'use client';

import { useEffect, useState } from "react";
import { IThumbnail, IThumbnailCard } from "@/types/thumbnail";
import { SquareLangThumbnail } from "@/components/thumbnail/lang/SquareLangThumbnail";
import { VerticalLangThumbnail } from "@/components/thumbnail/lang/VerticalLangThumbnail";
import { SquareImageThumbnail } from "@/components/thumbnail/image/SquareImageThumbnail";
import { VerticalImageThumbnail } from "@/components/thumbnail/image/VerticalImageThumbnail";
import { SquareCodeThumbnail } from "@/components/thumbnail/code/SquareCodeThumbnail";
import { VerticalCodeThumbnail } from "@/components/thumbnail/code/VerticalCodeThumbnail";
import { useResizeObserver } from "@/hooks/useResizeObserver";

import './thumbnail.scss';

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
			hashTag: ["Tag 1"],
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
			hashTag: ["Tag 2"],
			category: "L",
			postPinSize: 'S',
			languageCategory: {
				finalAnswer: "This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case.",
				systemPrompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
		{
			sharedPromptId: 3,
			nickname: "Harry",
			numberOfLikes: 699,
			numberOfComments: 43,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["Tag 3"],
			category: "L",
			postPinSize: 'S',
			languageCategory: {
				finalAnswer: "This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case.",
				systemPrompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
		{
			sharedPromptId: 4,
			nickname: "Monday",
			numberOfLikes: 88,
			numberOfComments: 21,
			model: "Realistic Vision V5.1",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["Tag 4"],
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
			hashTag: ["Tag 5"],
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
			hashTag: ["Tag 6"],
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
			nickname: "Potter",
			numberOfLikes: 200,
			numberOfComments: 30,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["Tag 7"],
			category: "L",
			postPinSize: 'V',
			languageCategory: {
				finalAnswer: "This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case.",
				systemPrompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
		{
			sharedPromptId: 8,
			nickname: "Friday",
			numberOfLikes: 999,
			numberOfComments: 15,
			model: "Realistic Vision V5.1",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["Tag 8"],
			category: "I",
			postPinSize: 'V',
			imageCategory: {
				imageData: "https://as1.ftcdn.net/v2/jpg/05/62/07/38/1000_F_562073881_Mi03fL64vnVkHeNKYXhJ40Pn3jJF3v8h.jpg",
				prompt: "Maybe it is have multi lines. So this text for test this case. This is the description about content of thumbnail. Maybe it is have multi lines. So this text for test this case."
			},
		},
		{
			sharedPromptId: 9,
			nickname: "Saturday",
			numberOfLikes: 732,
			numberOfComments: 29,
			model: "GPT-3.5-turbo",
			postTitle: "This is the post title. The post title is exposed up to two lines. If there are more than two lines, this is done.",
			hashTag: ["Tag 9"],
			category: "C",
			postPinSize: 'V',
			codeCategory: {
				codeShared: "@Controller <br/>\n" +
					"\t\t\t\t\t\t\t\t\t\tpublic class TestController {}",
				instruction: "@Controller <br/>\n" +
					"\t\t\t\t\t\t\t\t\t\tpublic class TestController {}"
			},
		},
	]
}

export default function Thumbnail() {
	const {ref: divRef, width: divWidth} = useResizeObserver<HTMLDivElement>();
	const [col1, setCol1] = useState<IThumbnailCard[]>([]);
	const [col2, setCol2] = useState<IThumbnailCard[]>([]);
	const [col3, setCol3] = useState<IThumbnailCard[]>([]);
	const [col4, setCol4] = useState<IThumbnailCard[]>([]);
	const [col5, setCol5] = useState<IThumbnailCard[]>([]);
	const [colNumbers, setColNumbers] = useState(5);

	useEffect(() => {
		if (divWidth <= 1280) {
			setColNumbers(3);
		}
		if (divWidth <= 1600) {
			setColNumbers(4);
		}
		if (divWidth > 1600) {
			setColNumbers(5);
		}
	}, [divWidth]);

	useEffect(() => {
		const column1: IThumbnailCard[] = [];
		const column2: IThumbnailCard[] = [];
		const column3: IThumbnailCard[] = [];
		const column4: IThumbnailCard[] = [];
		const column5: IThumbnailCard[] = [];
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
			if (divWidth > 1280 && index % colNumbers === 3) {
				column4.push(item);
			}
			if (divWidth > 1600 && index % colNumbers === 4) {
				column5.push(item);
			}
		})
		setCol1(column1);
		setCol2(column2);
		setCol3(column3);
		setCol4(column4);
		setCol5(column5);
	}, [divWidth, colNumbers]);

	const renderUi = (key: number, category: string, postPinSize: string, data: IThumbnailCard) => {
		switch (category) {
			case 'L': {
				if (postPinSize === 'S') {
					return (
						<SquareLangThumbnail key={key} data={data}/>
					)
				} else {
					return (
						<VerticalLangThumbnail key={key} data={data}/>
					)
				}
			}
			case 'I': {
				if (postPinSize === 'S') {
					return (
						<SquareImageThumbnail key={key} data={data}/>
					)
				} else {
					return (
						<VerticalImageThumbnail key={key} data={data}/>
					)
				}
			}
			case 'C': {
				if (postPinSize === 'S') {
					return (
						<SquareCodeThumbnail key={key} data={data}/>
					)
				} else {
					return (
						<VerticalCodeThumbnail key={key} data={data}/>
					)
				}
			}
		}
	}

	return (
		<div ref={divRef} className='w-full bg-white text-black p-5 flex justify-center'>
			<div className='flex gap-2'>
				{/*COL 1*/}
				<div className='flex flex-col gap-2'>
					{col1.map((item) => renderUi(item.sharedPromptId, item.category, item.postPinSize, item))}
				</div>
				{/*COL 2*/}
				<div className='flex flex-col gap-2'>
					{col2.map((item) => renderUi(item.sharedPromptId, item.category, item.postPinSize, item))}
				</div>
				{/*COL 3*/}
				<div className='flex flex-col gap-2'>
					{col3.map((item) => renderUi(item.sharedPromptId, item.category, item.postPinSize, item))}
				</div>
				{/*COL 4*/}
				{col4.length > 0 && <div className='flex flex-col gap-2'>
					{col4.map((item) => renderUi(item.sharedPromptId, item.category, item.postPinSize, item))}
        </div>}
				{/*COL 5*/}
				{col5.length > 0 && <div className='flex flex-col gap-2'>
					{col5.map((item) => renderUi(item.sharedPromptId, item.category, item.postPinSize, item))}
        </div>}
			</div>
		</div>
	)
}
